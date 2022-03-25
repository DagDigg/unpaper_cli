import { ExtUserInfoRequest, ExtUserInfoResponse, FollowUserRequest } from 'api/proto/v1/auth_pb';
import { GetUserSuggestionsRequest, UserSuggestion } from 'api/proto/v1/chat_pb';
import { createAsyncAction } from 'typesafe-actions';

export const getUserSuggestions = createAsyncAction(
    '@mainUsers/GET_USER_SUGGESTIONS_REQUEST',
    '@mainUsers/GET_USER_SUGGESTIONS_SUCCESS',
    '@mainUsers/GET_USER_SUGGESTIONS_FAILURE',
)<GetUserSuggestionsRequest.AsObject, UserSuggestion.AsObject[], undefined>();

export const getExtUserInfo = createAsyncAction(
    '@mainUsers/GET_EXT_USER_INFO_REQUEST',
    '@mainUsers/GET_EXT_USER_INFO_SUCCESS',
    '@mainUsers/GET_EXT_USER_INFO_FAILURE',
)<ExtUserInfoRequest.AsObject, ExtUserInfoResponse.AsObject, undefined>();

export const followUser = createAsyncAction('@auth/FOLLOW_USER_REQUEST', '@auth/FOLLOW_USER_SUCCESS', '@auth/FOLLOW_USER_FAILURE')<
    FollowUserRequest.AsObject,
    ExtUserInfoResponse.AsObject,
    undefined
>();
