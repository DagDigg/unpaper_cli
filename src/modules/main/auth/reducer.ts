import { ActionType, getType } from 'typesafe-actions';
import * as actions from './actions';
import { MainAuthState } from './types';

export default function reducer(state: MainAuthState = { emailVerifyStatus: 'IDLE' }, action: ActionType<typeof actions>): MainAuthState {
    switch (action.type) {
        // Email verify
        case getType(actions.emailVerify.request):
            return { ...state, emailVerifyStatus: 'IDLE' };
        case getType(actions.emailVerify.success):
            return { ...state, emailVerifyStatus: 'SUCCESS' };
        case getType(actions.emailVerify.failure):
            return { ...state, emailVerifyStatus: 'FAILURE' };

        default:
            return state;
    }
}
