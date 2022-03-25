import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class ChatMessage extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): ChatMessage;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ChatMessage;
  hasCreatedAt(): boolean;
  clearCreatedAt(): ChatMessage;

  getType(): MessageType.Enum;
  setType(value: MessageType.Enum): ChatMessage;

  getUsername(): string;
  setUsername(value: string): ChatMessage;

  getText(): MessageText | undefined;
  setText(value?: MessageText): ChatMessage;
  hasText(): boolean;
  clearText(): ChatMessage;

  getAward(): MessageAward | undefined;
  setAward(value?: MessageAward): ChatMessage;
  hasAward(): boolean;
  clearAward(): ChatMessage;

  getDonation(): MessageDonation | undefined;
  setDonation(value?: MessageDonation): ChatMessage;
  hasDonation(): boolean;
  clearDonation(): ChatMessage;

  getAudio(): MessageAudio | undefined;
  setAudio(value?: MessageAudio): ChatMessage;
  hasAudio(): boolean;
  clearAudio(): ChatMessage;

  getId(): string;
  setId(value: string): ChatMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ChatMessage): ChatMessage.AsObject;
  static serializeBinaryToWriter(message: ChatMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatMessage;
  static deserializeBinaryFromReader(message: ChatMessage, reader: jspb.BinaryReader): ChatMessage;
}

export namespace ChatMessage {
  export type AsObject = {
    userId: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    type: MessageType.Enum,
    username: string,
    text?: MessageText.AsObject,
    award?: MessageAward.AsObject,
    donation?: MessageDonation.AsObject,
    audio?: MessageAudio.AsObject,
    id: string,
  }
}

export class MessageType extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageType.AsObject;
  static toObject(includeInstance: boolean, msg: MessageType): MessageType.AsObject;
  static serializeBinaryToWriter(message: MessageType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageType;
  static deserializeBinaryFromReader(message: MessageType, reader: jspb.BinaryReader): MessageType;
}

export namespace MessageType {
  export type AsObject = {
  }

  export enum Enum { 
    TEXT = 0,
    AWARD = 1,
    DONATION = 2,
    AUDIO = 3,
  }
}

export class MessageText extends jspb.Message {
  getContent(): string;
  setContent(value: string): MessageText;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageText.AsObject;
  static toObject(includeInstance: boolean, msg: MessageText): MessageText.AsObject;
  static serializeBinaryToWriter(message: MessageText, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageText;
  static deserializeBinaryFromReader(message: MessageText, reader: jspb.BinaryReader): MessageText;
}

export namespace MessageText {
  export type AsObject = {
    content: string,
  }
}

export class MessageAward extends jspb.Message {
  getAwardId(): string;
  setAwardId(value: string): MessageAward;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageAward.AsObject;
  static toObject(includeInstance: boolean, msg: MessageAward): MessageAward.AsObject;
  static serializeBinaryToWriter(message: MessageAward, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageAward;
  static deserializeBinaryFromReader(message: MessageAward, reader: jspb.BinaryReader): MessageAward;
}

export namespace MessageAward {
  export type AsObject = {
    awardId: string,
  }
}

export class MessageDonation extends jspb.Message {
  getAmount(): number;
  setAmount(value: number): MessageDonation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageDonation.AsObject;
  static toObject(includeInstance: boolean, msg: MessageDonation): MessageDonation.AsObject;
  static serializeBinaryToWriter(message: MessageDonation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageDonation;
  static deserializeBinaryFromReader(message: MessageDonation, reader: jspb.BinaryReader): MessageDonation;
}

export namespace MessageDonation {
  export type AsObject = {
    amount: number,
  }
}

export class MessageAudio extends jspb.Message {
  getBytes(): Uint8Array | string;
  getBytes_asU8(): Uint8Array;
  getBytes_asB64(): string;
  setBytes(value: Uint8Array | string): MessageAudio;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageAudio.AsObject;
  static toObject(includeInstance: boolean, msg: MessageAudio): MessageAudio.AsObject;
  static serializeBinaryToWriter(message: MessageAudio, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageAudio;
  static deserializeBinaryFromReader(message: MessageAudio, reader: jspb.BinaryReader): MessageAudio;
}

export namespace MessageAudio {
  export type AsObject = {
    bytes: Uint8Array | string,
  }
}

export class ListenForMessagesRequest extends jspb.Message {
  getChannel(): string;
  setChannel(value: string): ListenForMessagesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListenForMessagesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListenForMessagesRequest): ListenForMessagesRequest.AsObject;
  static serializeBinaryToWriter(message: ListenForMessagesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListenForMessagesRequest;
  static deserializeBinaryFromReader(message: ListenForMessagesRequest, reader: jspb.BinaryReader): ListenForMessagesRequest;
}

export namespace ListenForMessagesRequest {
  export type AsObject = {
    channel: string,
  }
}

export class GetMessagesRequest extends jspb.Message {
  getChannel(): string;
  setChannel(value: string): GetMessagesRequest;

