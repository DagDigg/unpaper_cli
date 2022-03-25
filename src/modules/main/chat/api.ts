import { RoomAccessCheckRequest } from 'api/proto/v1/chat_pb';
import { CheckRoomEntrancePIRequest } from 'api/proto/v1/payment_pb';
import { RPCRequest } from 'common/types';

/**
 * Checks whether the user has access to the room
 * @param r RPC Request
 * @returns Authorization response
 */
export async function roomAccessCheck(r: RPCRequest<RoomAccessCheckRequest.AsObject>) {
    const req = new RoomAccessCheckRequest();
    req.setRoomId(r.params.roomId);

    const res = await r.client.roomAccessCheck(req, null);
    return res.toObject();
}

/**
 * Checks if there is any payment intent
 * on the customer with that specific room
 * @param r RPC Request
 * @returns Payment intent status
 */
export async function checkRoomEntrancePI(r: RPCRequest<CheckRoomEntrancePIRequest.AsObject>) {
    const req = new CheckRoomEntrancePIRequest();
    req.setRoomId(r.params.roomId);

    const res = await r.client.checkRoomEntrancePI(req, null);
    return res.toObject();
}
