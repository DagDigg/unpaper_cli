import * as authActions from 'modules/auth/actions';
import authSaga from 'modules/auth/saga';
import chatSaga from 'modules/chat/saga';
import listsSaga from 'modules/lists/saga';
import mainAuthSaga from 'modules/main/auth/saga';
import mainChatSaga from 'modules/main/chat/saga';
import mainListsSaga from 'modules/main/lists/saga';
import mainMixesSaga from 'modules/main/mixes/saga';
import mainPaymentSaga from 'modules/main/payment/saga';
import mainPlayerSaga from 'modules/main/player/saga';
import mainPostsSaga from 'modules/main/posts/saga';
import mainUsersSaga from 'modules/main/users/saga';
import * as mixesActions from 'modules/mixes/actions';
import mixesSaga from 'modules/mixes/saga';
import * as notificationsActions from 'modules/notifications/actions';
import notificationsSaga from 'modules/notifications/saga';
import paymentSaga from 'modules/payment/saga';
import postsSaga from 'modules/posts/saga';
import { fork, put } from 'redux-saga/effects';
import * as mainPaymentActions from './payment/actions';

export default function* mainSaga() {
    yield fork(authSaga);
    yield fork(chatSaga);
    yield fork(listsSaga);
    yield fork(mixesSaga);
    yield fork(notificationsSaga);
    yield fork(paymentSaga);
    yield fork(postsSaga);

    yield fork(mainAuthSaga);
    yield fork(mainChatSaga);
    yield fork(mainListsSaga);
    yield fork(mainMixesSaga);
    yield fork(mainPaymentSaga);
    yield fork(mainPlayerSaga);
    yield fork(mainPostsSaga);
    yield fork(mainUsersSaga);

    // Initial actions
    yield put(mixesActions.getMixes.request());
    yield put(authActions.userInfo.request());
    yield put(mainPaymentActions.fetchCustomer());
    yield put(notificationsActions.getAllNotifications.request());
}
