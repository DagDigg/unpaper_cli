import { NotificationsModuleState } from './types';

export function selectAllNotifications(state: NotificationsModuleState) {
    return state.notifications.entities;
}

export function selectUnreadNotifications(state: NotificationsModuleState) {
    return Object.fromEntries(Object.entries(state.notifications.entities).filter(([_, n]) => !n.read));
}

export function selectHasUnreadNotifications(state: NotificationsModuleState) {
    return Object.values(selectUnreadNotifications(state)).length > 0;
}