  getOffset(): number;
  setOffset(value: number): GetMessagesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMessagesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMessagesRequest): GetMessagesRequest.AsObject;
  static serializeBinaryToWriter(message: GetMessagesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMessagesRequest;
  static deserializeBinaryFromReader(message: GetMessagesRequest, reader: jspb.BinaryReader): GetMessagesRequest;
}

export namespace GetMessagesRequest {
  export type AsObject = {
    channel: string,
    offset: number,
  }
}

export class GetMessagesResponse extends jspb.Message {
  getMessagesList(): Array<ChatMessage>;
  setMessagesList(value: Array<ChatMessage>): GetMessagesResponse;
  clearMessagesList(): GetMessagesResponse;
  addMessages(value?: ChatMessage, index?: number): ChatMessage;

  getHasMore(): boolean;
  setHasMore(value: boolean): GetMessagesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMessagesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMessagesResponse): GetMessagesResponse.AsObject;
  static serializeBinaryToWriter(message: GetMessagesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMessagesResponse;
  static deserializeBinaryFromReader(message: GetMessagesResponse, reader: jspb.BinaryReader): GetMessagesResponse;
}

export namespace GetMessagesResponse {
  export type AsObject = {
    messagesList: Array<ChatMessage.AsObject>,
    hasMore: boolean,
  }
}

export class SendMessageRequest extends jspb.Message {
  getChannel(): string;
  setChannel(value: string): SendMessageRequest;

  getContent(): string;
  setContent(value: string): SendMessageRequest;

  getUsername(): string;
  setUsername(value: string): SendMessageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendMessageRequest): SendMessageRequest.AsObject;
  static serializeBinaryToWriter(message: SendMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendMessageRequest;
  static deserializeBinaryFromReader(message: SendMessageRequest, reader: jspb.BinaryReader): SendMessageRequest;
}

export namespace SendMessageRequest {
  export type AsObject = {
    channel: string,
    content: string,
    username: string,
  }
}

export class SendAwardRequest extends jspb.Message {
  getChannel(): string;
  setChannel(value: string): SendAwardRequest;

  getAwardId(): string;
  setAwardId(value: string): SendAwardRequest;

  getUsername(): string;
  setUsername(value: string): SendAwardRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendAwardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendAwardRequest): SendAwardRequest.AsObject;
  static serializeBinaryToWriter(message: SendAwardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendAwardRequest;
  static deserializeBinaryFromReader(message: SendAwardRequest, reader: jspb.BinaryReader): SendAwardRequest;
}

export namespace SendAwardRequest {
  export type AsObject = {
    channel: string,
    awardId: string,
    username: string,
  }
}

export class SendDonationRequest extends jspb.Message {
  getChannel(): string;
  setChannel(value: string): SendDonationRequest;

