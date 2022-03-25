import * as jspb from 'google-protobuf'



export class SourceContext extends jspb.Message {
  getFileName(): string;
  setFileName(value: string): SourceContext;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SourceContext.AsObject;
  static toObject(includeInstance: boolean, msg: SourceContext): SourceContext.AsObject;
  static serializeBinaryToWriter(message: SourceContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SourceContext;
  static deserializeBinaryFromReader(message: SourceContext, reader: jspb.BinaryReader): SourceContext;
}

export namespace SourceContext {
  export type AsObject = {
    fileName: string,
  }
}

