import { ChatMessage, Conversation } from 'api/proto/v1/chat_pb';

export type ChatModuleState = {
    chat: ChatState;
};

export type ChatState = {
    status: ChatStatus;
    messages: MessagesList;
    conversations: ConversationsMap;
};

export type ConversationsMap = Map<string, Conversation.AsObject>;
export type MessagesList = Record<string, ConversationMessages>;
export type ConversationMessages = { hasMore: boolean; messagesList: ChatMessage.AsObject[] };

export type ChatStatus = 'IDLE' | 'LOADING' | 'READY' | 'ERROR' | 'LOADING_PREVIOUS';
