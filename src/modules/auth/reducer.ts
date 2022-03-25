import { User } from 'api/proto/v1/auth_pb';
import { TernaryStatus } from 'common/types';
import { ActionType, getType } from 'typesafe-actions';
import * as actions from './actions';

export type State = { status: TernaryStatus; user: User.AsObject | null };

const initialState: State = { status: 'LOADING', user: null };

export default function reducer(state: State = initialState, action: ActionType<typeof actions>): State {
    switch (action.type) {
        case getType(actions.userInfo.success):
        case getType(actions.emailSignup.success):
        case getType(actions.emailSignin.success):
        case getType(actions.updateUsername.success):
        case getType(actions.googleCallback.success):
        case getType(actions.googleOneTap.success):
            return { ...state, user: action.payload, status: 'READY' };
        case getType(actions.emailVerify.success):
            return { ...state, user: state.user ? { ...state.user, emailVerified: true } : null };
        case getType(actions.userInfo.failure):
            return { ...state, status: 'ERROR' };
        case getType(actions.signOut.success):
            return { ...state, user: null, status: 'ERROR' };
        default:
            return state;
    }
}
