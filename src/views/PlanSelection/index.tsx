import { RouteComponentProps } from 'react-router';
import { useStripe } from '@stripe/react-stripe-js';
import { Plan } from 'api/proto/v1/payment_pb';
import FlexContainer from 'components/FlexContainer';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as paymentActions from 'modules/payment/actions';
import * as paymentSelectors from 'modules/payment/selectors';

export default function PlanSelection(props: RouteComponentProps) {
    const dispatch = useDispatch();
    const stripe = useStripe();

    const invoicePreviews = useSelector(paymentSelectors.selectInvoicePreviews);

    const updateSubscription = (plan: Plan) => dispatch(paymentActions.updateSubscription.request({ plan, stripe }));
    const previewInvoice = (plan: Plan) => {};

    return (
        <FlexContainer flexDirection="column">
            <p onClick={() => updateSubscription(Plan.UNPAPER_FREE)}>gogocrowd free</p>
            <p onClick={() => updateSubscription(Plan.UNPAPER_PLUS_MONTHLY)}>gogocrowd plus monthly</p>
            <p onClick={() => updateSubscription(Plan.UNPAPER_PLUS_YEARLY)}>gogocrowd plus yearly</p>
            <br />
            <p onClick={() => previewInvoice(Plan.UNPAPER_PLUS_MONTHLY)}>Preview plus monthly</p>
            <h4>plus monthly {invoicePreviews?.[Plan.UNPAPER_PLUS_MONTHLY]?.amountDue}</h4>
            <br />
            <p onClick={() => previewInvoice(Plan.UNPAPER_PLUS_YEARLY)}>Preview plus yearly</p>
            <h4>plus yearly {invoicePreviews?.[Plan.UNPAPER_PLUS_YEARLY]?.amountDue}</h4>
        </FlexContainer>
    );
}
