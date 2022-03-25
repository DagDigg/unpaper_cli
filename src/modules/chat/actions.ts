import {
    ChatMessage,
    Conversation,
    GetConversationRequest,
    GetConversationsRequest,
    ListenForMessagesRequest,
    SendAudioRequest,
    SendAwardRequest,
    SendDonationRequest,
    SendMessageRequest,
} from 'api/proto/v1/chat_pb';
import { createAction, createAsyncAction } from 'typesafe-actions';
import { ChatStatus } from './types';

export const addMessage = createAction('@chat/ADD_MESSAGE')<{ conversationId: string; msg: ChatMessage.AsObject }>();
export const setChatStatus = createAction('@chat/SET_CHAT_STATUS')<ChatStatus>();

export const sendMessage = createAsyncAction('@chat/SEND_MESSAGE_REQUEST', '@chat/SEND_MESSAGE_SUCCESS', '@chat/SEND_MESSAGE_FAILURE')<
    SendMessageRequest.AsObject,
    undefined,
    undefined
>();

export const sendAward = createAsyncAction('@chat/SEND_AWARD_REQUEST', '@chat/SEND_AWARD_SUCCESS', '@chat/SEND_AWARD_FAILURE')<
    SendAwardRequest.AsObject,
    undefined,
    undefined
>();

export const sendDonation = createAsyncAction('@chat/SEND_DONATION_REQUEST', '@chat/SEND_DONATION_SUCCESS', '@chat/SEND_DONATION_FAILURE')<
    SendDonationRequest.AsObject,
    undefined,
    undefined
>();

export const sendAudio = createAsyncAction('@chat/SEND_AUDIO_REQUEST', '@chat/SEND_AUDIO_SUCCESS', '@chat/SEND_AUDIO_FAILURE')<
    SendAudioRequest.AsObject,
    undefined,
    undefined
>();

export const createConversation = createAsyncAction(
    '@chat/CREATE_CONVERSATION_REQUEST',
    '@chat/CREATE_CONVERSATION_SUCCESS',
    '@chat/CREATE_CONVERSATION_FAILURE',
)<{ userId: string; username: string }, Conversation.AsObject, undefined>();

export const getConversation = createAsyncAction(
    '@chat/GET_CONVERSATION_REQUEST',
    '@chat/GET_CONVERSATION_SUCCESS',
    '@chat/GET_CONVERSATION_FAILURE',
)<GetConversationRequest.AsObject, Conversation.AsObject, undefined>();

export const getConversations = createAsyncAction(
    '@chat/GET_CONVERSATIONS_REQUEST',
    '@chat/GET_CONVERSATIONS_SUCCESS',
    '@chat/GET_CONVERSATIONS_FAILURE',
)<GetConversationsRequest.AsObject, Conversation.AsObject[], undefined>();

export const getMessages = createAsyncAction('@chat/GET_MESSAGES_REQUEST', '@chat/GET_MESSAGES_SUCCESS', '@chat/GET_MESSAGES_FAILURE')<
    { channel: string },
    { conversationId: string; msgs: ChatMessage.AsObject[]; hasMore: boolean },
    undefined
>();

export const listenForMessages = createAsyncAction(
    '@chat/LISTEN_FOR_MESSAGES_REQUEST',
    '@chat/LISTEN_FOR_MESSAGES_SUCCESS',
    '@chat/LISTEN_FOR_MESSAGES_FAILURE',
)<ListenForMessagesRequest.AsObject, undefined, undefined>();
