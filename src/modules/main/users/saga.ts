import { call, put, takeLeading } from '@redux-saga/core/effects';
import { ExtUserInfoResponse } from 'api/proto/v1/auth_pb';
import { GetUserSuggestionsResponse } from 'api/proto/v1/chat_pb';
import Client from 'services/client';
import * as actions from './actions';
import * as api from './api';

function* handleGetUserSuggestions(action: ReturnType<typeof actions.getUserSuggestions.request>) {
    const { query } = action.payload;
    try {
        const client = Client.get();
        const res: GetUserSuggestionsResponse.AsObject = yield call([api, 'getUserSuggetions'], { client, params: { query } });
        yield put(actions.getUserSuggestions.success(res.usersList));
    } catch (error) {
        yield put(actions.getUserSuggestions.failure());
    }
}

function* handleGetExtUserInfo(action: ReturnType<typeof actions.getExtUserInfo.request>) {
    try {
        const client = Client.get();
        const res: ExtUserInfoResponse.AsObject = yield call([api, 'extUserInfo'], { client, params: action.payload });
        if (!res.userInfo) throw new Error('missing user info');
        yield put(actions.getExtUserInfo.success(res));
    } catch (error) {
        console.log(error);
        yield put(actions.getExtUserInfo.failure());
    }
}

function* handleFollowUser(action: ReturnType<typeof actions.followUser.request>) {
    try {
        const client = Client.get();
        const res: ExtUserInfoResponse.AsObject = yield call(api.followUser, { client, params: action.payload });
        yield put(actions.followUser.success(res));
    } catch (error) {
        yield put(actions.followUser.failure());
    }
}

export default function* saga() {
    yield takeLeading(actions.getUserSuggestions.request, handleGetUserSuggestions);
    yield takeLeading(actions.getExtUserInfo.request, handleGetExtUserInfo);
    yield takeLeading(actions.followUser.request, handleFollowUser);
}
