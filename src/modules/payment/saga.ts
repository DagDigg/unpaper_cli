import {
    CreatePaymentMethodData,
    loadStripe,
    PaymentIntentResult,
    PaymentMethodResult,
    SetupIntentResult,
    Stripe,
    StripeError,
} from '@stripe/stripe-js';
import {
    ConnectedPaymentIntentResponse,
    CreateSetupIntentResponse,
    Customer,
    GetConnectAccountLinkResponse,
    GetDashboardLinkResponse,
    GetOwnConnectedAccountResponse,
    GetRoomSubscriptionByRoomIDResponse,
    GetRoomSubscriptionsResponse,
    GetSubscriptionByIDResponse,
    Invoice,
    PaymentIntent,
    PaymentIntentStatus,
    PaymentMethod,
    Plan,
    RoomSubscription,
    SubscribeToRoomResponse,
    Subscription,
    SubscriptionStatus,
} from 'api/proto/v1/payment_pb';
import { UnpaperServiceClient } from 'api/proto/v1/Unpaper-serviceServiceClientPb';
import { STRIPE_PK } from 'common/constants';
import { history } from 'common/history';
import { isSuccess, Response, SuccessResponse } from 'common/response';
import { hasSucceeded } from 'common/sagaUtils';
import { grpc } from 'grpc-web-client';
import { call, delay, put, select, takeLeading } from 'redux-saga/effects';
import Client from 'services/client';
import { addToast } from 'services/toasts';
import { PayloadAction } from 'typesafe-actions';
import * as actions from './actions';
import * as api from './api';
import * as selectors from './selectors';

export const GENERIC_PAYMENT_ERROR = 'Something went wrong during the operation. Please try with a different card, or contact support';

type SubscriptionParams = {
    subscription: Subscription.AsObject;
    desiredPlan: Plan;
    invoice?: Invoice.AsObject;
    priceId?: string;
    paymentMethodId: string;
    stripe: Stripe;
    isRetry?: boolean;
};

function* handleSubscribeToPlan(action: ReturnType<typeof actions.subscribeToPlan.request>) {
    const { firstName, lastName, card, stripe, plan } = action.payload;
    const fullName = firstName.trim() + lastName.trim();

    try {
        const client = Client.get();
        const currSubsc: Subscription.AsObject = yield select(selectors.selectSubscription);

        if (!card) {
            throw new Error('missing card information');
        }

        // Create payment method
        const pmReq: CreatePaymentMethodData = {
            type: 'card',
            card: card,
            billing_details: {
                name: fullName,
            },
        };
        const pmRes: PaymentMethodResult = yield call([stripe, 'createPaymentMethod'], pmReq);
        handleStripeError(pmRes.error);
        if (!pmRes.paymentMethod) {
            throw new Error('missing payment method');
        }

        // Get up to date subscription from stripe
        const updatedSubscRes: GetSubscriptionByIDResponse.AsObject = yield call([api, 'getSubscriptionById'], {
            client,
            params: {
                api: 'v1',
                subscriptionId: currSubsc.id,
            },
        });
        const updatedSubsc = updatedSubscRes.subscription;

        if (updatedSubsc && updatedSubsc.latestInvoice?.paymentIntent?.status === PaymentIntentStatus.Enum.REQUIRES_PAYMENT_METHOD) {
            if (plan === updatedSubscRes.subscription?.price?.plan) {
                // User selected same plan, retry latest invoice
                const subRes: Response<SubscriptionParams> = yield retryInvoiceWithNewPM({
                    paymentMethodId: pmRes.paymentMethod.id,
                    desiredPlan: plan,
                    stripe: stripe,
                    subscription: updatedSubsc,
                    invoice: updatedSubsc.latestInvoice,
                    priceId: updatedSubsc.price?.id ?? '',
                });
                if (!isSuccess(subRes)) {
                    throw new Error('Failure occurred during the payment retry of the invoice');
                }
                const customer: Customer.AsObject = yield call([api, 'customerInfo'], {
                    client,
                    params: { api: 'v1' },
                });
                yield call(handleSuccessfulSubscription, actions.subscribeToPlan.success(customer));
                return;
            }
        }

        // Subscribe to plan
        const customer: Customer.AsObject = yield call([api, 'subscribeToPlan'], {
            client,
            params: {
                plan: plan,
                paymentMethodId: pmRes.paymentMethod.id,
            },
        });

        if (customer.subscriptionsList.length !== 1) {
            throw new Error('subscriptions list wrong length');
        }
        const subscription = customer.subscriptionsList[0];

        let subRes: Response<SubscriptionParams> = yield handlePMRequiresAction({
            subscription: subscription,
            desiredPlan: plan,
            paymentMethodId: pmRes.paymentMethod.id,
            stripe: stripe,
        });
        subRes = yield handleRequiresPaymentMethod(subRes);
        if (!isSuccess(subRes)) {
            throw new Error(
                subRes.failure?.reason ?? 'An error occurred during the transaction. Please try again later or with a different card',
            );
        }

        yield call(handleSuccessfulSubscription, actions.updateSubscription.success(customer));
    } catch (error) {
        addToast({ type: 'error', label: 'An error occurred' });
        yield put(actions.subscribeToPlan.failure());
        console.error(error);
    }
}