  getAmount(): number;
  setAmount(value: number): SendDonationRequest;

  getUsername(): string;
  setUsername(value: string): SendDonationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendDonationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendDonationRequest): SendDonationRequest.AsObject;
  static serializeBinaryToWriter(message: SendDonationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendDonationRequest;
  static deserializeBinaryFromReader(message: SendDonationRequest, reader: jspb.BinaryReader): SendDonationRequest;
}

export namespace SendDonationRequest {
  export type AsObject = {
    channel: string,
    amount: number,
    username: string,
  }
}

export class SendAudioRequest extends jspb.Message {
  getChannel(): string;
  setChannel(value: string): SendAudioRequest;

  getAudio(): Uint8Array | string;
  getAudio_asU8(): Uint8Array;
  getAudio_asB64(): string;
  setAudio(value: Uint8Array | string): SendAudioRequest;

  getUsername(): string;
  setUsername(value: string): SendAudioRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendAudioRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendAudioRequest): SendAudioRequest.AsObject;
  static serializeBinaryToWriter(message: SendAudioRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendAudioRequest;
  static deserializeBinaryFromReader(message: SendAudioRequest, reader: jspb.BinaryReader): SendAudioRequest;
}

export namespace SendAudioRequest {
  export type AsObject = {
    channel: string,
    audio: Uint8Array | string,
    username: string,
  }
}

export class CreateRoomRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateRoomRequest;

  getDescription(): string;
  setDescription(value: string): CreateRoomRequest;

  getVisibility(): Visibility.Enum;
  setVisibility(value: Visibility.Enum): CreateRoomRequest;

  getAllowedListIdsList(): Array<string>;
  setAllowedListIdsList(value: Array<string>): CreateRoomRequest;
  clearAllowedListIdsList(): CreateRoomRequest;
  addAllowedListIds(value: string, index?: number): CreateRoomRequest;

  getPrice(): number;
  setPrice(value: number): CreateRoomRequest;

  getRoomType(): RoomType.Enum;
  setRoomType(value: RoomType.Enum): CreateRoomRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRoomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRoomRequest): CreateRoomRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRoomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRoomRequest;
  static deserializeBinaryFromReader(message: CreateRoomRequest, reader: jspb.BinaryReader): CreateRoomRequest;
}

export namespace CreateRoomRequest {
  export type AsObject = {
    name: string,
    description: string,
    visibility: Visibility.Enum,
    allowedListIdsList: Array<string>,
    price: number,
    roomType: RoomType.Enum,
  }
}

export class RoomType extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomType.AsObject;
  static toObject(includeInstance: boolean, msg: RoomType): RoomType.AsObject;
  static serializeBinaryToWriter(message: RoomType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomType;
  static deserializeBinaryFromReader(message: RoomType, reader: jspb.BinaryReader): RoomType;
}

export namespace RoomType {
  export type AsObject = {
  }

  export enum Enum { 
    FREE = 0,
    PAID = 1,
    SUBSCRIPTION_MONTHLY = 2,
  }
}

export class Visibility extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Visibility.AsObject;
  static toObject(includeInstance: boolean, msg: Visibility): Visibility.AsObject;
  static serializeBinaryToWriter(message: Visibility, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Visibility;
  static deserializeBinaryFromReader(message: Visibility, reader: jspb.BinaryReader): Visibility;
}

export namespace Visibility {
  export type AsObject = {
  }

  export enum Enum { 
    PUBLIC = 0,
    PRIVATE = 1,
  }
}

export class Room extends jspb.Message {
  getName(): string;
  setName(value: string): Room;

  getDescription(): string;
  setDescription(value: string): Room;

  getId(): string;
  setId(value: string): Room;

  getOwner(): string;
  setOwner(value: string): Room;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Room;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Room;

  getRank(): number;
  setRank(value: number): Room;

