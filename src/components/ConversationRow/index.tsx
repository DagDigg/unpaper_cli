import { Conversation } from 'api/proto/v1/chat_pb';
import { FakeAvatar } from 'components/Composer/elements';
import Icon from 'components/Icon';
import { IconName, IconSize } from 'components/Icon/types';
import * as Text from 'components/Text';
import React from 'react';
import { Center, Container, Right, StyledLine, UnreadMessagesCircle } from './elements';

type Props = {
    conversation: Conversation.AsObject;
    onClick: (conversationId: string) => void;
};
export default function ConversationRow(props: Props) {
    const handleClick = () => props.onClick(props.conversation.id);
    const hasUnreadMessages = props.conversation.unreadMessagesCount > 0;
    return (
        <>
            <Container onClick={handleClick}>
                <FakeAvatar size={48} />

                <Center>
                    <Text.Regular weight="semiBold">{props.conversation.lastMessage?.username}</Text.Regular>
                    <Text.Small weight="regular" mt={8}>
                        {props.conversation.lastMessage?.text?.content}
                    </Text.Small>
                </Center>
                <Right>
                    <div style={{ display: 'flex', flex: '1', width: '100%' }}>
                        {hasUnreadMessages && (
                            <UnreadMessagesCircle>
                                <Text.Small weight="semiBold" color="white">
                                    {props.conversation.unreadMessagesCount}
                                </Text.Small>
                            </UnreadMessagesCircle>
                        )}
                        <div style={{ marginLeft: hasUnreadMessages ? 4 : 'auto', marginTop: 2 }}>
                            <Icon name={IconName.ChevronRight} size={IconSize.XS} />
                        </div>
                    </div>

                    <Text.Small>{getReadableDate(props.conversation.lastMessage?.createdAt?.seconds ?? 0)}</Text.Small>
                </Right>
            </Container>
            <StyledLine />
        </>
    );
}

function getReadableDate(seconds: number) {
    const today = new Date();
    const date = new Date(0);
    date.setUTCSeconds(seconds);
    if (isToday(today, date)) {
        return `Today at ${date.getHours()}:${date.getMinutes()}`;
    }

    return `${date.getMonth()}/${date.getDay()} ${date.getHours()}:${date.getMinutes()}`;
}

function isToday(today: Date, date: Date): boolean {
    return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
}
