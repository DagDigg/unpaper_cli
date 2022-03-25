import { END, eventChannel } from '@redux-saga/core';
import { call, put, take, takeLeading } from '@redux-saga/core/effects';
import * as pb from 'api/proto/v1/notifications_pb';
import { ClientReadableStream } from 'grpc-web';
import Client from 'services/client';
import { addToast } from 'services/toasts';
import * as actions from './actions';
import * as api from './api';

function* handleListenForNotifications(_: ReturnType<typeof actions.listenForNotifications>) {
    try {
        const client = Client.get();
        const notificationsStream: ClientReadableStream<pb.Notification> = yield call([api, 'listenForNotifications'], {
            client,
            params: undefined,
        });
        const notificationsChannel = getNotificationsChannel(notificationsStream);
        while (true) {
            const n: pb.Notification.AsObject = yield take(notificationsChannel);
            yield put(actions.addNotification(n));
            addToast({ type: 'notification', notification: n, label: '' });
        }
    } catch (error) {
        console.error(error);
    }
}

function getNotificationsChannel(stream: ClientReadableStream<pb.Notification>) {
    return eventChannel((emitter) => {
        stream.on('data', function (n) {
            emitter(n.toObject());
        });

        stream.on('error', function (err) {
            emitter(END);
        });

        return () => emitter(END);
    });
}

function* handleGetAllNotifications() {
    try {
        const client = Client.get();
        const ns: pb.GetAllNotificationsRes.AsObject = yield call(api.getAllNotifications, { client, params: undefined });
        yield put(actions.getAllNotifications.success(ns));
    } catch (error) {
        yield put(actions.getAllNotifications.failure('failed to retrieve notifications'));
    }
}

function* handleReadNotification(action: ReturnType<typeof actions.readNotification.request>) {
    try {
        const client = Client.get();
        const res: pb.ReadNotificationResponse.AsObject = yield call(api.readNotification, { client, params: action.payload });
        yield put(actions.readNotification.success(res));
    } catch (error) {
        yield put(actions.readNotification.failure());
    }
}

export default function* root() {
    yield takeLeading(actions.listenForNotifications, handleListenForNotifications);
    yield takeLeading(actions.getAllNotifications.request, handleGetAllNotifications);
    yield takeLeading(actions.readNotification.request, handleReadNotification);
}
