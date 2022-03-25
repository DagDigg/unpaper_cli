import { put, takeLeading } from '@redux-saga/core/effects';
import { Plan, SubscriptionStatus } from 'api/proto/v1/payment_pb';
import { hasSucceeded, putAsyncAction, Result } from 'common/sagaUtils';
import * as authActions from 'modules/auth/actions';
import * as mainActions from 'modules/main/actions';
import * as mainChatActions from 'modules/main/chat/actions';
import * as paymentActions from 'modules/payment/actions';
import { GENERIC_PAYMENT_ERROR } from 'modules/payment/saga';
import { addToast } from 'services/toasts';
import { ModalPayRoomStep } from '../chat/types';
import { AppPlan } from '../types';
import * as actions from './actions';

function* fetchCustomer() {
    yield put(paymentActions.fetchCustomer.request());
}

/**
 * Subscribes the user to the room, if no previous subscription
 * was made. Otherwise, if there was a previous subscription
 * and its recurring payment failed, re attempts the payment.
 * It polls the room access check on success
 *
 * @param action actions.subscribeToRoom.request
 */
function* handleSubscribeToRoom(action: ReturnType<typeof actions.subscribeToRoom.request>) {
    try {
        yield put(mainChatActions.setModalPayRoomStep(ModalPayRoomStep.SUBSCRIPTION_LOADING));
        yield put(paymentActions.subscribeToRoom.request(action.payload));

        const ok: boolean = yield hasSucceeded(paymentActions.subscribeToRoom);
        if (!ok) {
            // Subscription failed
            throw new Error('failed to subscribe');
        }

        // Subscription succeeded
        yield addToast({ label: 'Congratulations! You can now join the room!' });
        yield put(mainChatActions.setModalPayRoomStep(ModalPayRoomStep.SUBSCRIPTION_POLLING));
        yield put(mainChatActions.pollRoomAccessCheck.request({ roomId: action.payload.roomId }));
    } catch (error) {
        yield put(mainChatActions.setModalPayRoomStep(ModalPayRoomStep.IDLE));
        yield addToast({ label: GENERIC_PAYMENT_ERROR, type: 'error' });
    }
}

function* handlePayRoomEntrance(action: ReturnType<typeof actions.payRoomEntrance.request>) {
    try {
        const { roomId, cardDetails } = action.payload;

        // Set loading state
        yield put(mainChatActions.setModalPayRoomStep(ModalPayRoomStep.PAYMENT_LOADING));

        // Pay room entrance, on success start polling
        yield put(paymentActions.payRoomEntrance.request({ roomId, cardValues: cardDetails }));
        const ok: boolean = yield hasSucceeded(paymentActions.payRoomEntrance);
        if (!ok) {
            // One time payment failed
            throw new Error('payment failed');
        }

        // One time payment succeeded
        yield addToast({ label: 'Congratulations! You can now join the room!' });
        yield put(mainChatActions.setModalPayRoomStep(ModalPayRoomStep.PAYMENT_POLLING));
        yield put(mainChatActions.pollRoomAccessCheck.request({ roomId }));
    } catch (error) {
        yield addToast({
            type: 'error',
            label: 'Oops, an error occurred while attempting the payment. Please try again. If the error persist contact the support',
        });
        yield put(mainChatActions.setModalPayRoomStep(ModalPayRoomStep.IDLE));
    }
}

function* handleFetchCustomer(action: ReturnType<typeof actions.fetchCustomer>) {
    try {
        const {
            success: {
                payload: { subscriptionsList },
            },
            isSuccess,
        }: Result<typeof paymentActions.fetchCustomer> = yield putAsyncAction(paymentActions.fetchCustomer);
        if (!isSuccess) {
            throw new Error('failed to fetch customer');
        }
        if (subscriptionsList.length === 0) {
            return;
        }

        if (subscriptionsList.length !== 1) {
            console.error('invalid subscription list length: ', subscriptionsList.length);
        }

        const plan = subscriptionsList[0].price?.plan;
        if (plan === undefined) {
            throw new Error('Undefined plan');
        }

        if (plan === Plan.UNPAPER_FREE) return;

        if ([Plan.UNPAPER_PLUS_MONTHLY, Plan.UNPAPER_PLUS_YEARLY].includes(plan)) {
            const status = subscriptionsList[0].status;
            if ([SubscriptionStatus.TRIALING, SubscriptionStatus.ACTIVE].includes(status)) {
                yield put(mainActions.setAppPlan(AppPlan.Plus));
                return;
            }
        }

        // Subscription is not active
        addToast({
            type: 'error',
            label: 'Seems that your latest payment attempt has failed. Please enter a different payment method and retry subscribing, or contact support.',
        });
    } catch (error) {
        console.error(error);
    }
}

export default function* saga() {
    yield takeLeading(
        [authActions.googleCallback.success, authActions.emailSignin.success, authActions.emailSignup.success],
        fetchCustomer,
    );
    yield takeLeading(actions.fetchCustomer, handleFetchCustomer);

    // Subscription
    yield takeLeading(actions.subscribeToRoom.request, handleSubscribeToRoom);
    // One-time
    yield takeLeading(actions.payRoomEntrance.request, handlePayRoomEntrance);
}
