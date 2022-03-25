import { MessageType } from 'api/proto/v1/chat_pb';
import { MsgSender } from 'common/types';

type GetMessageSenderParams = {
    userId: string;
    messageOwner?: string;
};
// export function getMessageSender({ roomOwner, userId, messageOwner }: GetMessageSenderParams): MsgSender | undefined {
//     if (messageOwner === roomOwner && messageOwner === userId) {
//         return 'adminSelf';
//     }
//     if (messageOwner === roomOwner) {
//         return 'admin';
//     }
//     if (messageOwner === userId) {
//         return 'self';
//     }
//     if (!!messageOwner) {
//         return 'external';
//     }
//     return undefined;
// }

export function getMessageSender({ userId, messageOwner }: GetMessageSenderParams): MsgSender {
    if (messageOwner === userId) {
        return 'self';
    }

    return 'admin';
}

export function shouldHaveBall(mType?: MessageType.Enum, currMsgSender?: MsgSender, nextMsgSender?: MsgSender) {
    if (mType && [MessageType.Enum.AWARD, MessageType.Enum.DONATION].includes(mType)) {
        return true;
    }

    if (!nextMsgSender || !currMsgSender) {
        return true;
    }
    if (nextMsgSender === currMsgSender) {
        return false;
    }

    return true;
}

export function isLastUserMessage(mType?: MessageType.Enum, currMsgSender?: string, nextMsgSender?: string) {
    if (mType && [MessageType.Enum.AWARD, MessageType.Enum.DONATION].includes(mType)) {
        return true;
    }

    if (!nextMsgSender || !currMsgSender) {
        return true;
    }
    if (nextMsgSender === currMsgSender) {
        return false;
    }

    return true;
}

export function isFirstUserMessage(prevMsgSender?: MsgSender, currMsgSender?: MsgSender) {
    // First chat message
    if (!prevMsgSender) {
        return true;
    }

    if (prevMsgSender !== currMsgSender) {
        return true;
    }

    return false;
}
