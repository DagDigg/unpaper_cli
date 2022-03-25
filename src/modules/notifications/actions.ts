import * as pb from 'api/proto/v1/notifications_pb';
import { createAction, createAsyncAction } from 'typesafe-actions';

export const getAllNotifications = createAsyncAction(
    '@notifications/GET_ALL_NOTIFICATIONS_REQUEST',
    '@notifications/GET_ALL_NOTIFICATIONS_SUCCESS',
    '@notifications/GET_ALL_NOTIFICATIONS_FAILURE',
)<undefined, pb.GetAllNotificationsRes.AsObject, string>();

export const readNotification = createAsyncAction(
    '@notifications/READ_NOTIFICATION_REQUEST',
    '@notifications/READ_NOTIFICATION_SUCCESS',
    '@notifications/READ_NOTIFICATION_FAILURE',
)<pb.ReadNotificationRequest.AsObject, pb.ReadNotificationResponse.AsObject, undefined>();

export const listenForNotifications = createAction('@notifications/LISTEN_FOR_NOTIFICATIONS')<undefined>();

export const addNotification = createAction('@notifications/ADD_NOTIFICATION')<pb.Notification.AsObject>();
