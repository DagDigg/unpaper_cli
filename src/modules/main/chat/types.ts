import { ChatUser, Room, RoomAuthorization } from 'api/proto/v1/chat_pb';
import { CheckRoomEntrancePIResponse } from 'api/proto/v1/payment_pb';

export type MainChatState = {
    roomAccess: RoomAccessMap;
    chatView: ChatView;
    roomView: RoomView;
    currentRoom: Room.AsObject | null;
    modalPayRoomStep: ModalPayRoomStep;
    currentRoomPI: CheckRoomEntrancePIResponse.AsObject | null;
};

export type MainChatModuleState = {
    mainChat: MainChatState;
};

export type RoomAccessMap = Map<string, RoomAuthorization.Enum>;

export enum ChatView {
    IDLE = 'IDLE',
    SHOW_ACTIONS = 'SHOW_ACTIONS',
    SHOW_AWARDS_MODAL = 'SHOW_AWARDS_MODAL',
    SHOW_DONATION_MODAL = 'SHOW_DONATION_MODAL',
    SHOW_CHANGE_CARD_MODAL = 'SHOW_CHANGE_CARD_MODAL',
    SHOW_ACTIVE_USERS = 'SHOW_ACTIVE_USERS',
}

export enum RoomView {
    LOADING = 'LOADING',
    SHOW_CHAT = 'SHOW_CHAT',
    SHOW_UNJOINABLE_ROOM_MODAL = 'SHOW_UNJOINABLE_ROOM_MODAL',
    SHOW_PAYMENT_MODAL = 'SHOW_PAYMENT_MODAL',
    SHOW_SUBSCRIPTION_MODAL = 'SHOW_SUBSCRIPTION_MODAL',
}

export enum ModalPayRoomStep {
    IDLE = 'IDLE',

    PAYMENT_LOADING = 'PAYMENT_LOADING',
    PAYMENT_POLLING = 'PAYMENT_POLLING',

    SUBSCRIPTION_LOADING = 'SUBSCRIPTION_LOADING',
    SUBSCRIPTION_POLLING = 'SUBSCRIPTION_POLLING',
}
