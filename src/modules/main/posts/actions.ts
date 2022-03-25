import * as pb from 'api/proto/v1/posts_pb';
import { createAsyncAction } from 'typesafe-actions';

export const createPost = createAsyncAction(
    '@mainPosts/CREATE_POST_REQUEST',
    '@mainPosts/CREATE_POST_SUCCESS',
    '@mainPosts/CREATE_POST_FAILURE',
)<pb.CreatePostRequest.AsObject & { threadMsgs?: pb.CreateCommentRequest.AsObject[]; onSuccess?: () => void }, undefined, undefined>();
