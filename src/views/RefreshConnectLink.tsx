import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as paymentActions from 'modules/payment/actions';
import * as paymentSelectors from 'modules/payment/selectors';
import { RouteComponentProps, useHistory } from 'react-router';

export default function RefresConnectLink(_: RouteComponentProps) {
    const history = useHistory();
    const cus = useSelector(paymentSelectors.selectCustomer);
    const acctLink = useSelector(paymentSelectors.selectConnectAccountLink);

    const dispatch = useDispatch();

    useEffect(() => {
        if (cus && cus.accountId) {
            // Customer has a Stripe Connect account
            dispatch(paymentActions.getConnectAccountLink.request());
        }
    }, [dispatch, cus]);

    useEffect(() => {
        if (acctLink) {
            window.open(acctLink, '_blank');
            history.push('/');
        }
    }, [acctLink, history]);

    return <></>;
}
