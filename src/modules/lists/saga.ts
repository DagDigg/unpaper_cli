import { call, put, takeLeading } from '@redux-saga/core/effects';
import { GetAllListsResponse, List } from 'api/proto/v1/chat_pb';
import Client from 'services/client';
import * as actions from './actions';
import * as api from './api';

function* handleCreateList(action: ReturnType<typeof actions.createList.request>) {
    try {
        const client = Client.get();
        const res: List.AsObject = yield call([api, 'createList'], { client, params: action.payload });
        yield put(actions.createList.success(res));
    } catch (error) {
        yield put(actions.createList.failure());
    }
}

function* handleUpdateList(action: ReturnType<typeof actions.updateList.request>) {
    try {
        const client = Client.get();
        const res: List.AsObject = yield call([api, 'updateList'], { client, params: action.payload });
        yield put(actions.updateList.success(res));
    } catch (error) {
        yield put(actions.updateList.failure());
    }
}

function* handleGetAllLists(_: ReturnType<typeof actions.getAllLists.request>) {
    try {
        const client = Client.get();
        const res: GetAllListsResponse.AsObject = yield call([api, 'getAllLists'], { client, params: null });
        yield put(actions.getAllLists.success(res.listsList));
    } catch (error) {
        yield put(actions.createList.failure());
    }
}

export default function* root() {
    yield takeLeading(actions.createList.request, handleCreateList);
    yield takeLeading(actions.updateList.request, handleUpdateList);
    yield takeLeading(actions.getAllLists.request, handleGetAllLists);
}
