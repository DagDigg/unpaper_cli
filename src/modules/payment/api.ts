import {
    AttachPaymentMethodRequest,
    ConfirmRoomSubscriptionRequest,
    CouponCheckRequest,
    CreateSetupIntentRequest,
    Customer,
    CustomerInfoRequest,
    GetDashboardLinkResponse,
    GetRoomSubscriptionByRoomIDRequest,
    GetSubscriptionByIDRequest,
    Invoice,
    InvoicePreviewRequest,
    MakeDonationRequest,
    PaymentMethod,
    PayRoomEntranceRequest,
    RetryInvoiceRequest,
    RetryRoomSubscriptionRequest,
    SubscribeToPlanRequest,
    SubscribeToRoomRequest,
    UpdateSubscriptionRequest,
} from 'api/proto/v1/payment_pb';
import { RPCRequest } from 'common/types';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';

/**
 * Subscribes user to plan
 *
 * @param r RPC Request
 * @returns Customer
 */
export async function subscribeToPlan(r: RPCRequest<SubscribeToPlanRequest.AsObject>): Promise<Customer.AsObject> {
    const req = new SubscribeToPlanRequest();
    req.setPaymentMethodId(r.params.paymentMethodId);
    req.setPlan(r.params.plan);

    const resp = await r.client.subscribeToPlan(req, null);
    return resp.toObject();
}

/**
 * Updates the stripe customer invoice with a new payment method id
 *
 * @param r RPC Request
 * @returns Invoice
 */
export async function retryInvoice(r: RPCRequest<RetryInvoiceRequest.AsObject>): Promise<Invoice.AsObject> {
    const req = new RetryInvoiceRequest();
    req.setCustomerId(r.params.customerId);
    req.setInvoiceId(r.params.invoiceId);
    req.setPaymentMethodId(r.params.paymentMethodId);

    const resp = await r.client.retryInvoice(req, null);
    return resp.toObject();
}

/**
 * Retrieves customer info from database
 *
 * @param r RPC Request
 * @returns Customer
 */
export async function customerInfo(r: RPCRequest<CustomerInfoRequest.AsObject>) {
    const req = new CustomerInfoRequest();
    req.setApi(r.params.api);

    const resp = await r.client.customerInfo(req, null);
    return resp.toObject();
}

/**
 * Retrieves a platform subscription by id
 *
 * @param r RPC Request
 * @returns Subscription
 */
export async function getSubscriptionById(r: RPCRequest<GetSubscriptionByIDRequest.AsObject>) {
    const req = new GetSubscriptionByIDRequest();
    req.setApi(r.params.api);
    req.setSubscriptionId(r.params.subscriptionId);

    const resp = await r.client.getSubscriptionByID(req, null);
    return resp.toObject();
}

/**
 * Creates a setup intent
 *
 * @param r RPC Request
 * @returns Setup Intent
 */
export async function createSetupIntent(r: RPCRequest<CreateSetupIntentRequest.AsObject>) {
    const req = new CreateSetupIntentRequest();
    req.setApi(r.params.api);

    const resp = await r.client.createSetupIntent(req, null);
    return resp.toObject();
}

/**
 * Attaches the payment method to the customer, removing
 * any other payment method and sets it as the default one
 *
 * @param r RPC Request
 * @returns Payment Method
 */
export async function attachPaymentMethod(r: RPCRequest<AttachPaymentMethodRequest.AsObject>): Promise<PaymentMethod.AsObject> {
    const req = new AttachPaymentMethodRequest();
    req.setApi(r.params.api);
    req.setPaymentMethodId(r.params.paymentMethodId);
    req.setCustomerId(r.params.customerId);

    const resp = await r.client.attachPaymentMethod(req, null);
    return resp.toObject();
}

/**
 * Updates a customer subscription
 *
 * @param r RPC Request
 * @returns Customer
 */
export async function updateSubscription(r: RPCRequest<UpdateSubscriptionRequest.AsObject>): Promise<Customer.AsObject> {
    const req = new UpdateSubscriptionRequest();
    req.setApi(r.params.api);
    req.setCustomerId(r.params.customerId);
    req.setPlan(r.params.plan);

    const resp = await r.client.updateSubscription(req, null);
    return resp.toObject();
}

/**
 * Calculates a preview for an invoice
 *
 * @param r RPC Request
 * @returns Invoice preview
 */
export async function invoicePreview(r: RPCRequest<InvoicePreviewRequest.AsObject>) {
    const req = new InvoicePreviewRequest();
    req.setApi('v1');
    req.setPlan(r.params.plan);
    req.setCustomerId(r.params.customerId);
    req.setSubscriptionId(r.params.subscriptionId);
    req.setSubscriptionItemId(r.params.subscriptionItemId);
    req.setCoupon(r.params.coupon);

    const resp = await r.client.invoicePreview(req, null);
    return resp.toObject();
}