  getAllowedListIdsList(): Array<string>;
  setAllowedListIdsList(value: Array<string>): Room;
  clearAllowedListIdsList(): Room;
  addAllowedListIds(value: string, index?: number): Room;

  getVisibility(): Visibility.Enum;
  setVisibility(value: Visibility.Enum): Room;

  getPrice(): number;
  setPrice(value: number): Room;

  getActiveUsers(): number;
  setActiveUsers(value: number): Room;

  getRoomType(): RoomType.Enum;
  setRoomType(value: RoomType.Enum): Room;

  getProductId(): string;
  setProductId(value: string): Room;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Room.AsObject;
  static toObject(includeInstance: boolean, msg: Room): Room.AsObject;
  static serializeBinaryToWriter(message: Room, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Room;
  static deserializeBinaryFromReader(message: Room, reader: jspb.BinaryReader): Room;
}

export namespace Room {
  export type AsObject = {
    name: string,
    description: string,
    id: string,
    owner: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    rank: number,
    allowedListIdsList: Array<string>,
    visibility: Visibility.Enum,
    price: number,
    activeUsers: number,
    roomType: RoomType.Enum,
    productId: string,
  }
}

export class List extends jspb.Message {
  getId(): string;
  setId(value: string): List;

  getName(): string;
  setName(value: string): List;

  getOwnerUserId(): string;
  setOwnerUserId(value: string): List;

  getAllowedUsersMap(): jspb.Map<string, string>;
  clearAllowedUsersMap(): List;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): List.AsObject;
  static toObject(includeInstance: boolean, msg: List): List.AsObject;
  static serializeBinaryToWriter(message: List, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): List;
  static deserializeBinaryFromReader(message: List, reader: jspb.BinaryReader): List;
}

export namespace List {
  export type AsObject = {
    id: string,
    name: string,
    ownerUserId: string,
    allowedUsersMap: Array<[string, string]>,
  }
}

export class CreateListRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateListRequest;

  getAllowedUsersMap(): jspb.Map<string, string>;
  clearAllowedUsersMap(): CreateListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateListRequest): CreateListRequest.AsObject;
  static serializeBinaryToWriter(message: CreateListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateListRequest;
  static deserializeBinaryFromReader(message: CreateListRequest, reader: jspb.BinaryReader): CreateListRequest;
}

export namespace CreateListRequest {
  export type AsObject = {
    name: string,
    allowedUsersMap: Array<[string, string]>,
  }
}

export class UpdateListRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateListRequest;

  getName(): string;
  setName(value: string): UpdateListRequest;

  getAllowedUsersMap(): jspb.Map<string, string>;
  clearAllowedUsersMap(): UpdateListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateListRequest): UpdateListRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateListRequest;
  static deserializeBinaryFromReader(message: UpdateListRequest, reader: jspb.BinaryReader): UpdateListRequest;
}

export namespace UpdateListRequest {
  export type AsObject = {
    id: string,
    name: string,
    allowedUsersMap: Array<[string, string]>,
  }
}

export class GetUserSuggestionsRequest extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): GetUserSuggestionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserSuggestionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserSuggestionsRequest): GetUserSuggestionsRequest.AsObject;
  static serializeBinaryToWriter(message: GetUserSuggestionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserSuggestionsRequest;
  static deserializeBinaryFromReader(message: GetUserSuggestionsRequest, reader: jspb.BinaryReader): GetUserSuggestionsRequest;
}

export namespace GetUserSuggestionsRequest {
  export type AsObject = {
    query: string,
  }
}

export class GetUserSuggestionsResponse extends jspb.Message {
  getUsersList(): Array<UserSuggestion>;
  setUsersList(value: Array<UserSuggestion>): GetUserSuggestionsResponse;
  clearUsersList(): GetUserSuggestionsResponse;
  addUsers(value?: UserSuggestion, index?: number): UserSuggestion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserSuggestionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserSuggestionsResponse): GetUserSuggestionsResponse.AsObject;
  static serializeBinaryToWriter(message: GetUserSuggestionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserSuggestionsResponse;
  static deserializeBinaryFromReader(message: GetUserSuggestionsResponse, reader: jspb.BinaryReader): GetUserSuggestionsResponse;
}

