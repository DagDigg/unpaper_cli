import { Conversation } from 'api/proto/v1/chat_pb';
import { ActionType, getType } from 'typesafe-actions';
import * as actions from './actions';
import { ChatState, ConversationsMap, MessagesList } from './types';

const initialState: ChatState = { status: 'LOADING', conversations: new Map(), messages: {} };

export default function reducer(state: ChatState = initialState, action: ActionType<typeof actions>): ChatState {
    switch (action.type) {
        case getType(actions.addMessage):
            return {
                ...state,
                messages: addMessageToConversation(state.messages, action),
            };
        case getType(actions.setChatStatus):
            return {
                ...state,
                status: action.payload,
            };
        case getType(actions.getMessages.success):
            return {
                ...state,
                status: 'READY',
                messages: unshiftConversationMessages(state.messages, action),
            };
        case getType(actions.getConversation.success):
        case getType(actions.createConversation.success):
            return { ...state, conversations: addConversation(state.conversations, action.payload) };
        case getType(actions.getConversations.success):
            return { ...state, conversations: addConversations(state.conversations, action.payload) };
        default:
            return state;
    }
}

function addMessageToConversation(stateMsgs: MessagesList, action: ReturnType<typeof actions.addMessage>) {
    const { conversationId, msg } = action.payload;
    const prevMessages = stateMsgs[conversationId].messagesList ?? [];

    return { ...stateMsgs, [conversationId]: { ...stateMsgs[conversationId], messagesList: [...prevMessages, msg] } };
}

function unshiftConversationMessages(stateMsgs: MessagesList, action: ReturnType<typeof actions.getMessages.success>): MessagesList {
    const { conversationId, msgs, hasMore } = action.payload;
    if (msgs.length === 0) return stateMsgs;
    const prevConversationMessages = stateMsgs[conversationId]?.messagesList || [];

    return { ...stateMsgs, [conversationId]: { hasMore, messagesList: [...msgs, ...prevConversationMessages] } };
}

function addConversation(conversations: ConversationsMap, conversation: Conversation.AsObject): ConversationsMap {
    conversations.set(conversation.id, conversation);
    return conversations;
}

function addConversations(conversations: ConversationsMap, conversationsList: Conversation.AsObject[]): ConversationsMap {
    for (let conversation of conversationsList) {
        conversations.set(conversation.id, conversation);
    }
    return conversations;
}
