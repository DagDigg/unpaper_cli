import { useElements, useStripe } from '@stripe/react-stripe-js';
import { Plan } from 'api/proto/v1/payment_pb';
import Button from 'components/Button';
import { CardValues } from 'components/CardForm/types';
import FlexContainer from 'components/FlexContainer';
import Line from 'components/Line';
import Link from 'components/Link';
import * as Text from 'components/Text';
import * as mainPaymentSelectors from 'modules/main/payment/selectors';
import { CouponStatus, SubscriptionStep } from 'modules/main/payment/types';
import * as paymentActions from 'modules/payment/actions';
import * as paymentSelectors from 'modules/payment/selectors';
import React, { useCallback, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useDispatch, useSelector } from 'react-redux';
import ModalCreateCard from 'views/ModalCreateCard';
import CardForm from '../../components/CardForm';
import DiscountSVG from './DiscountSVG';
import {
    ActionBtnContainer,
    BillingCycleBox,
    BillingCycleContainer,
    Container,
    CouponContainer,
    InfoContainer,
    OuterContainer,
    PriceContainer,
} from './elements';
import InlineCard from '../../components/InlineCard';
import FormField from 'components/FormField';
import { RouteComponentProps } from 'react-router';

const initialCardValues: CardValues = {
    error: undefined,
    cardComplete: false,
    processing: false,
    firstName: '',
    lastName: '',
    card: null,
};

