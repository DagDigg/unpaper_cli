import { UsersModuleState } from './types';

export function selectUserSuggestions(state: UsersModuleState) {
    return state.mainUsers.userSuggestions;
}

export function selectExtUserInfo(id: string) {
    return function (state: UsersModuleState) {
        return state.mainUsers.extUserInfos.entities[id];
    };
}

export function selectExtUserInfoByUsername(username: string) {
    return function (state: UsersModuleState) {
        return Object.values(state.mainUsers.extUserInfos.entities).find((e) => e.username === username);
    };
}
