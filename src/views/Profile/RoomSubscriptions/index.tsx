import { RouteComponentProps } from 'react-router';
import { RoomSubscription, SubscriptionStatus } from 'api/proto/v1/payment_pb';
import FlexContainer from 'components/FlexContainer';
import Icon from 'components/Icon';
import { IconName } from 'components/Icon/types';
import * as Text from 'components/Text';
import * as paymentActions from 'modules/payment/actions';
import * as paymentSelectors from 'modules/payment/selectors';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row } from '../elements';
import RoomSubscriptionView from '../RoomSubscription';

function statusToStr(s: SubscriptionStatus): string {
    switch (s) {
        case SubscriptionStatus.ACTIVE:
            return 'Active';
        case SubscriptionStatus.CANCELED:
            return 'Canceled';
        case SubscriptionStatus.PAST_DUE:
            return 'Past Due';
        case SubscriptionStatus.TRIALING:
            return 'Trialing';
        default:
            return 'Inactive';
    }
}

export default function RoomSubscriptions(_: RouteComponentProps) {
    const subscriptions = useSelector(paymentSelectors.selectRoomSubscriptions);
    const [subscriptionToEdit, setSubscriptionToEdit] = useState<RoomSubscription.AsObject | null>(null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(paymentActions.getRoomSubscriptions.request());
    }, [dispatch]);

    return subscriptionToEdit ? (
        <RoomSubscriptionView subsc={subscriptionToEdit} statusStr={statusToStr(subscriptionToEdit.status)} />
    ) : (
        <>
            {subscriptions.map((s) => (
                <Row key={s.id} onClick={() => setSubscriptionToEdit(s)}>
                    <FlexContainer flexDirection="column" alignItems="flex-start">
                        <Text.Regular weight="bold">Subscription: {s.id}</Text.Regular>
                        <Text.Small color="mdContrast+1">Status: {statusToStr(s.status)}</Text.Small>
                    </FlexContainer>
                    <Icon name={IconName.ChevronRight} color="mdContrast+1" />
                </Row>
            ))}
        </>
    );
}
