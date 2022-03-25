import { Stripe, StripeCardElement } from '@stripe/stripe-js';
import { Customer, GetOwnConnectedAccountResponse, Invoice, Plan, RoomSubscription } from 'api/proto/v1/payment_pb';
import { TernaryStatus } from 'common/types';

export type PaymentModuleState = {
    payment: PaymentState;
};

export type PaymentState = {
    status: TernaryStatus;
    customer: Customer.AsObject | null;
    invoicePreviews: InvoicePreviews | null;
    connectAccountLink: string | null;
    roomSubscriptions: RoomSubscription.AsObject[];
    connectedAccount: GetOwnConnectedAccountResponse.AsObject | null;
};

export type StripeCardDetails = {
    firstName: string;
    lastName: string;
    stripe: Stripe;
    card: StripeCardElement | null;
};

export type InvoicePreviews = Record<Plan, Invoice.AsObject>;
