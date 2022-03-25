import * as pb from 'api/proto/v1/notifications_pb';
import { RPCRequest } from 'common/types';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { ClientReadableStream } from 'grpc-web';

/**
 * Calls a GRPC stream listening for incoming notifications
 *
 * @param r Empty
 * @returns Stream of notifications
 */
export async function listenForNotifications(r: RPCRequest<undefined>): Promise<ClientReadableStream<pb.Notification>> {
    return r.client.listenForNotifications(new Empty(), undefined) as ClientReadableStream<pb.Notification>;
}

/**
 * Retrieves notifications sorted by: unread by date, then read by date
 *
 * @param r Empty
 * @returns Ordered notifications
 */
export async function getAllNotifications(r: RPCRequest<undefined>) {
    const res = await r.client.getAllNotifications(new Empty(), null);

    return res.toObject();
}

/**
 * Sets the `read` flag for the notification to `true`
 *
 * @param r RPC Request
 * @returns Notification
 */
export async function readNotification(r: RPCRequest<pb.ReadNotificationRequest.AsObject>) {
    const req = new pb.ReadNotificationRequest();
    req.setNotificationId(r.params.notificationId);

    const res = await r.client.readNotification(req, null);
    return res.toObject();
}
