import { ListsModuleState } from './types';

export function selectLists(state: ListsModuleState) {
    return state.lists.lists;
}
