import { ChatView, MainChatState, ModalPayRoomStep, RoomView } from './types';
import * as actions from './actions';
import * as chatActions from 'modules/chat/actions';
import * as paymentActions from 'modules/payment/actions';
import { ActionType, getType } from 'typesafe-actions';

const initialState: MainChatState = {
    roomAccess: new Map(),
    chatView: ChatView.IDLE,
    roomView: RoomView.LOADING,
    modalPayRoomStep: ModalPayRoomStep.IDLE,
    currentRoom: null,
    currentRoomPI: null,
};

function mainReducer(
    state: MainChatState = initialState,
    action: ActionType<typeof actions> | ActionType<typeof chatActions> | ActionType<typeof paymentActions>,
): MainChatState {
    switch (action.type) {
        case getType(actions.getRoomAccess.success):
            return { ...state, roomAccess: state.roomAccess.set(action.payload.roomId, action.payload.authorization) };
        case getType(actions.setChatView):
            return { ...state, chatView: action.payload };
        case getType(actions.setRoomView):
            return { ...state, roomView: action.payload };
        case getType(actions.getRoomPIStatus.success):
            return { ...state, currentRoomPI: action.payload };

        case getType(actions.setModalPayRoomStep):
            return { ...state, modalPayRoomStep: action.payload };
        default:
            return state;
    }
}

export default mainReducer;
