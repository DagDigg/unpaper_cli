import { ActionType, createReducer } from 'typesafe-actions';
import * as actions from './actions';
import { PlayerState } from './types';
import * as helpers from './helpers';

const initialState: PlayerState = {
    current: null,
    queue: [],
};

const reducer = createReducer<PlayerState, ActionType<typeof actions>>(initialState)
    .handleAction(actions.shiftQueue, helpers.setShiftQueue)
    .handleAction(actions.setState, (_, action) => action.payload)
    .handleAction(actions.setQueue, (state, action) => ({ ...state, queue: action.payload }))
    .handleAction(actions.setCurrent, (state, action) => ({ ...state, current: action.payload }));

export default reducer;
