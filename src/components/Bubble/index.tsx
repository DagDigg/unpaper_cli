import { ChatMessage, MessageType } from 'api/proto/v1/chat_pb';
import confetti from 'canvas-confetti';
import { base64ToUint8Arr, createAudio } from 'common/audio';
import { MsgSender } from 'common/types';
import { getMessageMargin } from 'common/uiMessages';
import { AwardId } from 'components/Award/types';
import MessageAudio from 'components/MessageAudio';
import * as Text from 'components/Text';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AnnouncementText, BubbleBall, BubbleWrapper, DonationText, DonationWrapper, StyledAward } from './elements';

function getMessageType(m: ChatMessage.AsObject): MessageType.Enum {
    return m.type;
}

type Props = {
    message: ChatMessage.AsObject;
    sender: MsgSender;
    isLastUserMessage: boolean;
    isFirstUserMessage: boolean;
    shouldAnimate: boolean;
};
const Bubble = (props: Props) => {
    const [loaded, setLoaded] = useState(false);
    const shouldAlignLeft = props.sender === 'admin' || props.sender === 'adminSelf';

    useEffect(() => {
        window.setTimeout(() => setLoaded(true), 0);
        if (loaded) {
            if (props.message.type === MessageType.Enum.DONATION) {
                const nowInSeconds = Math.floor(Date.now() / 1000);
                const createdAt = props.message.createdAt?.seconds ?? 2;
                if (nowInSeconds - createdAt < 2) {
                    confetti({
                        particleCount: 30,
                        angle: 60,
                        spread: 55,
                        origin: { x: 0 },
                    });
                    confetti({
                        particleCount: 30,
                        angle: 120,
                        spread: 55,
                        origin: { x: 1 },
                    });
                }
            }
        }
    }, [loaded, props.message.createdAt, props.message.type]);

    const getMessage = () => {
        switch (getMessageType(props.message)) {
            case MessageType.Enum.TEXT:
                return (
                    <BubbleWrapper
                        shouldAnimate={props.shouldAnimate}
                        margin={getMessageMargin(props.sender!, props.isLastUserMessage)}
                        sender={props.sender ?? 'external'}
                    >
                        {props.isLastUserMessage && <BubbleBall sender={props.sender ?? 'external'} />}
                        <Text.Regular>{props.message.text?.content}</Text.Regular>
                    </BubbleWrapper>
                );

            case MessageType.Enum.AWARD:
                return (
                    <StyledAward
                        latestMessage={props.isLastUserMessage}
                        size={128}
                        id={props.message.award?.awardId as AwardId}
                        onClick={() => {}}
                    />
                );
            case MessageType.Enum.DONATION:
                return (
                    <DonationWrapper>
                        <DonationText>{`${props.message.username} just sent $${
                            props.message.donation?.amount ? props.message.donation?.amount / 100 : 0
                        }`}</DonationText>
                    </DonationWrapper>
                );
            case MessageType.Enum.AUDIO:
            default:
                return (
                    <MessageAudio
                        audio={createAudio(base64ToUint8Arr((props.message.audio?.bytes as string) || ''))}
                        sender={props.sender ?? 'external'}
                        margin={getMessageMargin(props.sender, props.isLastUserMessage)}
                    />
                );
        }
    };

    return (
        <>
            {props.isFirstUserMessage && props.message.type !== MessageType.Enum.AWARD && props.message.type !== MessageType.Enum.DONATION && (
                <>
                    <AnnouncementText
                        mb={6}
                        mr={shouldAlignLeft ? 0 : 12}
                        ml={shouldAlignLeft ? 12 : 0}
                        weight="bold"
                        align={shouldAlignLeft ? 'start' : 'end'}
                    >
                        {props.message.username}
                    </AnnouncementText>
                </>
            )}

            {props.message.type === MessageType.Enum.AWARD && (
                <AnnouncementText mt={24} mb={4} weight="bold" align="center">
                    {props.message.username} just sent an award!
                </AnnouncementText>
            )}
            {getMessage()}
        </>
    );
};

export default React.memo(Bubble);
