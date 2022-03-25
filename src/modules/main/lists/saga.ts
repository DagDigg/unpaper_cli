import { put, takeLeading } from '@redux-saga/core/effects';
import * as listsActions from 'modules/lists/actions';
import * as actions from './actions';
import { ListModalStatus } from './types';

function* closeListsModal() {
    yield put(actions.setListsModalStatus(ListModalStatus.Closed));
}

export default function* saga() {
    yield takeLeading(listsActions.createList.success, closeListsModal);
}