export namespace GetUserSuggestionsResponse {
  export type AsObject = {
    usersList: Array<UserSuggestion.AsObject>,
  }
}

export class UserSuggestion extends jspb.Message {
  getId(): string;
  setId(value: string): UserSuggestion;

  getUsername(): string;
  setUsername(value: string): UserSuggestion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserSuggestion.AsObject;
  static toObject(includeInstance: boolean, msg: UserSuggestion): UserSuggestion.AsObject;
  static serializeBinaryToWriter(message: UserSuggestion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserSuggestion;
  static deserializeBinaryFromReader(message: UserSuggestion, reader: jspb.BinaryReader): UserSuggestion;
}

export namespace UserSuggestion {
  export type AsObject = {
    id: string,
    username: string,
  }
}

export class GetAllListsResponse extends jspb.Message {
  getListsList(): Array<List>;
  setListsList(value: Array<List>): GetAllListsResponse;
  clearListsList(): GetAllListsResponse;
  addLists(value?: List, index?: number): List;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllListsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllListsResponse): GetAllListsResponse.AsObject;
  static serializeBinaryToWriter(message: GetAllListsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllListsResponse;
  static deserializeBinaryFromReader(message: GetAllListsResponse, reader: jspb.BinaryReader): GetAllListsResponse;
}

export namespace GetAllListsResponse {
  export type AsObject = {
    listsList: Array<List.AsObject>,
  }
}

export class GetListByIDRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetListByIDRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetListByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetListByIDRequest): GetListByIDRequest.AsObject;
  static serializeBinaryToWriter(message: GetListByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetListByIDRequest;
  static deserializeBinaryFromReader(message: GetListByIDRequest, reader: jspb.BinaryReader): GetListByIDRequest;
}

export namespace GetListByIDRequest {
  export type AsObject = {
    id: string,
  }
}

export class RoomAccessCheckRequest extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): RoomAccessCheckRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomAccessCheckRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RoomAccessCheckRequest): RoomAccessCheckRequest.AsObject;
  static serializeBinaryToWriter(message: RoomAccessCheckRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomAccessCheckRequest;
  static deserializeBinaryFromReader(message: RoomAccessCheckRequest, reader: jspb.BinaryReader): RoomAccessCheckRequest;
}

export namespace RoomAccessCheckRequest {
  export type AsObject = {
    roomId: string,
  }
}

export class RoomAccessCheckResponse extends jspb.Message {
  getAuthorization(): RoomAuthorization.Enum;
  setAuthorization(value: RoomAuthorization.Enum): RoomAccessCheckResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomAccessCheckResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RoomAccessCheckResponse): RoomAccessCheckResponse.AsObject;
  static serializeBinaryToWriter(message: RoomAccessCheckResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomAccessCheckResponse;
  static deserializeBinaryFromReader(message: RoomAccessCheckResponse, reader: jspb.BinaryReader): RoomAccessCheckResponse;
}

export namespace RoomAccessCheckResponse {
  export type AsObject = {
    authorization: RoomAuthorization.Enum,
  }
}

export class RoomAuthorization extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomAuthorization.AsObject;
  static toObject(includeInstance: boolean, msg: RoomAuthorization): RoomAuthorization.AsObject;
  static serializeBinaryToWriter(message: RoomAuthorization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomAuthorization;
  static deserializeBinaryFromReader(message: RoomAuthorization, reader: jspb.BinaryReader): RoomAuthorization;
}

export namespace RoomAuthorization {
  export type AsObject = {
  }

  export enum Enum { 
    AUTHORIZED = 0,
    NEED_TO_PAY = 1,
    UNJOINABLE = 2,
    NEED_TO_SUBSCRIBE = 3,
  }
}

