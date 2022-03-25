import {
    ChatMessage,
    CreateConversationRequest,
    GetConversationRequest,
    GetConversationsRequest,
    GetConversationWithParticipantsRequest,
    GetMessagesRequest,
    ListenForMessagesRequest,
    SendAudioRequest,
    SendAwardRequest,
    SendDonationRequest,
    SendMessageRequest,
} from 'api/proto/v1/chat_pb';
import { RPCRequest } from 'common/types';
import { ClientReadableStream } from 'grpc-web';

/**
 * Sends a message to backend redis db,
 * which stores and publish it to the passed channel
 *
 * @param r RPC Request
 * @returns Nothing
 */
export async function sendMessage(r: RPCRequest<SendMessageRequest.AsObject>) {
    const req = new SendMessageRequest();
    req.setChannel(r.params.channel);
    req.setContent(r.params.content);
    req.setUsername(r.params.username);

    return await r.client.sendMessage(req, null);
}

/**
 * Sends an award to the specified channel
 *
 * @param r RPC Request
 * @returns Empty
 */
export async function sendAward(r: RPCRequest<SendAwardRequest.AsObject>) {
    const req = new SendAwardRequest();
    req.setAwardId(r.params.awardId);
    req.setChannel(r.params.channel);
    req.setUsername(r.params.username);

    const res = await r.client.sendAward(req, null);
    return res.toObject();
}

/**
 * Sends a donation message to the specified channel
 *
 * @param r RPC Request
 * @returns Empty
 */
export async function sendDonation(r: RPCRequest<SendDonationRequest.AsObject>) {
    const req = new SendDonationRequest();
    req.setChannel(r.params.channel);
    req.setUsername(r.params.username);
    req.setAmount(r.params.amount);

    const res = await r.client.sendDonation(req, null);
    return res.toObject();
}

/**
 * Sends an audio message to the specified channel
 *
 * @param r RPC Request
 * @returns Empty
 */
export async function sendAudio(r: RPCRequest<SendAudioRequest.AsObject>) {
    const req = new SendAudioRequest();
    req.setAudio(r.params.audio);
    req.setChannel(r.params.channel);
    req.setUsername(r.params.username);

    const res = await r.client.sendAudio(req, null);
    return res.toObject();
}

/**
 * Creates a new conversation between the requesting user and the
 * target participant by username
 *
 * @param r RPC Request
 * @returns Newly created conversation
 */
export async function createConversation(r: RPCRequest<CreateConversationRequest.AsObject>) {
    const req = new CreateConversationRequest();
    req.setParticipantUsername(r.params.participantUsername);

    const res = await r.client.createConversation(req, null);
    return res.toObject();
}

/**
 * Retrieves a conversation by its id
 *
 * @param r RPC Request
 * @returns Conversation
 */
export async function getConversation(r: RPCRequest<GetConversationRequest.AsObject>) {
    const req = new GetConversationRequest();
    req.setConversationId(r.params.conversationId);

    const res = await r.client.getConversation(req, null);
    return res.toObject();
}

/**
 * Retrieves the user's conversations
 *
 * @param r RPC Request
 * @returns ConversationsList
 */
export async function getConversations(r: RPCRequest<GetConversationsRequest.AsObject>) {
    const req = new GetConversationsRequest();

    const res = await r.client.getConversations(req, null);
    return res.toObject();
}

/**
 * Retrieves the conversation previous messages
 *
 * @param r Empty
 * @returns Conversation messages list
 */
export async function getMessages(r: RPCRequest<GetMessagesRequest.AsObject>) {
    const req = new GetMessagesRequest();
    req.setChannel(r.params.channel);
    req.setOffset(r.params.offset);

    const res = await r.client.getMessages(req, null);
    return res.toObject();
}

/**
 * Calls a GRPC stream listening for incoming messages
 *
 * @param r Empty
 * @returns Stream of messages
 */
export async function listenForMessages(
    r: RPCRequest<ListenForMessagesRequest.AsObject>,
): Promise<ClientReadableStream<ChatMessage.AsObject>> {
    const req = new ListenForMessagesRequest();
    req.setChannel(r.params.channel);

    const deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 10); // TODO: Change timeout
    return r.client.listenForMessages(req, { deadline: String(deadline.getTime()) }) as ClientReadableStream<ChatMessage.AsObject>;
}

/**
 * Retrieves a conversation between the user and the specified
 * participant user ids
 *
 * @param r List of participant user ids
 * @returns Conversation
 */
export async function getConversationWithParticipants(r: RPCRequest<GetConversationWithParticipantsRequest.AsObject>) {
    const req = new GetConversationWithParticipantsRequest();
    req.setUserIdsList(r.params.userIdsList);

    const res = await r.client.getConversationWithParticipants(req, null);
    return res.toObject();
}
