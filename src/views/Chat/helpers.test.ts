import { MsgSender } from 'common/types';
import { getMessageSender, shouldHaveBall } from './helpers';

describe('Message tests', () => {
    it('should return correct message sender', () => {
        type Msg = {
            ownerId: string;
            msgOwner?: string;
            userId: string;
            want: MsgSender | undefined;
        };
        const msgs: Msg[] = [
            {
                ownerId: 'a',
                msgOwner: 'a',
                userId: 'b',
                want: 'admin',
            },
            {
                ownerId: 'a',
                msgOwner: 'b',
                userId: 'b',
                want: 'self',
            },
            {
                ownerId: 'a',
                msgOwner: undefined,
                userId: 'b',
                want: undefined,
            },
        ];

        msgs.forEach((m) => {
            expect(getMessageSender({ roomOwner: m.ownerId, userId: m.userId, messageOwner: m.msgOwner })).toEqual(m.want);
        });
    });

    it('should return wheter should have ball', () => {
        type SenderT = {
            curr?: MsgSender;
            next?: MsgSender;
            want: boolean;
        };

        const tt: SenderT[] = [
            {
                curr: 'self',
                next: 'self',
                want: false,
            },
            {
                curr: 'self',
                next: 'external',
                want: true,
            },
            {
                curr: 'external',
                next: 'external',
                want: false,
            },
            {
                curr: 'admin',
                next: 'admin',
                want: false,
            },
            {
                curr: undefined,
                next: 'admin',
                want: true,
            },
            {
                curr: 'self',
                next: undefined,
                want: true,
            },
            {
                curr: 'external',
                next: undefined,
                want: true,
            },
        ];

        tt.forEach((t) => {
            expect(shouldHaveBall(t.curr, t.next)).toEqual(t.want);
        });
    });
});
