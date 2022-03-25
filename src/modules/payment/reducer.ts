import { Customer, Invoice, PaymentMethod, RoomSubscription } from 'api/proto/v1/payment_pb';
import { ActionType, getType } from 'typesafe-actions';
import * as actions from './actions';
import { InvoicePreviews, PaymentState } from './types';

const initialState: PaymentState = {
    status: 'READY',
    customer: null,
    invoicePreviews: null,
    connectAccountLink: null,
    connectedAccount: null,
    roomSubscriptions: [],
};

export default function reducer(state: PaymentState = initialState, action: ActionType<typeof actions>): PaymentState {
    switch (action.type) {
        case getType(actions.fetchCustomer.request):
            return { ...state, status: 'LOADING' };
        case getType(actions.subscribeToPlan.success):
        case getType(actions.fetchCustomer.success):
        case getType(actions.connectStripeAccount.success):
            return { ...state, customer: action.payload, status: 'READY' };
        case getType(actions.replaceCard.success):
            return { ...state, customer: addPMToCustomer(state.customer, action.payload), status: 'READY' };
        case getType(actions.invoicePreview.success):
            return { ...state, invoicePreviews: addInvoicePreview(state.invoicePreviews, action.payload) };
        case getType(actions.getConnectAccountLink.success):
            return { ...state, connectAccountLink: action.payload.link };
        case getType(actions.getRoomSubscription.success):
            return { ...state, roomSubscriptions: replaceRoomSubscription(state.roomSubscriptions, action.payload) };
        case getType(actions.getRoomSubscriptions.success):
            return { ...state, roomSubscriptions: action.payload.roomSubscriptionsList };
        case getType(actions.confirmRoomPaymentIntent.success):
            return { ...state, roomSubscriptions: replaceRoomSubscription(state.roomSubscriptions, action.payload) };
        case getType(actions.getOwnConnectedAccount.success):
            return { ...state, connectedAccount: action.payload };
        case getType(actions.getOwnConnectedAccount.failure):
            return { ...state, connectedAccount: null };
        default:
            return state;
    }
}

function addPMToCustomer(customer: Customer.AsObject | null, pm: PaymentMethod.AsObject): Customer.AsObject | null {
    if (!customer) return null;

    return { ...customer, defaultPaymentMethod: pm };
}

function addInvoicePreview(invoicePreviews: InvoicePreviews | null, invoice: Invoice.AsObject): InvoicePreviews {
    if (!invoicePreviews) {
        return { [invoice.plan]: invoice } as InvoicePreviews;
    }
    return { ...invoicePreviews, [invoice.plan]: invoice };
}

function replaceRoomSubscription(roomSubscriptions: RoomSubscription.AsObject[], subsc: RoomSubscription.AsObject) {
    return [...roomSubscriptions.filter((s) => s.id !== subsc.id), subsc];
}
