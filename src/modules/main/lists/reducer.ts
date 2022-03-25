import * as listsActions from 'modules/lists/actions';
import * as actions from './actions';
import { ActionType, getType } from 'typesafe-actions';
import { ListModalStatus, MainListsState } from './types';

const initialState: MainListsState = {
    listModalStatus: ListModalStatus.Closed,
};

export default function reducer(
    state: MainListsState = initialState,
    action: ActionType<typeof listsActions> | ActionType<typeof actions>,
): MainListsState {
    switch (action.type) {
        case getType(listsActions.createList.request):
            return { ...state, listModalStatus: ListModalStatus.CreatingLoading };
        case getType(listsActions.updateList.request):
            return { ...state, listModalStatus: ListModalStatus.EditingLoading };

        case getType(listsActions.createList.success):
        case getType(listsActions.updateList.success):
            return { ...state, listModalStatus: ListModalStatus.Closed };

        case getType(actions.setListsModalStatus):
            return { ...state, listModalStatus: action.payload };
        default:
            return state;
    }
}