export class ChatUser extends jspb.Message {
  getId(): string;
  setId(value: string): ChatUser;

  getUsername(): string;
  setUsername(value: string): ChatUser;

  getImageUrl(): string;
  setImageUrl(value: string): ChatUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatUser.AsObject;
  static toObject(includeInstance: boolean, msg: ChatUser): ChatUser.AsObject;
  static serializeBinaryToWriter(message: ChatUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatUser;
  static deserializeBinaryFromReader(message: ChatUser, reader: jspb.BinaryReader): ChatUser;
}

export namespace ChatUser {
  export type AsObject = {
    id: string,
    username: string,
    imageUrl: string,
  }
}

export class Conversation extends jspb.Message {
  getId(): string;
  setId(value: string): Conversation;

  getParticipantsMap(): jspb.Map<string, ConversationParticipant>;
  clearParticipantsMap(): Conversation;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Conversation;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Conversation;

  getUnreadMessagesCount(): number;
  setUnreadMessagesCount(value: number): Conversation;

  getLastMessage(): ChatMessage | undefined;
  setLastMessage(value?: ChatMessage): Conversation;
  hasLastMessage(): boolean;
  clearLastMessage(): Conversation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Conversation.AsObject;
  static toObject(includeInstance: boolean, msg: Conversation): Conversation.AsObject;
  static serializeBinaryToWriter(message: Conversation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Conversation;
  static deserializeBinaryFromReader(message: Conversation, reader: jspb.BinaryReader): Conversation;
}

export namespace Conversation {
  export type AsObject = {
    id: string,
    participantsMap: Array<[string, ConversationParticipant.AsObject]>,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    unreadMessagesCount: number,
    lastMessage?: ChatMessage.AsObject,
  }
}

export class ConversationParticipant extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): ConversationParticipant;

  getUsername(): string;
  setUsername(value: string): ConversationParticipant;

  getJoinedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setJoinedAt(value?: google_protobuf_timestamp_pb.Timestamp): ConversationParticipant;
  hasJoinedAt(): boolean;
  clearJoinedAt(): ConversationParticipant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationParticipant.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationParticipant): ConversationParticipant.AsObject;
  static serializeBinaryToWriter(message: ConversationParticipant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationParticipant;
  static deserializeBinaryFromReader(message: ConversationParticipant, reader: jspb.BinaryReader): ConversationParticipant;
}

