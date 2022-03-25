import { ChatMessage } from 'api/proto/v1/chat_pb';
import React from 'react';
import { getMessageSender, isFirstUserMessage, isLastUserMessage, shouldHaveBall } from './helpers';
import Bubble from 'components/Bubble';

type Props = {
    messagesList: ChatMessage.AsObject[];
    userId?: string;
    shouldAnimate: boolean;
};

export default function MessagesList(props: Props) {
    return (
        <>
            {props.messagesList.map((m, idx) => (
                <Bubble
                    shouldAnimate={props.shouldAnimate}
                    key={m + String(idx)}
                    message={m}
                    sender={getMessageSender({
                        userId: props.userId ?? '',
                        messageOwner: m.userId,
                    })}
                    isFirstUserMessage={isFirstUserMessage(
                        getMessageSender({
                            userId: props.userId ?? '',
                            messageOwner: props.messagesList[idx - 1]?.userId,
                        }),
                        getMessageSender({ userId: props.userId ?? '', messageOwner: m.userId }),
                    )}
                    isLastUserMessage={isLastUserMessage(props.messagesList[idx + 1]?.type, m.userId, props.messagesList[idx + 1]?.userId)}
                />
            ))}
        </>
    );
}
