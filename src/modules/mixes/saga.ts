import { call, put, takeLeading } from '@redux-saga/core/effects';
import { GetMixesRes } from 'api/proto/v1/mixes_pb';
import Client from 'services/client';
import * as actions from './actions';
import * as api from './api';

function* handleGetMixes() {
    try {
        const client = Client.get();
        const res: GetMixesRes.AsObject = yield call(api.getMixes, { client, params: undefined });
        yield put(actions.getMixes.success(res));
    } catch (error) {
        yield put(actions.getMixes.failure());
    }
}

export default function* mixesSaga() {
    yield takeLeading(actions.getMixes.request, handleGetMixes);
}
