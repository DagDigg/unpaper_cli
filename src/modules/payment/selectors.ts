import { Customer, GetOwnConnectedAccountResponse, Invoice, Plan, Subscription } from 'api/proto/v1/payment_pb';
import { InvoicePreviews, PaymentModuleState } from './types';

export function selectSubscription(state: PaymentModuleState): Subscription.AsObject | null {
    return state.payment.customer?.subscriptionsList[0] ?? null;
}

export function selectCustomer(state: PaymentModuleState): Customer.AsObject | null {
    return state.payment.customer ?? null;
}

export function selectInvoicePreviews(state: PaymentModuleState): InvoicePreviews | null {
    return state.payment.invoicePreviews;
}

export function selectInvoicePreviewByPlan(plan: Plan): (s: PaymentModuleState) => Invoice.AsObject | null {
    return function (state: PaymentModuleState) {
        return state.payment.invoicePreviews?.[plan] || null;
    };
}

export function selectConnectAccountLink(state: PaymentModuleState) {
    return state.payment.connectAccountLink;
}

export function selectOwnConnectedAccount(state: PaymentModuleState): GetOwnConnectedAccountResponse.AsObject | null {
    return state.payment.connectedAccount;
}

export function selectRoomSubscriptions(state: PaymentModuleState) {
    return state.payment.roomSubscriptions;
}

export function selectRoomSubscriptionByRoomId(id: string) {
    return function (state: PaymentModuleState) {
        const res = state.payment.roomSubscriptions.filter((s) => s.roomId === id);
        if (res.length > 0) {
            return res[0];
        }
        return undefined;
    };
}
