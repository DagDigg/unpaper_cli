import { TernaryStatus } from 'common/types';
import { State } from './reducer';

type ModuleState = {
    auth: State;
};

/**
 * selectAuthModuleStatus returns the status
 * of the auth module
 * @param state module state
 */
export function selectAuthModuleStatus(state: ModuleState): TernaryStatus {
    return state.auth.status;
}

/**
 * selectAuthStatus selects the module status
 * @param state module state
 */
export function selectAuthStatus(state: ModuleState) {
    return state.auth.status;
}

/**
 * Returns the currently logged user
 * @param state Module state
 * @returns User
 */
export function selectUser(state: ModuleState) {
    return state.auth.user;
}
