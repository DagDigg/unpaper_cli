import { ActionType, createReducer } from 'typesafe-actions';
import { NotificationsState } from './types';
import * as actions from './actions';
import { addEntity, addEntityAtStart } from 'common/entities';

const initialState: NotificationsState = {
    entities: {},
};
const reducer = createReducer<NotificationsState, ActionType<typeof actions>>(initialState)
    .handleAction(actions.getAllNotifications.success, (_, action) => action.payload.notificationsList.reduce(addEntity, initialState))
    .handleAction(actions.addNotification, (state, action) => addEntityAtStart(state, action.payload))
    .handleAction(actions.readNotification.success, (state, action) => addEntity(state, action.payload.notification!));

export default reducer;