// handleSuccessfulSubscription handles a successful subscription to a plan,
// and executes the passed action before navigating to root
function* handleSuccessfulSubscription(successAction: PayloadAction<string, any>) {
    addToast({ label: 'Thank you for going pro!' });
    yield put(successAction);
    yield delay(1000);
    yield history.push('/');
}

function* handlePMRequiresAction(params: SubscriptionParams): Generator<any, Response<SubscriptionParams>, any> {
    try {
        const currSub: Subscription.AsObject | undefined = yield select(selectors.selectSubscription);

        // If it's a first payment attempt, the payment intent is on the subscription latest invoice.
        // If it's a retry, the payment intent will be on the invoice itself.
        const paymentIntent: PaymentIntent.AsObject | undefined = params.invoice
            ? params.invoice.paymentIntent
            : params.subscription.latestInvoice?.paymentIntent;

        if (
            paymentIntent?.status === PaymentIntentStatus.Enum.REQUIRES_ACTION ||
            (params.isRetry && paymentIntent?.status === PaymentIntentStatus.Enum.REQUIRES_PAYMENT_METHOD)
        ) {
            const confirm: PaymentIntentResult = yield call(
                [params.stripe, 'confirmCardPayment'],
                params.subscription.latestInvoice!.paymentIntent!.clientSecret ?? '',
                {
                    payment_method: params.paymentMethodId,
                },
            );

            // Error scenario
            if (confirm.error) {
                // Start code flow to handle updating the payment details.
                // Display error message.
                // The card was declined (i.e. insufficient funds, card has expired, etc).
                return {
                    failure: {
                        reason:
                            confirm.error.message ??
                            'Something went wrong while attempting payment. Please try with a different card or contact support',
                    },
                };
            }

            // Operation completed
            if (confirm.paymentIntent.status === 'succeeded') {
                // Operation succeeded
                return { success: params };
            }
        } // Do not upgrade if user selected the same active plan
        else if (params.subscription.status === SubscriptionStatus.ACTIVE && params.desiredPlan === currSub?.price?.plan) {
            // No action required
            return { success: params };
        }

        // Trial subscription
        if (params.subscription.status === SubscriptionStatus.TRIALING) {
            return { success: params };
        }

        // Other payment intent status
        return { failure: { reason: 'Unexpected payment intent status' } };
    } catch (error) {
        console.error(error);
        return { failure: { reason: 'An error occurred during the operation' } };
    }
}

