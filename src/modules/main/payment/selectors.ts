import { CouponStatus, PaymentModuleState, SubscriptionStep } from './types';

export function selectSubscriptionStep(state: PaymentModuleState): SubscriptionStep {
    return state.mainPayment.subscriptionStep;
}

export function selectCouponStatus(state: PaymentModuleState): CouponStatus {
    return state.mainPayment.couponStatus;
}
