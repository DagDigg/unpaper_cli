import {
    ChangePasswordRequest,
    EmailSigninRequest,
    EmailSignupRequest,
    EmailVerifyRequest,
    ResetPasswordRequest,
    SendResetLinkRequest,
    UpdateUsernameRequest,
    User,
} from 'api/proto/v1/auth_pb';
import { createAction, createAsyncAction } from 'typesafe-actions';
import { GoogleOneTapRequest } from './types';

export const googleLogin = createAsyncAction('@auth/GOOGLE_LOGIN_REQUEST', '@auth/GOOGLE_LOGIN_SUCCESS', '@auth/GOOGLE_LOGIN_FAILURE')<
    undefined,
    undefined,
    undefined
>();

export const googleCallback = createAsyncAction(
    '@auth/GOOGLE_CALLBACK_REQUEST',
    '@auth/GOOGLE_CALLBACK_SUCCESS',
    '@auth/GOOGLE_CALLBACK_FAILURE',
)<{ searchStr: string }, User.AsObject, undefined>();

export const googleOneTap = createAsyncAction(
    '@auth/GOOGLE_ONE_TAP_REQUEST',
    '@auth/GOOGLE_ONE_TAP_SUCCESS',
    '@auth/GOOGLE_ONE_TAP_FAILURE',
)<GoogleOneTapRequest, User.AsObject, undefined>();

export const emailSignup = createAsyncAction('@auth/EMAIL_SIGNUP_REQUEST', '@auth/EMAIL_SIGNUP_SUCCESS', '@auth/EMAIL_SIGNUP_FAILURE')<
    EmailSignupRequest.AsObject,
    User.AsObject,
    undefined
>();

export const emailSignin = createAsyncAction('@auth/EMAIL_SIGNIN_REQUEST', '@auth/EMAIL_SIGNIN_SUCCESS', '@auth/EMAIL_SIGNIN_FAILURE')<
    EmailSigninRequest.AsObject,
    User.AsObject,
    undefined
>();

export const signOut = createAsyncAction('@auth/SIGN_OUT_REQUEST', '@auth/SIGN_OUT_SUCCESS', '@auth/SIGN_OUT_FAILURE')<
    undefined,
    undefined,
    undefined
>();

export const emailVerify = createAsyncAction('@auth/EMAIL_VERIFY_REQUEST', '@auth/EMAIL_VERIFY_SUCCESS', '@auth/EMAIL_VERIFY_FAILURE')<
    EmailVerifyRequest.AsObject,
    undefined,
    undefined
>();

export const userInfo = createAsyncAction('@auth/USERINFO_REQUEST', '@auth/USERINFO_SUCCESS', '@auth/USERINFO_FAILURE')<
    undefined,
    User.AsObject,
    string
>();

export const changePassword = createAsyncAction(
    '@auth/CHANGE_PASSWORD_REQUEST',
    '@auth/CHANGE_PASSWORD_SUCCESS',
    '@auth/CHANGE_PASSWORD_FAILURE',
)<ChangePasswordRequest.AsObject, undefined, undefined>();

export const sendResetLink = createAsyncAction(
    '@auth/SEND_RESET_LINK_REQUEST',
    '@auth/SEND_RESET_LINK_SUCCESS',
    '@auth/SEND_RESET_LINK_FAILURE',
)<SendResetLinkRequest.AsObject, undefined, undefined>();

export const resetPassword = createAsyncAction(
    '@auth/RESET_PASSWORD_REQUEST',
    '@auth/RESET_PASSWORD_SUCCESS',
    '@auth/RESET_PASSWORD_FAILURE',
)<ResetPasswordRequest.AsObject, undefined, undefined>();

export const updateUsername = createAsyncAction(
    '@auth/UPDATE_USERNAME_REQUEST',
    '@auth/UPDATE_USERNAME_SUCCESS',
    '@auth/UPDATE_USERNAME_FAILURE',
)<UpdateUsernameRequest.AsObject, User.AsObject, undefined>();

export const setUserOnline = createAction('@auth/SET_USER_ONLINE')<undefined>();
