import * as pb from 'api/proto/v1/posts_pb';
import { call, put, takeLeading } from 'redux-saga/effects';
import Client from 'services/client';
import * as actions from './actions';
import * as api from './api';

function* handleCreatePost(action: ReturnType<typeof actions.createPost.request>) {
    try {
        const client = Client.get();
        const res: pb.CreatePostResponse.AsObject = yield call(api.createPost, { client, params: action.payload });
        yield put(actions.createPost.success(res));
    } catch (error) {
        yield put(actions.createPost.failure('An error occurred during the operation'));
    }
}

function* handleGetPosts(action: ReturnType<typeof actions.getPosts.request>) {
    try {
        const client = Client.get();
        const res: pb.GetPostsResponse.AsObject = yield call(api.getPosts, { client, params: action.payload });
        yield put(actions.getPosts.success(res));
    } catch (error) {
        console.error(error);
        yield put(actions.getPosts.failure('An error occurred during the operation'));
    }
}

function* handleGetPost(action: ReturnType<typeof actions.getPost.request>) {
    try {
        const client = Client.get();
        const res: pb.GetPostResponse.AsObject = yield call(api.getPost, { client, params: action.payload });
        yield put(actions.getPost.success(res));
    } catch (error) {
        console.error(error);
        yield put(actions.getPosts.failure('An error occurred during the operation'));
    }
}

function* handleCreateComment(action: ReturnType<typeof actions.createComment.request>) {
    try {
        const client = Client.get();
        const res: pb.CreateCommentResponse.AsObject = yield call(api.createComment, {
            client,
            params: { ...action.payload, audioDurationMs: Math.floor(action.payload.audioDurationMs) },
        });
        yield put(actions.createComment.success(res.comment!));
    } catch (error) {
        yield put(actions.createComment.failure('An error occurred during the operation'));
    }
}

function* handleLikePost(action: ReturnType<typeof actions.likePost.request>) {
    try {
        const client = Client.get();
        const res: pb.LikePostResponse.AsObject = yield call(api.likePost, { client, params: action.payload });
        yield put(actions.likePost.success(res));
    } catch (error) {
        yield put(actions.likePost.failure());
    }
}

export default function* saga() {
    yield takeLeading(actions.createPost.request, handleCreatePost);
    yield takeLeading(actions.getPosts.request, handleGetPosts);
    yield takeLeading(actions.getPost.request, handleGetPost);
    yield takeLeading(actions.createComment.request, handleCreateComment);
    yield takeLeading(actions.likePost.request, handleLikePost);
}
