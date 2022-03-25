import { EventID, Notification } from 'api/proto/v1/notifications_pb';
import { History } from 'history';

export function navigateToNotification(n: Notification.AsObject, history: History) {
    switch (n.event?.id) {
        case EventID.Enum.LIKE_COMMENT:
        case EventID.Enum.LIKE_POST:
        case EventID.Enum.COMMENT:
            return history.push(`/posts/${n.triggerId}`);
        case EventID.Enum.FOLLOW:
            return history.push(`/profile/@${n.triggerId}`);
        default:
            break;
    }
}
