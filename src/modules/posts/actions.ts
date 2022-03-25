import * as pb from 'api/proto/v1/posts_pb';
import { createAction, createAsyncAction } from 'typesafe-actions';

export const createPost = createAsyncAction('@posts/CREATE_REQUEST', '@posts/CREATE_SUCCESS', '@posts/CREATE_FAILURE')<
    pb.CreatePostRequest.AsObject,
    pb.CreatePostResponse.AsObject,
    string
>();

export const getPosts = createAsyncAction('@posts/GET_POSTS_REQUEST', '@posts/GET_POSTS_SUCCESS', '@posts/GET_POSTS_FAILURE')<
    pb.GetPostsRequest.AsObject,
    pb.GetPostsResponse.AsObject,
    string
>();

export const getPost = createAsyncAction('@posts/GET_POST_REQUEST', '@posts/GET_POST_SUCCESS', '@posts/GET_POST_FAILURE')<
    pb.GetPostRequest.AsObject,
    pb.GetPostResponse.AsObject,
    string
>();

export const createComment = createAsyncAction(
    '@posts/CREATE_COMMENT_REQUEST',
    '@posts/CREATE_COMMENT_SUCCESS',
    '@posts/CREATE_COMMENT_FAILURE',
)<pb.CreateCommentRequest.AsObject, pb.Comment.AsObject, string>();

export const addComment = createAction('@posts/ADD_COMMENT')<pb.Comment.AsObject>();

export const likePost = createAsyncAction('@posts/LIKE_POST_REQUEST', '@posts/LIKE_POST_SUCCESS', '@posts/LIKE_POST_FAILURE')<
    pb.LikePostRequest.AsObject,
    pb.LikePostResponse.AsObject,
    undefined
>();
