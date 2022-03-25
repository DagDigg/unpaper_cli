import * as pb from 'api/proto/v1/posts_pb';
import { RPCRequest } from 'common/types';

/**
 * Creates a new post
 *
 * @param r RPC Request
 * @returns Newly created post
 */
export async function createPost(r: RPCRequest<pb.CreatePostRequest.AsObject>) {
    const req = new pb.CreatePostRequest();
    req.setMessage(r.params.message);
    req.setAudioBytes(r.params.audioBytes);
    req.setAudioDurationMs(r.params.audioDurationMs);
    req.setAudioFormat(r.params.audioFormat);

    const res = await r.client.createPost(req, null);
    return res.toObject();
}

/**
 * Retrieves posts
 *
 * @param r RPCRequest
 * @returns Posts list
 */
export async function getPosts(r: RPCRequest<pb.GetPostsRequest.AsObject>) {
    const req = new pb.GetPostsRequest();
    req.setCategory('foo');

    const res = await r.client.getPosts(req, null);
    return res.toObject();
}

/**
 * Retrieves a single post
 *
 * @param r RPCRequest
 * @returns Post
 */
export async function getPost(r: RPCRequest<pb.GetPostRequest.AsObject>) {
    const req = new pb.GetPostRequest();
    req.setPostId(r.params.postId);

    const res = await r.client.getPost(req, null);
    return res.toObject();
}

/**
 * Creates a comment for a post
 *
 * @param r RPC Request
 * @returns Newly created comment
 */
export async function createComment(r: RPCRequest<pb.CreateCommentRequest.AsObject>) {
    const req = new pb.CreateCommentRequest();
    req.setAudioBytes(r.params.audioBytes);
    req.setAudioDurationMs(r.params.audioDurationMs);
    req.setMessage(r.params.message);
    req.setPostId(r.params.postId);
    if (r.params.thread) {
        const threadReq = new pb.ThreadRequest();
        threadReq.setTargetId(r.params.thread.targetId);
        threadReq.setThreadType(r.params.thread.threadType);
        req.setThread(threadReq);
    }

    const res = await r.client.createComment(req, null);
    return res.toObject();
}

/**
 * Increments the post number of likes
 *
 * @param r RPC Request
 * @returns Updated post
 */
export async function likePost(r: RPCRequest<pb.LikePostRequest.AsObject>) {
    const req = new pb.LikePostRequest();
    req.setPostId(r.params.postId);

    const res = await r.client.likePost(req, null);
    return res.toObject();
}

/**
 * Increments the comment number of likes
 *
 * @param r RPC Request
 * @returns Updated comment
 */
export async function likeComment(r: RPCRequest<pb.LikeCommentRequest.AsObject>) {
    const req = new pb.LikeCommentRequest();
    req.setCommentId(r.params.commentId);

    const res = await r.client.likeComment(req, null);
    return res.toObject();
}
