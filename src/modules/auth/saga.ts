import {
    ChangePasswordRequest,
    GoogleCallbackRequest,
    GoogleLoginRequest,
    GoogleLoginResponse,
    User,
    UserInfoRequest,
} from 'api/proto/v1/auth_pb';
import { history } from 'common/history';
import { goToNextRoute } from 'common/nextRoute';
import { call, put, takeLeading } from 'redux-saga/effects';
import Client from 'services/client';
import { addToast } from 'services/toasts';
import * as actions from './actions';
import * as api from './api';

function* handleGoogleLogin(_: ReturnType<typeof actions.googleLogin.request>) {
    try {
        const client = Client.get();

        const req = new GoogleLoginRequest();
        const res: GoogleLoginResponse = yield client.googleLogin(req, null);
        const redirectURI = res.getConsenturl();
        const state = res.getState();
        if (!redirectURI || !state) {
            throw new Error('missing redirect uri or state');
        }

        localStorage.setItem('state', state);
        window.location.replace(redirectURI);
    } catch (error) {
        yield put(actions.googleLogin.failure());
        console.error(error);
    }
}

function* handleGoogleCallback(action: ReturnType<typeof actions.googleCallback.request>) {
    const { searchStr } = action.payload;

    try {
        const client = Client.get();
        const urlParams = new URLSearchParams(searchStr);
        const code = urlParams.get('code');
        const state = urlParams.get('state');
        const localState = localStorage.getItem('state');
        if (!localState || state !== localState) {
            throw new Error(`state mismatch. Received: ${state} , local: ${localState}`);
        }

        localStorage.removeItem('state');
        const req = new GoogleCallbackRequest();
        if (!code) {
            throw new Error('no code available');
        }
        const user: User = yield client.googleCallback(req, { 'x-code': code });
        yield put(actions.googleCallback.success(user.toObject()));
        goToNextRoute();
    } catch (error) {
        yield put(actions.googleCallback.failure());
        console.error(error);
    }
}

function* handleEmailSignup(action: ReturnType<typeof actions.emailSignup.request>) {
    try {
        const client = Client.get();
        const user: User.AsObject = yield call([api, 'emailSignup'], { client, params: action.payload });
        yield put(actions.emailSignup.success(user));

        goToNextRoute();
    } catch (error) {
        yield put(actions.emailSignup.failure());
        console.error(error);
    }
}

function* handleEmailSignin(action: ReturnType<typeof actions.emailSignin.request>) {
    try {
        const client = Client.get();
        const res: User.AsObject = yield call([api, 'emailSignin'], { client, params: action.payload });
        yield put(actions.emailSignin.success(res));
    } catch (error) {
        console.log(error);
        yield put(actions.emailSignin.failure());
    }
}

function* handleUserInfo(_: ReturnType<typeof actions.userInfo.request>) {
    const req = new UserInfoRequest();

    try {
        const client = Client.get();
        const res: User = yield client.userInfo(req, null);
        yield put(actions.userInfo.success(res.toObject()));
    } catch (error) {
        yield put(actions.userInfo.failure('unauthorized'));
        console.error(error);
    }
}

function* handleChangePassword(action: ReturnType<typeof actions.changePassword.request>) {
    const req = new ChangePasswordRequest();
    try {
        const { newPassword, oldPassword, repeat } = action.payload;
        const client = Client.get();
        req.setNewPassword(newPassword);
        req.setRepeat(repeat);
        req.setOldPassword(oldPassword);

        yield client.changePassword(req, null);
        yield put(actions.changePassword.success());
        addToast({ label: 'Password changed!' });
        window.setTimeout(() => {
            window.location.replace('/auth/signin');
        }, 1000);
    } catch (error) {
        yield put(actions.changePassword.failure());
    }
}

function* handleSendResetLink(action: ReturnType<typeof actions.sendResetLink.request>) {
    const { email } = action.payload;
    try {
        const client = Client.get();
        yield call([api, 'sendResetLink'], { client, params: { email } });
        addToast({ label: 'An email has been sent, if it exists on GogoCrowd!' });
        yield put(actions.sendResetLink.success());
    } catch (error) {
        console.error(error);
        yield put(actions.sendResetLink.failure());
    }
}

function* handleResetPassword(action: ReturnType<typeof actions.resetPassword.request>) {
    const { newPassword, repeat, verificationToken } = action.payload;
    try {
        const client = Client.get();
        yield call([api, 'resetPassword'], { client, params: { newPassword, repeat, verificationToken } });
        addToast({ label: 'Password has been succesfully changed!' });
        window.setTimeout(() => {
            history.push('/auth/signin');
        }, 1000);
    } catch (error) {
        console.error(error);
        yield put(actions.resetPassword.failure());
    }
}

function* handleUpdateUsername(action: ReturnType<typeof actions.updateUsername.request>) {
    const { username } = action.payload;
    try {
        const client = Client.get();
        const res: User.AsObject = yield call([api, 'updateUsername'], { client, params: { username } });
        yield put(actions.updateUsername.success(res));
        addToast({ label: 'Username set!' });
    } catch (error) {
        addToast({ type: 'error', label: 'Something went wrong' });
        yield put(actions.updateUsername.failure());
    }
}

function* handleEmailVerify(action: ReturnType<typeof actions.emailVerify.request>) {
    try {
        const client = Client.get();
        yield call([api, 'emailVerify'], { client, params: action.payload });
        yield put(actions.emailVerify.success());
    } catch (error) {
        yield put(actions.emailVerify.failure());
    }
}

function* handleSignOut(_: ReturnType<typeof actions.signOut.request>) {
    try {
        const client = Client.get();
        yield call([api, 'signOut'], { client, params: null });
        yield put(actions.signOut.success());
    } catch (error) {
        yield put(actions.signOut.failure());
    }
}

function* handleGoogleOneTap(action: ReturnType<typeof actions.googleOneTap.request>) {
    try {
        const client = Client.get();
        const user: User.AsObject = yield call([api, 'googleOneTap'], { client, params: action.payload });
        yield put(actions.googleOneTap.success(user));
    } catch (error) {
        yield put(actions.googleOneTap.failure());
    }
}

function* handleSetUserOnline(_: ReturnType<typeof actions.setUserOnline>) {
    try {
        const client = Client.get();
        yield call(api.setUserOnline, { client, params: undefined });
    } catch (error) {
        console.error(error);
    }
}

export default function* root() {
    yield takeLeading(actions.userInfo.request, handleUserInfo);
    yield takeLeading(actions.googleLogin.request, handleGoogleLogin);
    yield takeLeading(actions.googleCallback.request, handleGoogleCallback);
    yield takeLeading(actions.emailSignup.request, handleEmailSignup);
    yield takeLeading(actions.emailSignin.request, handleEmailSignin);
    yield takeLeading(actions.googleOneTap.request, handleGoogleOneTap);
    yield takeLeading(actions.signOut.request, handleSignOut);
    yield takeLeading(actions.changePassword.request, handleChangePassword);
    yield takeLeading(actions.sendResetLink.request, handleSendResetLink);
    yield takeLeading(actions.resetPassword.request, handleResetPassword);
    yield takeLeading(actions.updateUsername.request, handleUpdateUsername);
    yield takeLeading(actions.emailVerify.request, handleEmailVerify);
    yield takeLeading(actions.setUserOnline, handleSetUserOnline);
}
