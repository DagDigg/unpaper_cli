import { MsgSender } from './types';

export function getMessageMargin(sender: MsgSender, isLastUserMessage: boolean) {
    if (sender === 'admin' || sender === 'adminSelf') {
        return !isLastUserMessage ? '0 auto 2px 16px' : '0 auto 24px 16px';
    }

    return !isLastUserMessage ? '0px 16px 2px auto' : '0 16px 24px auto';
}
