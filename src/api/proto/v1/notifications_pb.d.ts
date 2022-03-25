import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Notification extends jspb.Message {
  getId(): string;
  setId(value: string): Notification;

  getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDate(value?: google_protobuf_timestamp_pb.Timestamp): Notification;
  hasDate(): boolean;
  clearDate(): Notification;

  getTriggerId(): string;
  setTriggerId(value: string): Notification;

  getEvent(): Event | undefined;
  setEvent(value?: Event): Notification;
  hasEvent(): boolean;
  clearEvent(): Notification;

  getUserWhoFiredEvent(): UserWhoFiredEvent | undefined;
  setUserWhoFiredEvent(value?: UserWhoFiredEvent): Notification;
  hasUserWhoFiredEvent(): boolean;
  clearUserWhoFiredEvent(): Notification;

  getRead(): boolean;
  setRead(value: boolean): Notification;

  getContent(): string;
  setContent(value: string): Notification;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Notification.AsObject;
  static toObject(includeInstance: boolean, msg: Notification): Notification.AsObject;
  static serializeBinaryToWriter(message: Notification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Notification;
  static deserializeBinaryFromReader(message: Notification, reader: jspb.BinaryReader): Notification;
}

export namespace Notification {
  export type AsObject = {
    id: string,
    date?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    triggerId: string,
    event?: Event.AsObject,
    userWhoFiredEvent?: UserWhoFiredEvent.AsObject,
    read: boolean,
    content: string,
  }
}

export class Event extends jspb.Message {
  getId(): EventID.Enum;
  setId(value: EventID.Enum): Event;

  getText(): string;
  setText(value: string): Event;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Event.AsObject;
  static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
  static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Event;
  static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
  export type AsObject = {
    id: EventID.Enum,
    text: string,
  }
}

export class EventID extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventID.AsObject;
  static toObject(includeInstance: boolean, msg: EventID): EventID.AsObject;
  static serializeBinaryToWriter(message: EventID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventID;
  static deserializeBinaryFromReader(message: EventID, reader: jspb.BinaryReader): EventID;
}

export namespace EventID {
  export type AsObject = {
  }

  export enum Enum { 
    LIKE_POST = 0,
    LIKE_COMMENT = 1,
    COMMENT = 2,
    FOLLOW = 3,
  }
}

export class UserWhoFiredEvent extends jspb.Message {
  getId(): string;
  setId(value: string): UserWhoFiredEvent;

  getUsername(): string;
  setUsername(value: string): UserWhoFiredEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserWhoFiredEvent.AsObject;
  static toObject(includeInstance: boolean, msg: UserWhoFiredEvent): UserWhoFiredEvent.AsObject;
  static serializeBinaryToWriter(message: UserWhoFiredEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserWhoFiredEvent;
  static deserializeBinaryFromReader(message: UserWhoFiredEvent, reader: jspb.BinaryReader): UserWhoFiredEvent;
}

export namespace UserWhoFiredEvent {
  export type AsObject = {
    id: string,
    username: string,
  }
}

export class GetAllNotificationsRes extends jspb.Message {
  getNotificationsList(): Array<Notification>;
  setNotificationsList(value: Array<Notification>): GetAllNotificationsRes;
  clearNotificationsList(): GetAllNotificationsRes;
  addNotifications(value?: Notification, index?: number): Notification;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllNotificationsRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllNotificationsRes): GetAllNotificationsRes.AsObject;
  static serializeBinaryToWriter(message: GetAllNotificationsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllNotificationsRes;
  static deserializeBinaryFromReader(message: GetAllNotificationsRes, reader: jspb.BinaryReader): GetAllNotificationsRes;
}

export namespace GetAllNotificationsRes {
  export type AsObject = {
    notificationsList: Array<Notification.AsObject>,
  }
}

export class ReadNotificationRequest extends jspb.Message {
  getNotificationId(): string;
  setNotificationId(value: string): ReadNotificationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadNotificationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReadNotificationRequest): ReadNotificationRequest.AsObject;
  static serializeBinaryToWriter(message: ReadNotificationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadNotificationRequest;
  static deserializeBinaryFromReader(message: ReadNotificationRequest, reader: jspb.BinaryReader): ReadNotificationRequest;
}

export namespace ReadNotificationRequest {
  export type AsObject = {
    notificationId: string,
  }
}

export class ReadNotificationResponse extends jspb.Message {
  getNotification(): Notification | undefined;
  setNotification(value?: Notification): ReadNotificationResponse;
  hasNotification(): boolean;
  clearNotification(): ReadNotificationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadNotificationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReadNotificationResponse): ReadNotificationResponse.AsObject;
  static serializeBinaryToWriter(message: ReadNotificationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadNotificationResponse;
  static deserializeBinaryFromReader(message: ReadNotificationResponse, reader: jspb.BinaryReader): ReadNotificationResponse;
}

export namespace ReadNotificationResponse {
  export type AsObject = {
    notification?: Notification.AsObject,
  }
}