// handleRequiresPaymentMethod validates the subscription param and return an error if the status is REQUIRES_PAYMENT_METHOD
// or the subscription already is in a failure state
function handleRequiresPaymentMethod(params: Response<SubscriptionParams>): Response<SubscriptionParams> {
    if (!isSuccess(params)) {
        throw new Error(params.failure?.reason ?? 'Something bad happened');
    }
    const {
        success: { subscription },
    } = params as SuccessResponse<SubscriptionParams>;

    if (subscription.status === SubscriptionStatus.ACTIVE) {
        // No action required
        return { success: params.success };
    } else if (subscription.latestInvoice?.paymentIntent?.status === PaymentIntentStatus.Enum.REQUIRES_PAYMENT_METHOD) {
        throw new Error('Card declined');
    }

    return { success: params.success };
}

function* retryInvoiceWithNewPM(params: SubscriptionParams): Generator<any, Response<SubscriptionParams>, any> {
    try {
        const client = Client.get();

        const invoice: Invoice.AsObject = yield call([api, 'retryInvoice'], {
            client,
            params: {
                customerId: params.subscription.customerId,
                invoiceId: params.subscription.latestInvoice?.id ?? '',
                paymentMethodId: params.paymentMethodId,
            },
        });

        let subRes: Response<SubscriptionParams>;
        subRes = yield handlePMRequiresAction({
            subscription: params.subscription,
            desiredPlan: params.desiredPlan,
            paymentMethodId: params.paymentMethodId,
            stripe: params.stripe,
            isRetry: true,
            invoice: invoice,
        });
        subRes = yield handleRequiresPaymentMethod(subRes);
        if (isSuccess(subRes)) {
            return { success: subRes.success };
        } else {
            return { failure: subRes.failure };
        }
    } catch (error) {
        console.error(error);
        return { failure: { reason: 'An error occurred during the operation' } };
    }
}

function* fetchCustomer() {
    try {
        const client = Client.get();
        const cus: Customer.AsObject = yield call([api, 'customerInfo'], {
            client,
            params: { api: 'v1' },
        });

        yield put(actions.fetchCustomer.success(cus));
    } catch (err) {
        yield put(actions.fetchCustomer.failure());
        console.error(err);
    }
}

function handleStripeError(err?: StripeError) {
    if (!err) {
        return;
    }
    throw new Error(err.message);
}

function* handleReplaceCard(action: ReturnType<typeof actions.replaceCard.request>) {
    const {
        cardDetails: { firstName, lastName, stripe, card },
        onSuccess,
    } = action.payload;
    try {
        if (!card) {
            throw new Error('missing card');
        }

        const fullName = firstName.trim() + lastName.trim();
        const client = Client.get();
        const customer: Customer.AsObject = yield select(selectors.selectCustomer);

        // Create Setup Intent to obtain an id
        const createSIResp: CreateSetupIntentResponse.AsObject = yield api.createSetupIntent({ client, params: { api: 'v1' } });

        // Create a payment method
        const pmReq: CreatePaymentMethodData = {
            type: 'card',
            card: card,
            billing_details: {
                name: fullName,
            },
        };
        const pmRes: PaymentMethodResult = yield call([stripe, 'createPaymentMethod'], pmReq);
        // Check stripe error and check that payment method has been returned
        handleStripeError(pmRes.error);
        if (!pmRes.paymentMethod) {
            throw new Error('missing payment method in createPaymentMethod res');
        }

        const siRes: SetupIntentResult = yield call([stripe, 'confirmCardSetup'], createSIResp.clientSecret, {
            payment_method: pmRes.paymentMethod.id,
        });
        handleStripeError(siRes.error);

        const newPaymentMethod: PaymentMethod.AsObject = yield api.attachPaymentMethod({
            client,
            params: {
                api: 'v1',
                paymentMethodId: pmRes.paymentMethod.id,
                customerId: customer.customerId,
            },
        });

        yield put(actions.replaceCard.success(newPaymentMethod));
        if (onSuccess) yield call(onSuccess);
        addToast({ label: 'Card successfully added!' });
    } catch (error) {
        console.error(error);
        addToast({ label: GENERIC_PAYMENT_ERROR, type: 'error' });
        yield put(actions.replaceCard.failure());
    }
}

