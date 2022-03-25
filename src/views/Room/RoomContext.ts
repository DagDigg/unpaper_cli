import { ExtUserInfo } from 'api/proto/v1/auth_pb';
import { Room } from 'api/proto/v1/chat_pb';
import { Customer, RoomSubscription } from 'api/proto/v1/payment_pb';
import { RoomView } from 'modules/main/chat/types';
import { createContext, useContext } from 'react';

type RoomContextType = {
    room?: Room.AsObject;
    roomOwnerInfo?: ExtUserInfo.AsObject;
    customer: Customer.AsObject | null;
    roomSubscription: RoomSubscription.AsObject | undefined;
    roomView: RoomView;
};

export const RoomContext = createContext<RoomContextType>({
    room: undefined,
    roomSubscription: undefined,
    roomOwnerInfo: undefined,
    customer: null,
    roomView: RoomView.LOADING,
});

export function useRoomContext() {
    return useContext(RoomContext);
}
