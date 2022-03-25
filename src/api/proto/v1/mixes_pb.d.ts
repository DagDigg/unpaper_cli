import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Mix extends jspb.Message {
  getId(): string;
  setId(value: string): Mix;

  getCategory(): string;
  setCategory(value: string): Mix;

  getPostIdsList(): Array<string>;
  setPostIdsList(value: Array<string>): Mix;
  clearPostIdsList(): Mix;
  addPostIds(value: string, index?: number): Mix;

  getBackground(): Background | undefined;
  setBackground(value?: Background): Mix;
  hasBackground(): boolean;
  clearBackground(): Mix;

  getRequestedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRequestedAt(value?: google_protobuf_timestamp_pb.Timestamp): Mix;
  hasRequestedAt(): boolean;
  clearRequestedAt(): Mix;

  getTitle(): string;
  setTitle(value: string): Mix;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Mix.AsObject;
  static toObject(includeInstance: boolean, msg: Mix): Mix.AsObject;
  static serializeBinaryToWriter(message: Mix, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Mix;
  static deserializeBinaryFromReader(message: Mix, reader: jspb.BinaryReader): Mix;
}

export namespace Mix {
  export type AsObject = {
    id: string,
    category: string,
    postIdsList: Array<string>,
    background?: Background.AsObject,
    requestedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    title: string,
  }
}

export class Background extends jspb.Message {
  getFallback(): string;
  setFallback(value: string): Background;

  getBackgroundImage(): string;
  setBackgroundImage(value: string): Background;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Background.AsObject;
  static toObject(includeInstance: boolean, msg: Background): Background.AsObject;
  static serializeBinaryToWriter(message: Background, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Background;
  static deserializeBinaryFromReader(message: Background, reader: jspb.BinaryReader): Background;
}

export namespace Background {
  export type AsObject = {
    fallback: string,
    backgroundImage: string,
  }
}

export class GetMixesRes extends jspb.Message {
  getMixesList(): Array<Mix>;
  setMixesList(value: Array<Mix>): GetMixesRes;
  clearMixesList(): GetMixesRes;
  addMixes(value?: Mix, index?: number): Mix;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMixesRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetMixesRes): GetMixesRes.AsObject;
  static serializeBinaryToWriter(message: GetMixesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMixesRes;
  static deserializeBinaryFromReader(message: GetMixesRes, reader: jspb.BinaryReader): GetMixesRes;
}

export namespace GetMixesRes {
  export type AsObject = {
    mixesList: Array<Mix.AsObject>,
  }
}

