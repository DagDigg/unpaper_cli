import { EventID, Notification } from 'api/proto/v1/notifications_pb';
import { navigateToNotification } from 'common/notifications';
import { FakeAvatar } from 'components/Composer/elements';
import FlexContainer from 'components/FlexContainer';
import * as Text from 'components/Text';
import TopTitle from 'components/TopTitle';
import * as notificationsActions from 'modules/notifications/actions';
import * as notificationsSelectors from 'modules/notifications/selectors';
import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, useHistory } from 'react-router';
import { CardsContainer, Container, RightButton, Selection, SelectionsContainer, StyledBaseCard, StyledNotificationDot } from './elements';

export default function Activity(_: RouteComponentProps) {
    const [selection, setSelection] = useState<'all' | 'unread'>('all');
    const allNotifications = useSelector(notificationsSelectors.selectAllNotifications);
    const unreadNotifications = useSelector(notificationsSelectors.selectUnreadNotifications);
    const history = useHistory();
    const dispatch = useDispatch();

    const readNotification = (n: Notification.AsObject) => {
        if (!n.read) dispatch(notificationsActions.readNotification.request({ notificationId: n.id }));
        navigateToNotification(n, history);
    };

    return (
        <Container>
            <TopTitle scrollEnabled goBackEnabled={isMobile} label="Activity" />
            <SelectionsContainer>
                <Selection selected={selection === 'all'} onClick={() => setSelection('all')}>
                    <Text.Regular weight="bold">All</Text.Regular>
                </Selection>
                <Selection selected={selection === 'unread'} onClick={() => setSelection('unread')}>
                    <Text.Regular weight="bold">Unread</Text.Regular>
                </Selection>
            </SelectionsContainer>
            <CardsContainer>
                {Object.values(selection === 'all' ? allNotifications : unreadNotifications)
                    .filter((n) => (selection === 'unread' ? n.read === false : true))
                    .map((n: Notification.AsObject) => (
                        <StyledBaseCard key={n.id} onClick={() => readNotification(n)}>
                            {!n.read && <StyledNotificationDot />}
                            <FakeAvatar mr={8} />
                            <FlexContainer flexDirection="column" alignItems="flex-start">
                                <Text.Small color="mdContrast" weight="bold">
                                    John Doe
                                </Text.Small>
                                <Text.Small mt={6} color="mdContrast+1">
                                    @{n.userWhoFiredEvent?.username}
                                </Text.Small>
                                <Text.Small mt={12} weight="medium" color="mdContrast">
                                    {capitalizeFirstLetter(n.event?.text)}
                                </Text.Small>
                                {n.content !== '' && (
                                    <Text.Small mt={6} weight="medium" color="mdContrast+1">
                                        "{n.content}"
                                    </Text.Small>
                                )}
                            </FlexContainer>
                            {n.event?.id === EventID.Enum.FOLLOW && <RightButton size="small" label="Follow" onClick={() => {}} />}
                        </StyledBaseCard>
                    ))}
            </CardsContainer>
        </Container>
    );
}

function capitalizeFirstLetter(string?: string) {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
}
