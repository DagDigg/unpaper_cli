import { ExtUserInfoRequest, FollowUserRequest } from 'api/proto/v1/auth_pb';
import { GetUserSuggestionsRequest } from 'api/proto/v1/chat_pb';
import { RPCRequest } from 'common/types';

/**
 * Returns a list of users that match the query
 * @param r RPC Request
 * @returns List of user suggestions
 */
export async function getUserSuggetions(r: RPCRequest<GetUserSuggestionsRequest.AsObject>) {
    const req = new GetUserSuggestionsRequest();
    req.setQuery(r.params.query);

    const res = await r.client.getUserSuggestions(req, null);
    return res.toObject();
}

/**
 * Retrieve informations about an external user
 * @param r RPC Request
 * @returns External user info
 */
export async function extUserInfo(r: RPCRequest<ExtUserInfoRequest.AsObject>) {
    const req = new ExtUserInfoRequest();
    req.setUserId(r.params.userId);
    req.setUsername(r.params.username);

    const res = await r.client.extUserInfo(req, null);
    return res.toObject();
}

/**
 * Follows/Unfollows the specified userID
 *
 * @param r RPCRequest
 * @returns External user info
 */
export async function followUser(r: RPCRequest<FollowUserRequest.AsObject>) {
    const req = new FollowUserRequest();
    req.setUserIdToFollow(r.params.userIdToFollow);

    const res = await r.client.followUser(req, null);
    return res.toObject();
}
