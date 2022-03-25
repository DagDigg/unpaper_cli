import { CreateListRequest, UpdateListRequest } from 'api/proto/v1/chat_pb';
import { RPCRequest } from 'common/types';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';

/**
 * Creates a new list
 * @param r RPC Request
 * @returns Created list
 */
export async function createList(r: RPCRequest<CreateListRequest.AsObject>) {
    const req = new CreateListRequest();
    req.setName(r.params.name);
    r.params.allowedUsersMap.forEach((u) => {
        req.getAllowedUsersMap().set(u[0], u[1]);
    });

    const res = await r.client.createList(req, null);
    return res.toObject();
}

/**
 * Updates an existing list
 * @param r RPC Request
 * @returns Created list
 */
export async function updateList(r: RPCRequest<UpdateListRequest.AsObject>) {
    const req = new UpdateListRequest();
    req.setName(r.params.name);
    req.setId(r.params.id);
    r.params.allowedUsersMap.forEach((u) => {
        req.getAllowedUsersMap().set(u[0], u[1]);
    });

    const res = await r.client.updateList(req, null);
    return res.toObject();
}

/**
 * Retrieves all users list
 * @param r RPC Request
 * @returns Lists owned by the user
 */
export async function getAllLists(r: RPCRequest<null>) {
    const res = await r.client.getAllLists(new Empty(), null);
    return res.toObject();
}