function* handleUpdateSubscription(action: ReturnType<typeof actions.updateSubscription.request>) {
    try {
        const { plan, stripe } = action.payload;
        if (!stripe) {
            addToast({
                type: 'error',
                label: 'Oops, an unexpected error occurred. Please try again later. If the error persists, please contact support',
            });
            throw new Error('stripe instance missing');
        }
        const client = Client.get();
        const storedCustomer: Customer.AsObject = yield select(selectors.selectCustomer);

        // Get up to date subscription from stripe
        const { subscription: updatedSubsc }: GetSubscriptionByIDResponse.AsObject = yield call([api, 'getSubscriptionById'], {
            client,
            params: {
                api: 'v1',
                subscriptionId: storedCustomer.subscriptionsList[0].id,
            },
        });

        // If previous subscription failed, do not update subscription.
        // Instead, retry the payment on the latest invoice if user has selected the same plan
        if (updatedSubsc && updatedSubsc.latestInvoice?.paymentIntent?.status === PaymentIntentStatus.Enum.REQUIRES_PAYMENT_METHOD) {
            if (plan === updatedSubsc.price?.plan) {
                // User has selected the same plan,
                // retry the invoice payment
                const subRes: Response<SubscriptionParams> = yield retryInvoiceWithNewPM({
                    paymentMethodId: storedCustomer.defaultPaymentMethod?.id ?? '',
                    desiredPlan: plan,
                    stripe: stripe,
                    subscription: updatedSubsc,
                    invoice: updatedSubsc.latestInvoice,
                    priceId: updatedSubsc.price?.id ?? '',
                });
                if (isSuccess(subRes)) {
                    const customer: Customer.AsObject = yield call([api, 'customerInfo'], { client, params: { api: 'v1' } });
                    yield call(handleSuccessfulSubscription, actions.updateSubscription.success(customer));
                    return;
                }
                throw new Error('Failure occurred during the payment retry of the invoice');
            }
        }

        const customerRes: Response<Customer.AsObject> = yield updateSubscription({
            customer: storedCustomer,
            client: client,
            plan: plan,
            stripe: stripe,
        });

        if (!isSuccess(customerRes)) {
            throw new Error(customerRes.failure?.reason);
        }

        addToast({ label: 'Thank you for going pro!' });
        yield put(actions.updateSubscription.success(customerRes.success!));
        yield delay(1000);
        yield history.push('/');
    } catch (error) {
        yield put(actions.updateSubscription.failure());
        addToast({ type: 'error', label: 'Whoops, an error occurred. Please try with a different card or contact support.' });
        console.error(error);
    }
}

type UpdateSubscriptionParams = {
    customer: Customer.AsObject;
    plan: Plan;
    client: UnpaperServiceClient;
    stripe: Stripe;
};
function* updateSubscription(p: UpdateSubscriptionParams): Generator<any, Response<Customer.AsObject>, any> {
    const updatedCustomer: Customer.AsObject = yield call([api, 'updateSubscription'], {
        client: p.client,
        params: {
            api: 'v1',
            customerId: p.customer.customerId,
            plan: p.plan,
        },
    });

    if (p.customer.subscriptionsList.length !== 1) {
        return { failure: { reason: 'subscriptions list wrong length' } };
    }
    const subscription = updatedCustomer.subscriptionsList[0];
    let subRes: Response<SubscriptionParams> = yield handlePMRequiresAction({
        subscription: subscription,
        desiredPlan: p.plan,
        paymentMethodId: updatedCustomer.defaultPaymentMethod!.id,
        stripe: p.stripe,
    });
    // TODO: use subRes = yield ...
    subRes = yield handleRequiresPaymentMethod(subRes);

    if (!isSuccess(subRes)) {
        return { failure: { reason: subRes.failure?.reason ?? '' } };
    }
    return { success: updatedCustomer };
}

