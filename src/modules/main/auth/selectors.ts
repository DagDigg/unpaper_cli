import { MainAuthState } from './types';

export function selectEmailVerifyStatus(state: MainAuthState) {
    return state.emailVerifyStatus;
}