/**
 * Checks if the coupon is valid
 *
 * @param r RPC Request
 * @returns Coupon validity
 */
export async function couponCheck(r: RPCRequest<CouponCheckRequest.AsObject>) {
    const req = new CouponCheckRequest();
    req.setApi(r.params.api);
    req.setId(r.params.id);

    const res = await r.client.couponCheck(req, null);
    return res.toObject();
}

/**
 * Generates a link for connecting a Stripe account
 *
 * @param r Empty
 * @returns Link for connecting a Stripe account
 */
export async function getConnectAccountLink(r: RPCRequest<null>) {
    const res = await r.client.getConnectAccountLink(new Empty(), null);
    return res.toObject();
}

/**
 * Creates a donation payment intent, then attempts
 * to pay it using the customer default payment method
 *
 * @param r RPC Request
 * @returns Client secret
 */
export async function makeDonation(r: RPCRequest<MakeDonationRequest.AsObject>) {
    const req = new MakeDonationRequest();
    req.setAmount(r.params.amount);
    req.setReceiverUserId(r.params.receiverUserId);

    const res = await r.client.makeDonation(req, null);
    return res.toObject();
}

/**
 * Creates a payment intent for paying to join a room,
 * and attempts to pay it using the connected customer default pm
 *
 * @param r RPC Request
 * @returns Client secret
 */
export async function payRoomEntrance(r: RPCRequest<PayRoomEntranceRequest.AsObject>) {
    const req = new PayRoomEntranceRequest();
    req.setRoomId(r.params.roomId);

    const res = await r.client.payRoomEntrance(req, null);
    return res.toObject();
}

/**
 * Creates a Stripe Express account linked to the userID
 *
 * @param r RPC Request
 * @returns Customer
 */
export async function createStripeAccount(r: RPCRequest<null>): Promise<Customer.AsObject> {
    const res = await r.client.createStripeAccount(new Empty(), null);
    return res.toObject();
}

/**
 * Generates a link for connected accounts that
 * enables them to access the Stripe Dashboard
 *
 * @param r RPC Request
 * @returns Newly generated link for accessing the dashboard
 */
export async function getDashboardLink(r: RPCRequest<null>): Promise<GetDashboardLinkResponse.AsObject> {
    const res = await r.client.getDashboardLink(new Empty(), null);
    return res.toObject();
}

/**
 * Subscribe the user to the room
 *
 * @param r RPC Request
 * @returns Subscription
 */
export async function subscribeToRoom(r: RPCRequest<SubscribeToRoomRequest.AsObject>) {
    const req = new SubscribeToRoomRequest();
    req.setRoomId(r.params.roomId);

    const res = await r.client.subscribeToRoom(req, null);
    return res.toObject();
}

/**
 * Get a list of room subscriptions attached to the user
 *
 * @param r RPC Request
 * @returns Room subscription list
 */
export async function getRoomSubscriptions(r: RPCRequest<null>) {
    const res = await r.client.getRoomSubscriptions(new Empty(), null);
    return res.toObject();
}

/**
 * Confirms the most recent room subscription payment intent
 *
 * @param r RPC Request
 * @returns Empty
 */
export async function confirmRoomSubscription(r: RPCRequest<ConfirmRoomSubscriptionRequest.AsObject>) {
    const req = new ConfirmRoomSubscriptionRequest();
    req.setRoomId(r.params.roomId);

    const res = await r.client.confirmRoomSubscription(req, null);
    return res.toObject();
}

/**
 * Retrieves the most up-to-date subscription, and attempts
 * to pay its latest invoice with the connected customer default payment method
 *
 * @param r RPC Request
 * @returns Client secret for payment intent
 */
export async function retryRoomSubscription(r: RPCRequest<RetryRoomSubscriptionRequest.AsObject>) {
    const req = new RetryRoomSubscriptionRequest();
    req.setRoomId(r.params.roomId);

    const res = await r.client.retryRoomSubscription(req, null);
    return res.toObject();
}

/**
 * Retrieves a room subscription by room id for the requesting user
 *
 * @param r RPC Request
 * @returns Room Subscription
 */
export async function getRoomSubscriptionByRoomId(r: RPCRequest<GetRoomSubscriptionByRoomIDRequest.AsObject>) {
    const req = new GetRoomSubscriptionByRoomIDRequest();
    req.setRoomId(r.params.roomId);

    const res = await r.client.getRoomSubscriptionByRoomID(req, null);
    return res.toObject();
}

/**
 * Retrieves a connected account by its user_id on the platform
 *
 * @param r RPC Request
 * @returns Connected account
 */
export async function getOwnConnectedAccount(r: RPCRequest<null>) {
    const req = new Empty();

    const res = await r.client.getOwnConnectedAccount(req, null);
    return res.toObject();
}
