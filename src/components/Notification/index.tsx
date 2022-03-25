import * as pb from 'api/proto/v1/notifications_pb';
import FlexContainer from 'components/FlexContainer';
import * as Text from 'components/Text';
import React from 'react';
import Icon from './Icon';

type NotificationProps = {
    notification: pb.Notification.AsObject;
};
export default function Notification(props: NotificationProps) {
    return (
        <FlexContainer justifyContent="flex-start">
            <Icon eventId={props.notification.event?.id ?? pb.EventID.Enum.LIKE_POST} />
            <FlexContainer flexDirection="column" alignItems="flex-start" ml={12}>
                <Text.Small weight="bold">
                    @{props.notification.userWhoFiredEvent?.username} {props.notification.event?.text}
                </Text.Small>
                {props.notification.content.length > 0 && <Text.Small mt={8}>"{props.notification.content}"</Text.Small>}
            </FlexContainer>
        </FlexContainer>
    );
}
