import { ChatModuleState, ConversationsMap } from './types';

export function selectModuleStatus(state: ChatModuleState) {
    return state.chat.status;
}

export function selectConversationById(id: string) {
    return function (state: ChatModuleState) {
        return state.chat.conversations.get(id);
    };
}

export function selectConversations(state: ChatModuleState) {
    return mapToArr(state.chat.conversations);
}

export function selectConversationMessages(conversationId: string) {
    return function (state: ChatModuleState) {
        return state.chat.messages[conversationId] ?? { hasMore: false, messagesList: [] };
    };
}

function mapToArr(conversations: ConversationsMap) {
    const res = [];
    for (let r of conversations.values()) {
        res.push(r);
    }
    return res;
}
