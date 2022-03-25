import { ActionType, createReducer } from 'typesafe-actions';
import { MixesState } from './types';
import * as actions from './actions';
import { addEntity } from 'common/entities';

const initialState: MixesState = {
    entities: {},
};

const reducer = createReducer<MixesState, ActionType<typeof actions>>(initialState).handleAction(actions.getMixes.success, (_, action) =>
    action.payload.mixesList.reduce(addEntity, initialState),
);

export default reducer;