function* handleInvoicePreview(action: ReturnType<typeof actions.invoicePreview.request>) {
    try {
        const client = Client.get();
        const { plan, coupon } = action.payload;
        const customer: Customer.AsObject = yield select(selectors.selectCustomer);
        // Get up to date subscription from stripe
        const { subscription }: GetSubscriptionByIDResponse.AsObject = yield call([api, 'getSubscriptionById'], {
            client,
            params: {
                api: 'v1',
                subscriptionId: customer.subscriptionsList[0].id,
            },
        });

        const inv: Invoice.AsObject = yield call([api, 'invoicePreview'], {
            client,
            params: {
                api: 'v1',
                plan: plan,
                customerId: customer.customerId,
                subscriptionId: subscription?.id ?? '',
                subscriptionItemId: subscription?.itemsList[0]?.id ?? '',
                coupon: coupon,
            },
        });

        yield put(actions.invoicePreview.success(inv));
    } catch (error) {
        console.error(error);
    }
}

function* handleCouponCheck(action: ReturnType<typeof actions.couponCheck.request>) {
    try {
        const client = Client.get();
        yield call([api, 'couponCheck'], { client, params: { api: 'v1', id: action.payload } });
        addToast({ label: 'Coupon added successfully!' });
        yield put(actions.couponCheck.success());
    } catch (error) {
        yield put(actions.couponCheck.failure());
    }
}

function* handleGetConnectAccountLink() {
    try {
        const client = Client.get();
        const res: GetConnectAccountLinkResponse.AsObject = yield call([api, 'getConnectAccountLink'], { client, params: null });
        yield put(actions.getConnectAccountLink.success(res));
    } catch (error) {
        yield put(actions.getConnectAccountLink.failure());
    }
}

function* handleMakeDonation(action: ReturnType<typeof actions.makeDonation.request>) {
    try {
        const client = Client.get();
        const { stripe, cardDetails, pmId, onSuccess, ...donationParams } = action.payload;

        if (cardDetails && cardDetails.card) {
            // Customer has no payment method attached
            yield put(actions.replaceCard.request({ cardDetails }));
            const ok: boolean = yield hasSucceeded(actions.replaceCard);
            if (!ok) {
                throw new Error('error replacing card');
            }
        }

        const res: ConnectedPaymentIntentResponse.AsObject = yield call([api, 'makeDonation'], {
            client,
            params: donationParams,
        });

        yield call(handleConnectedPIResponse, res);

        yield call(onSuccess, donationParams.amount);
        yield put(actions.fetchCustomer.request());
        yield put(actions.makeDonation.success());
    } catch (error) {
        yield put(actions.makeDonation.failure());
        console.log(error);
    }
}

function* handleConnectStripeAccount() {
    try {
        const client = Client.get();
        const res: Customer.AsObject = yield call([api, 'createStripeAccount'], { client, params: null });
        yield put(actions.connectStripeAccount.success(res));
        yield history.push('/refresh-connect-link');
    } catch (error) {
        yield put(actions.connectStripeAccount.failure());
    }
}

function* handleGoToDashboard() {
    try {
        const client = Client.get();
        const res: GetDashboardLinkResponse.AsObject = yield call([api, 'getDashboardLink'], { client, params: null });
        yield put(actions.goToDashboard.success());
        yield history.push(res.link);
    } catch (error) {
        yield put(actions.goToDashboard.failure());
    }
}

function* handlePayRoomEntrance(action: ReturnType<typeof actions.payRoomEntrance.request>) {
    try {
        const { cardValues, roomId } = action.payload;
        const customer: Customer.AsObject = yield select(selectors.selectCustomer);
        const hasDefaultPaymentMethod = !!customer.defaultPaymentMethod?.id;

        if (!hasDefaultPaymentMethod) {
            yield put(actions.replaceCard.request({ cardDetails: cardValues }));
            const ok: boolean = yield hasSucceeded(actions.replaceCard);
            if (!ok) {
                throw new Error('error replacing card');
            }
        }

        yield call(payRoomEntrance, roomId);

        yield put(actions.payRoomEntrance.success());
    } catch (error) {
        yield put(actions.payRoomEntrance.failure());
        console.log(error);
    }
}

