import { StripeCardDetails } from 'modules/payment/types';
import { createAction, createAsyncAction } from 'typesafe-actions';

export const subscribeToRoom = createAsyncAction(
    '@mainPayment/SUBSCRIBE_TO_ROOM_REQUEST',
    '@mainPayment/SUBSCRIBE_TO_ROOM_SUCCESS',
    '@mainPayment/SUBSCRIBE_TO_ROOM_FAILURE',
)<{ cardValues: StripeCardDetails; roomId: string }, undefined, undefined>();

export const payRoomEntrance = createAsyncAction(
    '@mainPayment/PAY_ROOM_ENTRANCE_REQUEST',
    '@mainPayment/PAY_ROOM_ENTRANCE_SUCCESS',
    '@mainPayment/PAY_ROOM_ENTRANCE_FAILURE',
)<{ roomId: string; cardDetails: StripeCardDetails }, undefined, undefined>();

export const fetchCustomer = createAction('@mainPayment/FETCH_CUSTOMER')();
