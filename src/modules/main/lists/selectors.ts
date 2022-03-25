import { MainListsModuleState } from './types';

export function selectListsModalStatus(state: MainListsModuleState) {
    return state.mainLists.listModalStatus;
}
