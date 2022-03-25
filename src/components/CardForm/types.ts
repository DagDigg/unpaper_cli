import { StripeCardElement, StripeElementChangeEvent, StripeError } from '@stripe/stripe-js';

export type CardValues = {
    error: StripeElementChangeEvent['error'] | StripeError;
    cardComplete: boolean;
    processing: boolean;
    firstName: string;
    lastName: string;
    card: StripeCardElement | null;
};