export namespace ConversationParticipant {
  export type AsObject = {
    userId: string,
    username: string,
    joinedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CreateConversationRequest extends jspb.Message {
  getParticipantUsername(): string;
  setParticipantUsername(value: string): CreateConversationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateConversationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateConversationRequest): CreateConversationRequest.AsObject;
  static serializeBinaryToWriter(message: CreateConversationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateConversationRequest;
  static deserializeBinaryFromReader(message: CreateConversationRequest, reader: jspb.BinaryReader): CreateConversationRequest;
}

export namespace CreateConversationRequest {
  export type AsObject = {
    participantUsername: string,
  }
}

export class CreateConversationResponse extends jspb.Message {
  getConversation(): Conversation | undefined;
  setConversation(value?: Conversation): CreateConversationResponse;
  hasConversation(): boolean;
  clearConversation(): CreateConversationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateConversationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateConversationResponse): CreateConversationResponse.AsObject;
  static serializeBinaryToWriter(message: CreateConversationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateConversationResponse;
  static deserializeBinaryFromReader(message: CreateConversationResponse, reader: jspb.BinaryReader): CreateConversationResponse;
}

export namespace CreateConversationResponse {
  export type AsObject = {
    conversation?: Conversation.AsObject,
  }
}

export class GetConversationRequest extends jspb.Message {
  getConversationId(): string;
  setConversationId(value: string): GetConversationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConversationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetConversationRequest): GetConversationRequest.AsObject;
  static serializeBinaryToWriter(message: GetConversationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConversationRequest;
  static deserializeBinaryFromReader(message: GetConversationRequest, reader: jspb.BinaryReader): GetConversationRequest;
}

export namespace GetConversationRequest {
  export type AsObject = {
    conversationId: string,
  }
}

export class GetConversationResponse extends jspb.Message {
  getConversation(): Conversation | undefined;
  setConversation(value?: Conversation): GetConversationResponse;
  hasConversation(): boolean;
  clearConversation(): GetConversationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConversationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetConversationResponse): GetConversationResponse.AsObject;
  static serializeBinaryToWriter(message: GetConversationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConversationResponse;
  static deserializeBinaryFromReader(message: GetConversationResponse, reader: jspb.BinaryReader): GetConversationResponse;
}

export namespace GetConversationResponse {
  export type AsObject = {
    conversation?: Conversation.AsObject,
  }
}

export class GetConversationsRequest extends jspb.Message {
  getConversationId(): string;
  setConversationId(value: string): GetConversationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConversationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetConversationsRequest): GetConversationsRequest.AsObject;
  static serializeBinaryToWriter(message: GetConversationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConversationsRequest;
  static deserializeBinaryFromReader(message: GetConversationsRequest, reader: jspb.BinaryReader): GetConversationsRequest;
}

export namespace GetConversationsRequest {
  export type AsObject = {
    conversationId: string,
  }
}

export class GetConversationsResponse extends jspb.Message {
  getConversationsList(): Array<Conversation>;
  setConversationsList(value: Array<Conversation>): GetConversationsResponse;
  clearConversationsList(): GetConversationsResponse;
  addConversations(value?: Conversation, index?: number): Conversation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConversationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetConversationsResponse): GetConversationsResponse.AsObject;
  static serializeBinaryToWriter(message: GetConversationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConversationsResponse;
  static deserializeBinaryFromReader(message: GetConversationsResponse, reader: jspb.BinaryReader): GetConversationsResponse;
}

export namespace GetConversationsResponse {
  export type AsObject = {
    conversationsList: Array<Conversation.AsObject>,
  }
}

export class GetConversationWithParticipantsRequest extends jspb.Message {
  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): GetConversationWithParticipantsRequest;
  clearUserIdsList(): GetConversationWithParticipantsRequest;
  addUserIds(value: string, index?: number): GetConversationWithParticipantsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConversationWithParticipantsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetConversationWithParticipantsRequest): GetConversationWithParticipantsRequest.AsObject;
  static serializeBinaryToWriter(message: GetConversationWithParticipantsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConversationWithParticipantsRequest;
  static deserializeBinaryFromReader(message: GetConversationWithParticipantsRequest, reader: jspb.BinaryReader): GetConversationWithParticipantsRequest;
}

export namespace GetConversationWithParticipantsRequest {
  export type AsObject = {
    userIdsList: Array<string>,
  }
}

export class GetConversationWithParticipantsResponse extends jspb.Message {
  getConversation(): Conversation | undefined;
  setConversation(value?: Conversation): GetConversationWithParticipantsResponse;
  hasConversation(): boolean;
  clearConversation(): GetConversationWithParticipantsResponse;

  getFound(): boolean;
  setFound(value: boolean): GetConversationWithParticipantsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConversationWithParticipantsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetConversationWithParticipantsResponse): GetConversationWithParticipantsResponse.AsObject;
  static serializeBinaryToWriter(message: GetConversationWithParticipantsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConversationWithParticipantsResponse;
  static deserializeBinaryFromReader(message: GetConversationWithParticipantsResponse, reader: jspb.BinaryReader): GetConversationWithParticipantsResponse;
}

export namespace GetConversationWithParticipantsResponse {
  export type AsObject = {
    conversation?: Conversation.AsObject,
    found: boolean,
  }
}