export default function Checkout(props: RouteComponentProps) {
    const stripe = useStripe();
    const elements = useElements();
    const [cardValues, setCardValues] = useState<CardValues>(initialCardValues);
    const [selectedPlan, setSelectedPlan] = useState<Plan>(Plan.UNPAPER_PLUS_MONTHLY);
    const [coupon, setCoupon] = useState('');
    const customer = useSelector(paymentSelectors.selectCustomer);
    const invoicePreview = useSelector(paymentSelectors.selectInvoicePreviewByPlan(selectedPlan));
    const couponStatus = useSelector(mainPaymentSelectors.selectCouponStatus);
    const subscriptionStep = useSelector(mainPaymentSelectors.selectSubscriptionStep);
    const hasCardAttached = !!customer?.defaultPaymentMethod?.id;
    const [formErrors, setFormErrors] = useState({ firstName: '', lastName: '' });
    const [showModalCreateCard, setShowModalCreateCard] = useState(false);
    const dispatch = useDispatch();

    const fetchInvoicePreview = useCallback(() => {
        return dispatch(paymentActions.invoicePreview.request({ plan: selectedPlan, coupon: coupon }));
    }, [dispatch, selectedPlan, coupon]);

    useEffect(() => {
        if (!invoicePreview) {
            fetchInvoicePreview();
        }
    }, [selectedPlan, fetchInvoicePreview, invoicePreview]);

    const useCoupon = () => {
        if (couponStatus !== CouponStatus.Valid) {
            dispatch(paymentActions.couponCheck.request(coupon));
            fetchInvoicePreview();
        }
    };

    const validateForm = () => {
        const errFieldRequired = 'This is a required field';
        const ok = [cardValues.firstName, cardValues.lastName].filter((v) => v === '').length === 0;

        setFormErrors({
            firstName: cardValues.firstName ? '' : errFieldRequired,
            lastName: cardValues.lastName ? '' : errFieldRequired,
        });

        return ok;
    };

    const handleSubmit = () => {
        if (hasCardAttached) {
            return dispatch(paymentActions.updateSubscription.request({ plan: selectedPlan, stripe }));
        }

        // User has no card attached, card form has been utilized
        if (!stripe || !elements) {
            return;
        }
        if (cardValues.error) {
            elements.getElement('card')?.focus();
        }
        const ok = validateForm();
        if (!ok) {
            // Invalid form
            return;
        }

        return dispatch(
            paymentActions.subscribeToPlan.request({
                stripe,
                card: elements.getElement('card'),
                plan: selectedPlan,
                firstName: cardValues.firstName,
                lastName: cardValues.lastName,
            }),
        );
    };

    return (
        <OuterContainer>
            <Container>
                {/* Heading */}
                <Text.Small responsive={{ maxWidth: 768, align: 'center' }} mb={-8} color="secondary">
                    14 days free trial
                </Text.Small>
                <Text.Super responsive={{ maxWidth: 768, scale: 'large', align: 'center' }}>GogoCrowd Plus</Text.Super>
                <Text.Small responsive={{ maxWidth: 768, align: 'center' }}>Unlock new features. Unsubscribe whenever you want</Text.Small>

                <InfoContainer>
                    {/* Payment Method */}
                    <Text.Regular weight="extraBold" mt={24} mb={24}>
                        Payment method
                    </Text.Regular>
                    {hasCardAttached ? (
                        <>
                            <ModalCreateCard isOpen={showModalCreateCard} onCancel={() => setShowModalCreateCard(false)} />
                            <InlineCard onChangeCardClick={() => setShowModalCreateCard(true)} />
                        </>
                    ) : (
                        <CardForm
                            cardValues={cardValues}
                            setCardValues={setCardValues}
                            stripe={stripe}
                            elements={elements}
                            formErrors={formErrors}
                        />
                    )}

                    <Line mt={hasCardAttached ? 40 : 16} mb={24} />

                    {/* Billing cycle selector */}
                    <Text.Regular weight="extraBold" mb={16}>
                        Interval
                    </Text.Regular>
                    <BillingCycleContainer>
                        <BillingCycleBox
                            isSelected={selectedPlan === Plan.UNPAPER_PLUS_MONTHLY}
                            onClick={() => setSelectedPlan(Plan.UNPAPER_PLUS_MONTHLY)}
                        >
                            <Text.Regular color="mdContrast+1" weight="bold">
                                Monthly
                            </Text.Regular>
                            <Text.ExtraSmall>You will be charged each month</Text.ExtraSmall>
                        </BillingCycleBox>
                        <BillingCycleBox
                            isSelected={selectedPlan === Plan.UNPAPER_PLUS_YEARLY}
                            onClick={() => setSelectedPlan(Plan.UNPAPER_PLUS_YEARLY)}
                        >
                            <DiscountSVG />
                            <Text.Regular color="mdContrast+1" weight="bold">
                                Yearly
                            </Text.Regular>
                            <Text.ExtraSmall>You will be charged each year</Text.ExtraSmall>
                        </BillingCycleBox>
                    </BillingCycleContainer>

                    {/* Coupon  */}
                    <CouponContainer>
                        <FormField
                            label="Coupon"
                            placeholder="Coupon code"
                            onChange={setCoupon}
                            error={couponStatus === CouponStatus.Invalid ? 'The provided coupon is invalid' : ''}
                            disabled={couponStatus === CouponStatus.Valid}
                        />
                        <Link type="secondary" label="Apply" to="" onClick={useCoupon} />
                    </CouponContainer>

                    {/* Price Table */}
                    <PriceContainer>
                        <FlexContainer alignItems="center" justifyContent="space-between">
                            <Text.Small>Subtotal</Text.Small>
                            <Text.Small>{getFmtAmount(invoicePreview?.subtotal)}</Text.Small>
                        </FlexContainer>
                        <FlexContainer alignItems="center" justifyContent="space-between">
                            <Text.Small>Discount</Text.Small>
                            <Text.Small>{calcDiscount(invoicePreview?.subtotal, invoicePreview?.amountDue)}</Text.Small>
                        </FlexContainer>

                        <FlexContainer alignItems="center" justifyContent="space-between" mt={38}>
                            <Text.RegularBig weight="extraBold">Total</Text.RegularBig>
                            <Text.RegularBig weight="extraBold">{getFmtAmount(invoicePreview?.amountDue)}</Text.RegularBig>
                        </FlexContainer>
                    </PriceContainer>
                </InfoContainer>

                {isMobile && <div style={{ height: 120 }} />}

                <ActionBtnContainer isMobile={isMobile}>
                    <Button
                        size="big"
                        type="secondary"
                        label="Subscribe now"
                        onClick={handleSubmit}
                        disabled={subscriptionStep === SubscriptionStep.Loading}
                    />
                </ActionBtnContainer>
            </Container>
        </OuterContainer>
    );
}

function getFmtAmount(amt?: number) {
    if (!amt) return '-';

    const num = amt / 100;
    return num.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

function calcDiscount(subtotal?: number, amtDue?: number) {
    if (!subtotal || !amtDue) return '-';

    const diff = subtotal - amtDue;
    const num = diff / 100;
    return '-' + num.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}
