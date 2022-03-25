export type PaymentModuleState = {
    mainPayment: PaymentState;
};
export type PaymentState = {
    subscriptionStep: SubscriptionStep;
    couponStatus: CouponStatus;
};

export enum SubscriptionStep {
    Idle = 'IDLE',
    Loading = 'LOADING',
}

export enum CouponStatus {
    Idle = 'IDLE',
    Valid = 'VALID',
    Invalid = 'INVALID',
}