function* payRoomEntrance(roomId: string) {
    const client = Client.get();
    const res: ConnectedPaymentIntentResponse.AsObject = yield call([api, 'payRoomEntrance'], {
        client,
        params: { roomId },
    });

    yield call(handleConnectedPIResponse, res);
}

function* handleSubscribeToRoom(action: ReturnType<typeof actions.subscribeToRoom.request>) {
    try {
        const { cardValues, roomId } = action.payload;
        const roomSubscription: RoomSubscription.AsObject = yield select(selectors.selectRoomSubscriptionByRoomId(roomId));
        const customer: Customer.AsObject = yield select(selectors.selectCustomer);
        // If customer has default PM, so should the connected one, as it's a reflection of it
        const hasDefaultPaymentMethod = !!customer.defaultPaymentMethod?.id;

        // Replace card if customer has no default payment method
        if (!hasDefaultPaymentMethod) {
            yield put(actions.replaceCard.request({ cardDetails: cardValues }));
            const ok: boolean = yield hasSucceeded(actions.replaceCard);
            if (!ok) {
                throw new Error('error replacing card');
            }
        }

        // Subscribe to room or attempt a payment retry
        yield call(getSubscribeToRoomFn(roomId, roomSubscription));

        // User subscribed successfully
        yield put(actions.subscribeToRoom.success());
    } catch (error) {
        yield put(actions.subscribeToRoom.failure());
        console.log(error);
    }
}

// Returns a subscription function if customer has never subscribed to it,
// otherwise returns a retry room subscription function with a subscription function callback
function getSubscribeToRoomFn(roomId: string, roomSubscription?: RoomSubscription.AsObject) {
    const hasLatestInvoice = !!roomSubscription?.latestInvoice;

    // User already subscribed to the room, but payment was rejected
    if (hasLatestInvoice) {
        return function* () {
            yield call(retryRoomSubscription, roomSubscription);
        };
    }

    // First time payment
    return function* () {
        yield call(subscribeToRoom, roomId);
    };
}

// Retries the room subscription if its payment intent is in a failure state
function* retryRoomSubscription(roomSubscription?: RoomSubscription.AsObject) {
    const latestPIStatus = roomSubscription?.latestInvoice?.paymentIntent?.status;
    const client = Client.get();
    const roomId = roomSubscription?.roomId ?? '';
    const isValidPIStatus =
        latestPIStatus !== undefined &&
        [PaymentIntentStatus.Enum.REQUIRES_ACTION, PaymentIntentStatus.Enum.REQUIRES_PAYMENT_METHOD].includes(latestPIStatus);

    if (!isValidPIStatus) {
        // Payment intent status does not exist or is invalid
        throw new Error('Invalid subscription received');
    }

    if (latestPIStatus === PaymentIntentStatus.Enum.SUCCEEDED) {
        // Payment intent already succeeded
        throw new Error('Payment already succeeded');
    }

    const res: ConnectedPaymentIntentResponse.AsObject = yield call([api, 'retryRoomSubscription'], { client, params: { roomId } });
    yield call(handleConnectedPIResponse, res);
}

/**
 * Handles connected payment intent response from server.
 * It handles 3DSecure authentication on cards that requires it.
 *
 * @param res ConnectedPaymentIntentResponse
 * @returns nothing
 */
function* handleConnectedPIResponse(res: ConnectedPaymentIntentResponse.AsObject) {
    switch (res.paymentIntent?.status) {
        case PaymentIntentStatus.Enum.SUCCEEDED:
            return;
        case PaymentIntentStatus.Enum.REQUIRES_ACTION: {
            const s: Stripe = yield loadStripe(STRIPE_PK, { stripeAccount: res.accountId });
            yield call(handlePIRequiresAction, s, res.paymentIntent.clientSecret);
            return;
        }
        default:
            throw new Error('payment failed. Status received: ' + res.paymentIntent?.status);
    }
}

