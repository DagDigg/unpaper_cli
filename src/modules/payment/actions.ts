import { Stripe } from '@stripe/stripe-js';
import {
    ConfirmRoomSubscriptionRequest,
    PayRoomEntranceRequest,
    Customer,
    GetConnectAccountLinkResponse,
    GetOwnConnectedAccountResponse,
    GetRoomSubscriptionByRoomIDRequest,
    GetRoomSubscriptionsResponse,
    Invoice,
    MakeDonationRequest,
    PaymentMethod,
    Plan,
    RoomSubscription,
} from 'api/proto/v1/payment_pb';
import { grpc } from 'grpc-web-client';
import { createAsyncAction, PayloadAction } from 'typesafe-actions';
import { StripeCardDetails } from './types';

export const updateSubscription = createAsyncAction(
    '@payment/UPDATE_SUBSCRIPTION_REQUEST',
    '@payment/UPDATE_SUBSCRIPTION_SUCCESS',
    '@payment/UPDATE_SUBSCRIPTION_FAILURE',
)<{ plan: Plan; stripe: Stripe | null }, Customer.AsObject, undefined>();

export const subscribeToPlan = createAsyncAction(
    '@payment/SUBSCRIBE_TO_PLAN_REQUEST',
    '@payment/SUBSCRIBE_TO_PLAN_SUCCESS',
    '@payment/SUBSCRIBE_TO_PLAN_FAILURE',
)<StripeCardDetails & { plan: Plan }, Customer.AsObject, undefined>();

export const fetchCustomer = createAsyncAction(
    '@payment/FETCH_CUSTOMER_REQUEST',
    '@payment/FETCH_CUSTOMER_SUCCESS',
    '@payment/FETCH_CUSTOMER_FAILURE',
)<undefined, Customer.AsObject, undefined>();

export const replaceCard = createAsyncAction(
    '@payment/REPLACE_CARD_REQUEST',
    '@payment/REPLACE_CARD_SUCCESS',
    '@payment/REPLACE_CARD_FAILURE',
)<
    { cardDetails: StripeCardDetails } & { onSuccess?: () => PayloadAction<any, any> | Generator<any, any> },
    PaymentMethod.AsObject,
    undefined
>();

export const invoicePreview = createAsyncAction(
    '@payment/INVOICE_PREVIEW_REQUEST',
    '@payment/INVOICE_PREVIEW_SUCCESS',
    '@payment/INVOICE_PREVIEW_FAILURE',
)<{ plan: Plan; coupon: string }, Invoice.AsObject, undefined>();

export const couponCheck = createAsyncAction(
    '@payment/COUPON_CHECK_REQUEST',
    '@payment/COUPON_CHECK_SUCCESS',
    '@payment/COUPON_CHECK_FAILURE',
)<string, undefined, undefined>();

export const connectStripeAccount = createAsyncAction(
    '@payment/CONNECT_STRIPE_ACCOUNT_REQUEST',
    '@payment/CONNECT_STRIPE_ACCOUNT_SUCCESS',
    '@payment/CONNECT_STRIPE_ACCOUNT_FAILURE',
)<undefined, Customer.AsObject, undefined>();

export const getConnectAccountLink = createAsyncAction(
    '@payment/GET_CONNECT_ACCOUNT_LINK_REQUEST',
    '@payment/GET_CONNECT_ACCOUNT_LINK_SUCCESS',
    '@payment/GET_CONNECT_ACCOUNT_LINK_FAILURE',
)<undefined, GetConnectAccountLinkResponse.AsObject, undefined>();

export const makeDonation = createAsyncAction(
    '@payment/MAKE_DONATION_REQUEST',
    '@payment/MAKE_DONATION_SUCCESS',
    '@payment/MAKE_DONATION_FAILURE',
)<
    {
        stripe: Stripe;
        cardDetails?: StripeCardDetails;
        pmId?: string;
        onSuccess: (amt: number) => void;
    } & MakeDonationRequest.AsObject,
    undefined,
    undefined
>();

export const goToDashboard = createAsyncAction(
    '@payment/GO_TO_DASHBOARD_REQUEST',
    '@payment/GO_TO_DASHBOARD_SUCCESS',
    '@payment/GO_TO_DASHBOARD_FAILURE',
)<undefined, undefined, undefined>();

export const payRoomEntrance = createAsyncAction(
    '@payment/PAY_ROOM_ENTRANCE_REQUEST',
    '@payment/PAY_ROOM_ENTRANCE_SUCCESS',
    '@payment/PAY_ROOM_ENTRANCE_FAILURE',
)<{ cardValues: StripeCardDetails } & PayRoomEntranceRequest.AsObject, undefined, undefined>();

export const subscribeToRoom = createAsyncAction(
    '@payment/SUBSCRIBE_TO_ROOM_REQUEST',
    '@payment/SUBSCRIBE_TO_ROOM_SUCCESS',
    '@payment/SUBSCRIBE_TO_ROOM_FAILURE',
)<{ cardValues: StripeCardDetails; roomId: string }, undefined, undefined>();

export const getRoomSubscriptions = createAsyncAction(
    '@payment/GET_ROOM_SUBSCRIPTIONS_REQUEST',
    '@payment/GET_ROOM_SUBSCRIPTIONS_SUCCESS',
    '@payment/GET_ROOM_SUBSCRIPTIONS_FAILURE',
)<undefined, GetRoomSubscriptionsResponse.AsObject, undefined>();

export const getRoomSubscription = createAsyncAction(
    '@payment/GET_ROOM_SUBSCRIPTION_REQUEST',
    '@payment/GET_ROOM_SUBSCRIPTION_SUCCESS',
    '@payment/GET_ROOM_SUBSCRIPTION_FAILURE',
)<GetRoomSubscriptionByRoomIDRequest.AsObject, RoomSubscription.AsObject, { code: grpc.Code }>();

export const confirmRoomSubscription = createAsyncAction(
    '@payment/CONFIRM_ROOM_SUBSCRIPTION_REQUEST',
    '@payment/CONFIRM_ROOM_SUBSCRIPTION_SUCCESS',
    '@payment/CONFIRM_ROOM_SUBSCRIPTION_FAILURE',
)<ConfirmRoomSubscriptionRequest.AsObject, undefined, undefined>();

export const confirmRoomPaymentIntent = createAsyncAction(
    '@payment/CONFIRM_PAYMENT_INTENT_REQUEST',
    '@payment/CONFIRM_PAYMENT_INTENT_SUCCESS',
    '@payment/CONFIRM_PAYMENT_INTENT_FAILURE',
)<{ roomId: string }, RoomSubscription.AsObject, undefined>();

export const getOwnConnectedAccount = createAsyncAction(
    '@payment/GET_OWN_CONNECTED_ACCOUNT_REQUEST',
    '@payment/GET_OWN_CONNECTED_ACCOUNT_SUCCESS',
    '@payment/GET_OWN_CONNECTED_ACCOUNT_FAILURE',
)<undefined, GetOwnConnectedAccountResponse.AsObject, undefined>();
