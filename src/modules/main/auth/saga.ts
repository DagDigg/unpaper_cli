import { history } from 'common/history';
import { hasSucceeded } from 'common/sagaUtils';
import * as authActions from 'modules/auth/actions';
import { put, takeLeading } from 'redux-saga/effects';
import { addToast } from 'services/toasts';
import * as actions from './actions';

/**
 * Attempts to verify user email. On success it redirects
 *
 * @param action emailVerify.request
 */
function* handleEmailVerify(action: ReturnType<typeof actions.emailVerify.request>) {
    try {
        yield put(authActions.emailVerify.request(action.payload));
        const ok: boolean = yield hasSucceeded(authActions.emailVerify);
        if (!ok) {
            throw new Error('verification failed');
        }
        yield put(actions.emailVerify.success());
        yield addToast({ label: 'Verification succeeded!' });
        yield history.push('/');
    } catch (error) {
        yield put(actions.emailVerify.failure());
        yield addToast({ label: 'Something went wrong, please try again' });
    }
}
/**
 * Signs the user in and redirects to home
 *
 * @param action emailSignin.request
 */
function* handleEmailSignin(action: ReturnType<typeof actions.emailSignin.request>) {
    try {
        yield put(authActions.emailSignin.request(action.payload));
        const ok: boolean = yield hasSucceeded(authActions.emailSignin);
        if (!ok) {
            throw new Error('verification failed');
        }
        yield put(actions.emailSignin.success());
        yield history.push('/');
    } catch (error) {
        yield put(actions.emailSignin.failure());
        yield addToast({ label: 'Something went wrong, please try again' });
    }
}

export default function* saga() {
    yield takeLeading(actions.emailVerify.request, handleEmailVerify);
    yield takeLeading(actions.emailSignin.request, handleEmailSignin);
}
