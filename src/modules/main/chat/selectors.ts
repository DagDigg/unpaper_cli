import { MainChatModuleState } from './types';

export function hasAccessToRoom(roomId: string) {
    return function (state: MainChatModuleState) {
        return state.mainChat.roomAccess.get(roomId);
    };
}

export function selectChatView(state: MainChatModuleState) {
    return state.mainChat.chatView;
}

export function selectRoomView(state: MainChatModuleState) {
    return state.mainChat.roomView;
}

export function selectCurrentRoom(state: MainChatModuleState) {
    return state.mainChat.currentRoom;
}

export function selectCurrentRoomPrice(state: MainChatModuleState) {
    return state.mainChat.currentRoom?.price ? state.mainChat.currentRoom?.price / 100 : undefined;
}

export function selectModalPayRoomStep(state: MainChatModuleState) {
    return state.mainChat.modalPayRoomStep;
}

export function selectRoomPI(state: MainChatModuleState) {
    return state.mainChat.currentRoomPI;
}
