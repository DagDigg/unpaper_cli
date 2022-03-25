import { List } from 'api/proto/v1/chat_pb';
import { ActionType, getType } from 'typesafe-actions';
import * as actions from './actions';
import { ListsState } from './types';

const initialState: ListsState = { lists: [] };

export default function reducer(state: ListsState = initialState, action: ActionType<typeof actions>): ListsState {
    switch (action.type) {
        case getType(actions.createList.success):
            return { ...state, lists: [...state.lists, action.payload] };
        case getType(actions.updateList.success):
            return { ...state, lists: replaceList(state.lists, action.payload) };
        case getType(actions.getAllLists.success):
            return { ...state, lists: action.payload };
        default:
            return state;
    }
}

function replaceList(all: List.AsObject[], list: List.AsObject) {
    return all.map((stateList) => {
        if (stateList.id === list.id) {
            return list;
        }
        return stateList;
    });
}
