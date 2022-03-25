import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as protoc$gen$swagger_options_annotations_pb from '../../../protoc-gen-swagger/options/annotations_pb';
import * as api_proto_v1_payment_pb from '../../../api/proto/v1/payment_pb';
import * as api_proto_v1_auth_pb from '../../../api/proto/v1/auth_pb';
import * as api_proto_v1_chat_pb from '../../../api/proto/v1/chat_pb';
import * as api_proto_v1_posts_pb from '../../../api/proto/v1/posts_pb';
import * as api_proto_v1_notifications_pb from '../../../api/proto/v1/notifications_pb';
import * as api_proto_v1_mixes_pb from '../../../api/proto/v1/mixes_pb';


export class PingRequest extends jspb.Message {
  getApi(): string;
  setApi(value: string): PingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PingRequest): PingRequest.AsObject;
  static serializeBinaryToWriter(message: PingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingRequest;
  static deserializeBinaryFromReader(message: PingRequest, reader: jspb.BinaryReader): PingRequest;
}

export namespace PingRequest {
  export type AsObject = {
    api: string,
  }
}

