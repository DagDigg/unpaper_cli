import { EmailSigninRequest, EmailVerifyRequest } from 'api/proto/v1/auth_pb';
import { createAsyncAction } from 'typesafe-actions';

export const emailVerify = createAsyncAction(
    '@mainAuth/EMAIL_VERIFY_REQUEST',
    '@mainAuth/EMAIL_VERIFY_SUCCESS',
    '@mainAuth/EMAIL_VERIFY_FAILURE',
)<EmailVerifyRequest.AsObject, undefined, undefined>();

export const emailSignin = createAsyncAction(
    '@mainAuth/EMAIL_SIGN_IN_REQUEST',
    '@mainAuth/EMAIL_SIGN_IN_SUCCESS',
    '@mainAuth/EMAIL_SIGN_IN_FAILURE',
)<EmailSigninRequest.AsObject, undefined, undefined>();
