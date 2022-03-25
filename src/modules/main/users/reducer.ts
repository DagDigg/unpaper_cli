import { addEntity } from 'common/entities';
import { ActionType, getType } from 'typesafe-actions';
import * as actions from './actions';
import { UsersState } from './types';

const initialState: UsersState = {
    userSuggestions: [],
    extUserInfos: { entities: {} },
};

export default function reducer(state: UsersState = initialState, action: ActionType<typeof actions>): UsersState {
    switch (action.type) {
        case getType(actions.getUserSuggestions.success):
            return { ...state, userSuggestions: action.payload };
        case getType(actions.getExtUserInfo.success):
        case getType(actions.followUser.success):
            return { ...state, extUserInfos: addEntity(state.extUserInfos, action.payload.userInfo!) };
        default:
            return state;
    }
}
