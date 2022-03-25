import { ConversationParticipant } from 'api/proto/v1/chat_pb';
import Icon from 'components/Icon';
import { IconName, IconSize } from 'components/Icon/types';
import * as Text from 'components/Text';
import React from 'react';
import { useHistory } from 'react-router';
import { Circle, GoBackContainer, StickyBar, TitleWrapper } from './elements';

type Props = {
    onShowActiveUsers: () => void;
    participants?: [string, ConversationParticipant.AsObject][];
    currentUserId?: string;
};
export default function RoomHeader(props: Props) {
    const history = useHistory();
    const receiver = props.participants?.find((p) => p[1].userId !== props.currentUserId);
    const receiverUsername = receiver ? receiver[1].username : '';
    return (
        <StickyBar>
            <GoBackContainer onClick={() => history.push('/')}>
                <Icon name={IconName.ChevronLeft} size={IconSize.LG} color="mdContrast+1" />
                <Text.Small>Go back</Text.Small>
            </GoBackContainer>
            <div style={{ width: 400 }} />
            <TitleWrapper onClick={props.onShowActiveUsers}>
                <Text.Regular weight="extraBold" align="center" color="mdContrast">
                    {receiverUsername}
                </Text.Regular>
            </TitleWrapper>
            <Circle>
                <Text.RegularBig weight="bold" color="black">
                    CD
                </Text.RegularBig>
            </Circle>
        </StickyBar>
    );
}
