import { RouteComponentProps } from 'react-router';
import Chip from 'components/Chip';
import FlexContainer from 'components/FlexContainer';
import Icon from 'components/Icon';
import { IconName } from 'components/Icon/types';
import Link from 'components/Link';
import StripeConnectButton from 'components/StripeConnectButton';
import * as Text from 'components/Text';
import * as paymentActions from 'modules/payment/actions';
import * as paymentSelectors from 'modules/payment/selectors';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalCreateCard from '../../ModalCreateCard';
import { IconWrapper, ProfileContent, Row, RowSeparator } from '../elements';

export default function Billing(props: RouteComponentProps) {
    const [modalOpen, setModalOpen] = useState(false);
    const customer = useSelector(paymentSelectors.selectCustomer);
    const connectedAccount = useSelector(paymentSelectors.selectOwnConnectedAccount);

    const dispatch = useDispatch();

    const setupStripeConnect = () => {
        dispatch(paymentActions.connectStripeAccount.request());
    };

    const goToDashboard = () => {
        dispatch(paymentActions.goToDashboard.request());
    };

    const getNextRenewal = (secs?: number) => {
        if (!secs) {
            return '';
        }
        const date = new Date(secs * 1000);
        const dd = date.getDate();
        const mm = date.getMonth() + 1;
        const yyyy = date.getFullYear();
        return `Your next renewal: ${mm}/${dd}/${yyyy}`;
    };

    return (
        <ProfileContent>
            {/* Change card */}
            <Row>
                <FlexContainer alignItems="center">
                    <IconWrapper>
                        <Icon name={IconName.Card} />
                    </IconWrapper>
                    <FlexContainer flexDirection="column" alignItems="flex-start" ml={24}>
                        <Text.Regular weight="bold">Card</Text.Regular>
                        <Text.Small color="mdContrast+1">Ends with ****-{customer?.defaultPaymentMethod?.lastFour}</Text.Small>
                    </FlexContainer>
                </FlexContainer>
                <Link to="" label="Change" onClick={() => setModalOpen(true)} />

                <ModalCreateCard isOpen={modalOpen} onCancel={() => setModalOpen(false)} />
            </Row>
            <RowSeparator />

            {/* Stripe connect */}
            <Row>
                <FlexContainer alignItems="center">
                    <IconWrapper color="#6B71E3">
                        <Icon name={IconName.Stripe} color="white" size={22} />
                    </IconWrapper>
                    <FlexContainer flexDirection="column" alignItems="flex-start" ml={24}>
                        <Text.Regular weight="bold">Stripe Connect</Text.Regular>
                        {connectedAccount?.canReceivePayments ? (
                            <Text.Small color="mdContrast+1">You're ready to receive tips!</Text.Small>
                        ) : (
                            <Text.Small color="mdContrast+1">You haven't setup Stripe Connect yet</Text.Small>
                        )}
                    </FlexContainer>
                </FlexContainer>
                {!connectedAccount?.canReceivePayments && <StripeConnectButton onClick={setupStripeConnect} />}
            </Row>
            <RowSeparator />

            {/* Stripe dashboard */}
            {connectedAccount && (
                <>
                    <Row>
                        <FlexContainer alignItems="center">
                            <IconWrapper color="#42ce65">
                                <Icon name={IconName.Dashboard} />
                            </IconWrapper>
                            <FlexContainer flexDirection="column" alignItems="flex-start" ml={24}>
                                <Text.Regular weight="bold">Dashboard</Text.Regular>
                                <Text.Small color="mdContrast+1">View Stripe dashboard</Text.Small>
                            </FlexContainer>
                        </FlexContainer>
                        <Link to="" label="Go to Dashboard" onClick={goToDashboard} />
                    </Row>
                    <RowSeparator />
                </>
            )}

            {/* Change plan */}
            <Row>
                <FlexContainer alignItems="center">
                    <IconWrapper color="#6a6fff">
                        <Icon name={IconName.Layers} />
                    </IconWrapper>
                    <FlexContainer flexDirection="column" alignItems="flex-start" ml={24}>
                        <Text.Regular weight="bold">Plan</Text.Regular>
                        <Chip mt={4} label="Gogocrowd Free" />
                    </FlexContainer>
                </FlexContainer>
                <Link to="/upgrade" label="Change" />
            </Row>
            <RowSeparator />

            {/* Next renewal */}
            <Row>
                <FlexContainer alignItems="center">
                    <IconWrapper color="#f9a528">
                        <Icon name={IconName.Alarm} />
                    </IconWrapper>
                    <FlexContainer flexDirection="column" alignItems="flex-start" ml={24}>
                        <Text.Regular weight="bold">Next renewal</Text.Regular>
                        <Text.Small color="mdContrast+1">{getNextRenewal(customer?.subscriptionsList[0]?.currentPeriodEnd)}</Text.Small>
                    </FlexContainer>
                </FlexContainer>
                <Link to="" label="Change" />
            </Row>
            <RowSeparator />
        </ProfileContent>
    );
}
