import { END, eventChannel, TakeableChannel } from '@redux-saga/core';
import {
    ChatMessage,
    GetConversationResponse,
    GetConversationsResponse,
    GetConversationWithParticipantsResponse,
    GetMessagesResponse,
} from 'api/proto/v1/chat_pb';
import { history } from 'common/history';
import { ClientReadableStream } from 'grpc-web';
import { actionChannel, call, fork, put, select, take, takeLeading } from 'redux-saga/effects';
import Client from 'services/client';
import { addToast } from 'services/toasts';
import { getType } from 'typesafe-actions';
import * as actions from './actions';
import * as api from './api';
import * as selectors from './selectors';
import { ChatStatus, ConversationMessages } from './types';

function* handleListenForMessages(channel: string): any {
    let err: string | undefined = undefined;
    try {
        const client = Client.get();
        const messagesStream: ClientReadableStream<ChatMessage> = yield call(api.listenForMessages, {
            client,
            params: { channel },
        });
        const messagesChannel = getMessagesChannel(messagesStream);
        while (true) {
            const m: ChatMessage.AsObject = yield take(messagesChannel);
            yield put(actions.addMessage({ conversationId: channel, msg: m }));
        }
    } catch (error) {
        err = 'an error occurred';
        console.error(error);
    } finally {
        if (!err) {
            // Deadline reached
            const isChatView = new RegExp(`/conversations/${channel}`).test(window.location.pathname);
            if (isChatView) {
                // Recursive call
                yield call(handleListenForMessages, channel);
            }
        }
    }
}

function* watchListenForMessages() {
    try {
        const chan: TakeableChannel<{}> = yield actionChannel(getType(actions.listenForMessages.request));
        while (true) {
            const action: ReturnType<typeof actions.listenForMessages.request> = yield take(chan);
            yield call(handleListenForMessages, action.payload.channel);
        }
    } catch (error) {
        console.log(error);
    }
}

function* handleGetMessages(action: ReturnType<typeof actions.getMessages.request>) {
    try {
        const client = Client.get();
        const messages: ConversationMessages = yield select(selectors.selectConversationMessages(action.payload.channel));
        yield put(actions.setChatStatus(getChatStatusOnGetMessagesReq(messages.messagesList)));

        const res: GetMessagesResponse.AsObject = yield call(api.getMessages, {
            client,
            params: {
                channel: action.payload.channel,
                offset: messages.messagesList.length,
            },
        });
        yield put(actions.getMessages.success({ conversationId: action.payload.channel, msgs: res.messagesList, hasMore: res.hasMore }));
    } catch (error) {
        console.log(error);
        yield put(actions.getMessages.failure());
    }
}

function getChatStatusOnGetMessagesReq(currentMessages: ChatMessage.AsObject[]): ChatStatus {
    switch (currentMessages.length) {
        case 0:
            // First time loading
            return 'LOADING';
        default:
            // Loading previous messages
            return 'LOADING_PREVIOUS';
    }
}
function getMessagesChannel(stream: ClientReadableStream<ChatMessage>) {
    return eventChannel((emitter) => {
        stream.on('data', function (m) {
            emitter(m.toObject());
        });
        stream.on('error', function (err) {
            emitter(END);
            console.log(err);
            stream.cancel();
        });
        stream.on('end', function () {
            emitter(END);
            console.log('ended');
        });
        stream.on('status', function (status) {
            console.log(status);
        });
        return () => {
            console.log('return');
            stream.cancel();
            emitter(END);
        };
    });
}

function* handleSendMessage(action: ReturnType<typeof actions.sendMessage.request>) {
    try {
        const client = Client.get();
        yield call([api, 'sendMessage'], { client, params: action.payload });

        yield put(actions.sendMessage.success());
    } catch (error) {
        addToast({ type: 'error', label: 'Whoops, something went wrong. Please try again later' });
        yield put(actions.sendMessage.failure());
    }
}

function* handleSendAward(action: ReturnType<typeof actions.sendAward.request>) {
    try {
        const client = Client.get();

        yield call([api, 'sendAward'], { client, params: action.payload });

        yield put(actions.sendAward.success());
    } catch (error) {
        console.error(error);
        addToast({ type: 'error', label: 'Whoops, something went wrong. Please try again later' });
        yield put(actions.sendAward.failure());
    }
}

function* handleSendDonation(action: ReturnType<typeof actions.sendDonation.request>) {
    try {
        const client = Client.get();
        yield call([api, 'sendDonation'], { client, params: action.payload });

        yield put(actions.sendDonation.success());
    } catch (error) {
        console.error(error);
        addToast({ type: 'error', label: 'Whoops, something went wrong. Please try again later' });
        yield put(actions.sendDonation.failure());
    }
}

function* handleSendAudio(action: ReturnType<typeof actions.sendAudio.request>) {
    try {
        const client = Client.get();
        yield call([api, 'sendAudio'], { client, params: action.payload });

        yield put(actions.sendAudio.success());
    } catch (error) {
        yield put(actions.sendAudio.failure());
    }
}

function* handleCreateConversation(action: ReturnType<typeof actions.createConversation.request>) {
    try {
        const client = Client.get();
        const prevConvRes: GetConversationWithParticipantsResponse.AsObject = yield call(api.getConversationWithParticipants, {
            client,
            params: { userIdsList: [action.payload.userId] },
        });
        if (prevConvRes.found) {
            // A conversation already exists
            yield history.push(`/conversations/${prevConvRes.conversation?.id}`);
            return;
        }

        // Conversation does not exist. Create one
        const res: GetConversationResponse.AsObject = yield call(api.createConversation, {
            client,
            params: { participantUsername: action.payload.username },
        });
        if (!res.conversation) throw new Error('missing conversation in response');

        yield put(actions.createConversation.success(res.conversation));
        yield history.push(`/conversations/${res.conversation?.id}`);
    } catch (error) {
        yield put(actions.createConversation.failure());
    }
}

function* handleGetConversation(action: ReturnType<typeof actions.getConversation.request>) {
    try {
        const client = Client.get();
        const res: GetConversationResponse.AsObject = yield call(api.getConversation, { client, params: action.payload });
        if (!res.conversation) throw new Error('missing conversation in response');

        yield put(actions.getConversation.success(res.conversation));
    } catch (error) {
        console.log(error);
        yield put(actions.getConversation.failure());
    }
}

function* handleGetConversations(action: ReturnType<typeof actions.getConversations.request>) {
    try {
        const client = Client.get();
        const res: GetConversationsResponse.AsObject = yield call(api.getConversations, { client, params: action.payload });

        yield put(actions.getConversations.success(res.conversationsList));
    } catch (error) {
        yield put(actions.getConversations.failure());
    }
}

export default function* saga() {
    yield takeLeading(actions.sendMessage.request, handleSendMessage);
    yield takeLeading(actions.sendAward.request, handleSendAward);
    yield takeLeading(actions.sendDonation.request, handleSendDonation);
    yield takeLeading(actions.sendAudio.request, handleSendAudio);
    yield takeLeading(actions.createConversation.request, handleCreateConversation);
    yield takeLeading(actions.getConversation.request, handleGetConversation);
    yield takeLeading(actions.getConversations.request, handleGetConversations);
    yield takeLeading(actions.getMessages.request, handleGetMessages);
    yield fork(watchListenForMessages);
}
