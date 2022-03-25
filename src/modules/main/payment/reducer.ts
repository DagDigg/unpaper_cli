import * as paymentActions from 'modules/payment/actions';
import { getType } from 'typesafe-actions';
import { CouponStatus, PaymentState, SubscriptionStep } from './types';

const initialState: PaymentState = {
    subscriptionStep: SubscriptionStep.Idle,
    couponStatus: CouponStatus.Idle,
};

export default function reducer(state: PaymentState = initialState, action: any) {
    switch (action.type) {
        case getType(paymentActions.subscribeToPlan.request):
        case getType(paymentActions.updateSubscription.request):
            return { ...state, subscriptionStep: SubscriptionStep.Loading };
        case getType(paymentActions.subscribeToPlan.success):
        case getType(paymentActions.subscribeToPlan.failure):
        case getType(paymentActions.updateSubscription.success):
        case getType(paymentActions.updateSubscription.failure):
            return { ...state, subscriptionStep: SubscriptionStep.Idle };
        case getType(paymentActions.couponCheck.success):
            return { ...state, couponStatus: CouponStatus.Valid };
        case getType(paymentActions.couponCheck.failure):
            return { ...state, couponStatus: CouponStatus.Invalid };
        default:
            return state;
    }
}
