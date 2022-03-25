import {
    EmailSigninRequest,
    EmailSignupRequest,
    EmailVerifyRequest,
    ResetPasswordRequest,
    SendResetLinkRequest,
    UpdateUsernameRequest,
} from 'api/proto/v1/auth_pb';
import { RPCRequest } from 'common/types';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { GoogleOneTapRequest } from './types';

/**
 * Signs the user in the app
 *
 * @param r RPC Request
 * @returns User
 */
export async function emailSignin(r: RPCRequest<EmailSigninRequest.AsObject>) {
    const req = new EmailSigninRequest();
    req.setApi('v1');
    req.setEmail(r.params.email);
    req.setPassword(r.params.password);

    const res = await r.client.emailSignin(req, null);
    return res.toObject();
}

/**
 * Register the user to the platform, starting a new session
 *
 * @param r RPC Request
 * @returns User
 */
export async function emailSignup(r: RPCRequest<EmailSignupRequest.AsObject>) {
    const req = new EmailSignupRequest();
    req.setEmail(r.params.email);
    req.setPassword(r.params.password);
    req.setApi(r.params.api);
    req.setUsername(r.params.username);

    const res = await r.client.emailSignup(req, null);
    return res.toObject();
}

/**
 * Sends a reset password link via email
 *
 * @param r RPC Request
 * @returns Empty
 */
export async function sendResetLink(r: RPCRequest<SendResetLinkRequest.AsObject>) {
    const req = new SendResetLinkRequest();
    req.setEmail(r.params.email);

    const res = await r.client.sendResetLink(req, null);
    return res.toObject();
}

/**
 * Updates the user password
 *
 * @param r RPC Request
 * @returns Empty
 */
export async function resetPassword(r: RPCRequest<ResetPasswordRequest.AsObject>) {
    const req = new ResetPasswordRequest();
    req.setNewPassword(r.params.newPassword);
    req.setRepeat(r.params.repeat);
    req.setVerificationToken(r.params.verificationToken);

    const res = await r.client.resetPassword(req, null);
    return res.toObject();
}

/**
 * Updates user's username
 *
 * @param r RPC Request
 * @returns User
 */
export async function updateUsername(r: RPCRequest<UpdateUsernameRequest.AsObject>) {
    const req = new UpdateUsernameRequest();
    req.setUsername(r.params.username);

    const res = await r.client.updateUsername(req, null);
    return res.toObject();
}

/**
 * Attempts to verify the user email with the given
 * verification token
 *
 * @param r RPC Request
 * @returns Empty
 */
export async function emailVerify(r: RPCRequest<EmailVerifyRequest.AsObject>) {
    const req = new EmailVerifyRequest();
    req.setVerificationToken(r.params.verificationToken);

    const res = await r.client.emailVerify(req, null);
    return res.toObject();
}

/**
 * Signs the user out from the platform,
 * removing its session and session cookie
 *
 * @param r RPC Request
 * @returns Empty
 */
export async function signOut(r: RPCRequest<null>) {
    const req = new Empty();

    const res = await r.client.signOut(req, null);
    return res.toObject();
}

/**
 * Performs google one-tap authentication
 *
 * @param r RPC Request
 * @returns User
 */
export async function googleOneTap(r: RPCRequest<GoogleOneTapRequest>) {
    const req = new Empty();

    const res = await r.client.googleOneTap(req, { 'x-google-client-id': r.params.clientId, 'x-google-id-token': r.params.idToken });
    return res.toObject();
}

/**
 * Sets the user as 'online' for this session
 *
 * @param r RPC Request
 * @returns Empty
 */
export async function setUserOnline(r: RPCRequest<undefined>) {
    return r.client.setUserOnline(new Empty(), null);
}
