import { call, put, race, take, takeLeading } from '@redux-saga/core/effects';
import { RoomAccessCheckResponse, RoomAuthorization } from 'api/proto/v1/chat_pb';
import { CheckRoomEntrancePIResponse } from 'api/proto/v1/payment_pb';
import { history } from 'common/history';
import { delay } from 'redux-saga/effects';
import Client from 'services/client';
import { addToast } from 'services/toasts';
import * as actions from './actions';
import * as api from './api';
import { RoomView } from './types';

/**
 * Fetches room access check and stores it on the reducer
 *
 * @param action actions.getRoomAccess.request
 */
function* handleGetRoomAccess(action: ReturnType<typeof actions.getRoomAccess.request>) {
    try {
        const client = Client.get();
        const res: RoomAccessCheckResponse.AsObject = yield call([api, 'roomAccessCheck'], {
            client,
            params: action.payload,
        });

        yield put(actions.getRoomAccess.success({ roomId: action.payload.roomId, authorization: res.authorization }));
    } catch (error) {
        yield put(actions.getRoomAccess.failure());
    }
}

/**
 * Fetches the room latest invoice payment intent for the user, if any
 *
 * @param action actions.getRoomPIStatus.request
 */
function* handleGetRoomPIStatus(action: ReturnType<typeof actions.getRoomPIStatus.request>) {
    try {
        const client = Client.get();
        const res: CheckRoomEntrancePIResponse.AsObject = yield call([api, 'checkRoomEntrancePI'], {
            client,
            params: action.payload,
        });

        yield put(actions.getRoomPIStatus.success(res));
    } catch (error) {
        yield put(actions.getRoomPIStatus.failure());
    }
}

/**
 * Poll the room access check, waiting for a success.
 * If the check fails too many times, an error is displayed to the user
 *
 * @param action actions.pollRoomAccessCheck.request
 */
function* handlePollRoomAccessCheck(action: ReturnType<typeof actions.pollRoomAccessCheck.request>) {
    try {
        const MAX_RETRIES = 8;
        let retries = 0;
        let hasReachedMaxRetries = false;

        // Start polling
        while (!hasReachedMaxRetries) {
            console.log('polling...');
            // Check access
            const ok: boolean = yield hasAccessToRoom(action.payload.roomId);
            if (ok) {
                yield put(actions.setRoomView(RoomView.SHOW_CHAT));
                break;
            }

            // Wait a second, then restart the polling process
            retries++;
            hasReachedMaxRetries = retries === MAX_RETRIES;
            yield delay(1000);
        }

        if (hasReachedMaxRetries) {
            throw new Error('max retries reached');
        }
    } catch (error) {
        yield addToast({
            type: 'error',
            label: 'Something went wrong while subscribing. Please reload the window. If the error persists please contact support',
        });
        console.log(error);
    }
}

/**
 * Calls an API to fetch the room autorization for the user.
 *
 * @param roomId Id of the room to request access to
 */
function* hasAccessToRoom(roomId: string) {
    yield put(actions.getRoomAccess.request({ roomId }));
    const { success }: { success: ReturnType<typeof actions.getRoomAccess.success> } = yield race({
        success: take(actions.getRoomAccess.success),
        failure: take(actions.getRoomAccess.failure),
    });

    return success && success.payload.authorization === RoomAuthorization.Enum.AUTHORIZED;
}

/**
 * Starts the room authorization flow. Fetching the neccessary data
 * via API, asking for the room access, and setting the appropriate view
 *
 * @param action actions.startRoomAuthFlow.request
 */
function* handleStartRoomAuthFlow(action: ReturnType<typeof actions.startRoomAuthFlow.request>) {
    try {
        const { roomId } = action.payload;
        yield put(actions.setRoomView(RoomView.LOADING));

        // Check access
        yield put(actions.getRoomAccess.request({ roomId }));
        const { success }: { success: ReturnType<typeof actions.getRoomAccess.success> } = yield race({
            success: take(actions.getRoomAccess.success),
            failure: take(actions.getRoomAccess.failure),
        });
        if (!success) {
            throw new Error('failure getting room access');
        }
        const auth = success.payload.authorization;

        // Based on the room access, set the appropriate view
        yield roomAccessViewHandler(auth);
    } catch (error) {
        console.error(error);
        yield history.push('/');
    }
}

/**
 * Handles the room authorization side effects.
 *
 * @param roomAccess Room Authorization
 */
function* roomAccessViewHandler(roomAccess: RoomAuthorization.Enum) {
    switch (roomAccess) {
        case RoomAuthorization.Enum.AUTHORIZED:
            yield put(actions.setRoomView(RoomView.SHOW_CHAT));
            break;
        case RoomAuthorization.Enum.NEED_TO_PAY:
            yield put(actions.setRoomView(RoomView.SHOW_PAYMENT_MODAL));
            break;
        case RoomAuthorization.Enum.NEED_TO_SUBSCRIBE:
            yield put(actions.setRoomView(RoomView.SHOW_SUBSCRIPTION_MODAL));
            break;
        case RoomAuthorization.Enum.UNJOINABLE:
            yield put(actions.setRoomView(RoomView.SHOW_UNJOINABLE_ROOM_MODAL));
            break;
        default:
            break;
    }
}

export default function* saga() {
    yield takeLeading(actions.getRoomAccess.request, handleGetRoomAccess);
    yield takeLeading(actions.getRoomPIStatus.request, handleGetRoomPIStatus);
    yield takeLeading(actions.pollRoomAccessCheck.request, handlePollRoomAccessCheck);
    yield takeLeading(actions.startRoomAuthFlow.request, handleStartRoomAuthFlow);
}