// Subscription handler for first room subscription. If user has a failed subscription, other methods should be called,
// as 'subscribeToRoom' creates a new subscription
function* subscribeToRoom(roomId: string) {
    const client = Client.get();
    const res: SubscribeToRoomResponse.AsObject = yield call([api, 'subscribeToRoom'], { client, params: { roomId } });
    const pi = res.subscription?.latestInvoice?.paymentIntent;

    // 3D Secure requires additional checks
    if (pi && pi.status === PaymentIntentStatus.Enum.REQUIRES_ACTION) {
        const s: Stripe = yield loadStripe(STRIPE_PK, { stripeAccount: res.accountId });
        yield call(handlePIRequiresAction, s, pi.clientSecret);
    }

    // Normal flow
    if (res.subscription?.status !== SubscriptionStatus.ACTIVE) {
        throw new Error('unknown subscription status received: ' + res.subscription?.status);
    }
}

function* handlePIRequiresAction(stripe: Stripe, clientSecret: string) {
    if (!stripe) {
        throw new Error('missing Stripe instance');
    }
    const confirm: PaymentIntentResult = yield call([stripe, 'confirmCardPayment'], clientSecret);
    handleStripeError(confirm.error);
    if (confirm.paymentIntent?.status !== 'succeeded') {
        throw new Error('unknown payment intent status received');
    }
}

function* handleGetRoomSubscriptions(action: ReturnType<typeof actions.getRoomSubscriptions.request>) {
    try {
        const client = Client.get();
        const res: GetRoomSubscriptionsResponse.AsObject = yield call([api, 'getRoomSubscriptions'], { client, params: null });
        yield put(actions.getRoomSubscriptions.success(res));
    } catch (error) {
        yield put(actions.getRoomSubscriptions.failure());
    }
}

function* handleGetRoomSubscription(action: ReturnType<typeof actions.getRoomSubscription.request>) {
    try {
        const client = Client.get();
        const res: GetRoomSubscriptionByRoomIDResponse.AsObject = yield call([api, 'getRoomSubscriptionByRoomId'], {
            client,
            params: { roomId: action.payload.roomId },
        });
        if (!res.subscription) {
            throw new Error('room subscription not found');
        }
        yield put(actions.getRoomSubscription.success(res.subscription!));
    } catch (error) {
        console.log(error);
        yield put(actions.getRoomSubscription.failure({ code: grpc.Code.Internal }));
    }
}

function* fetchOwnConnectedAccount() {
    try {
        const client = Client.get();
        const connectedAccount: GetOwnConnectedAccountResponse.AsObject = yield call([api, 'getOwnConnectedAccount'], {
            client,
            params: null,
        });
        yield put(actions.getOwnConnectedAccount.success(connectedAccount));
    } catch (error) {
        yield put(actions.getOwnConnectedAccount.failure());
    }
}

export default function* saga() {
    yield takeLeading(actions.subscribeToPlan.request, handleSubscribeToPlan);
    yield takeLeading(actions.replaceCard.request, handleReplaceCard);
    yield takeLeading(actions.updateSubscription.request, handleUpdateSubscription);
    yield takeLeading(actions.invoicePreview.request, handleInvoicePreview);
    yield takeLeading(actions.couponCheck.request, handleCouponCheck);
    yield takeLeading(actions.fetchCustomer.request, fetchCustomer);
    yield takeLeading(actions.getConnectAccountLink.request, handleGetConnectAccountLink);
    yield takeLeading(actions.makeDonation.request, handleMakeDonation);
    yield takeLeading(actions.payRoomEntrance.request, handlePayRoomEntrance);
    yield takeLeading(actions.subscribeToRoom.request, handleSubscribeToRoom);
    yield takeLeading(actions.connectStripeAccount.request, handleConnectStripeAccount);
    yield takeLeading(actions.goToDashboard.request, handleGoToDashboard);
    yield takeLeading(actions.getRoomSubscription.request, handleGetRoomSubscription);
    yield takeLeading(actions.getRoomSubscriptions.request, handleGetRoomSubscriptions);
    yield takeLeading(actions.getOwnConnectedAccount.request, fetchOwnConnectedAccount);

    yield call(fetchCustomer);
    yield call(fetchOwnConnectedAccount);
}
