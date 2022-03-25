import { RoomAccessCheckRequest, RoomAuthorization } from 'api/proto/v1/chat_pb';
import { CheckRoomEntrancePIRequest, CheckRoomEntrancePIResponse } from 'api/proto/v1/payment_pb';
import { createAction, createAsyncAction } from 'typesafe-actions';
import { ChatView, ModalPayRoomStep, RoomView } from './types';

export const getRoomAccess = createAsyncAction(
    '@mainChat/GET_ROOM_ACCESS_REQUEST',
    '@mainChat/GET_ROOM_ACCESS_SUCCESS',
    '@mainChat/GET_ROOM_ACCESS_FAILURE',
)<RoomAccessCheckRequest.AsObject, { roomId: string; authorization: RoomAuthorization.Enum }, undefined>();

export const getRoomPIStatus = createAsyncAction(
    '@mainChat/GET_ROOM_PI_STATUS_REQUEST',
    '@mainChat/GET_ROOM_PI_STATUS_SUCCESS',
    '@mainChat/GET_ROOM_PI_STATUS_FAILURE',
)<CheckRoomEntrancePIRequest.AsObject, CheckRoomEntrancePIResponse.AsObject, undefined>();

export const setChatView = createAction('@mainChat/SET_CHAT_VIEW')<ChatView>();
export const setRoomView = createAction('@mainChat/SET_ROOM_VIEW')<RoomView>();
export const setModalPayRoomStep = createAction('@mainChat/SET_MODAL_PAY_ROOM_STEP')<ModalPayRoomStep>();

export const pollRoomAccessCheck = createAsyncAction(
    '@mainChat/POLL_ROOM_ACCESS_CHECK_REQUEST',
    '@mainChat/POLL_ROOM_ACCESS_CHECK_SUCCESS',
    '@mainChat/POLL_ROOM_ACCESS_CHECK_FAILURE',
)<{ roomId: string }, undefined, undefined>();

export const startRoomAuthFlow = createAsyncAction(
    '@mainChat/START_ROOM_AUTH_FLOW_REQUEST',
    '@mainChat/START_ROOM_AUTH_FLOW_SUCCESS',
    '@mainChat/START_ROOM_AUTH_FLOW_FAILURE',
)<{ roomId: string }, undefined, undefined>();
