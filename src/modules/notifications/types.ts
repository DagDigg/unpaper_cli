import * as pb from 'api/proto/v1/notifications_pb';
import { NormalizedState } from 'common/entities';

export type NotificationsModuleState = {
    notifications: NotificationsState;
};

export type NotificationsState = NormalizedState<pb.Notification.AsObject>;
