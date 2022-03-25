import * as jspb from 'google-protobuf'



export class Post extends jspb.Message {
  getId(): string;
  setId(value: string): Post;

  getMessage(): string;
  setMessage(value: string): Post;

  getAuthor(): string;
  setAuthor(value: string): Post;

  getAudio(): Audio | undefined;
  setAudio(value?: Audio): Post;
  hasAudio(): boolean;
  clearAudio(): Post;

  getCommentsList(): Array<Comment>;
  setCommentsList(value: Array<Comment>): Post;
  clearCommentsList(): Post;
  addComments(value?: Comment, index?: number): Comment;

  getHasAlreadyLiked(): boolean;
  setHasAlreadyLiked(value: boolean): Post;

  getLikes(): number;
  setLikes(value: number): Post;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Post.AsObject;
  static toObject(includeInstance: boolean, msg: Post): Post.AsObject;
  static serializeBinaryToWriter(message: Post, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Post;
  static deserializeBinaryFromReader(message: Post, reader: jspb.BinaryReader): Post;
}

export namespace Post {
  export type AsObject = {
    id: string,
    message: string,
    author: string,
    audio?: Audio.AsObject,
    commentsList: Array<Comment.AsObject>,
    hasAlreadyLiked: boolean,
    likes: number,
  }
}

export class Comment extends jspb.Message {
  getId(): string;
  setId(value: string): Comment;

  getMessage(): string;
  setMessage(value: string): Comment;

  getAudio(): Audio | undefined;
  setAudio(value?: Audio): Comment;
  hasAudio(): boolean;
  clearAudio(): Comment;

  getAuthor(): string;
  setAuthor(value: string): Comment;

  getParentId(): string;
  setParentId(value: string): Comment;

  getLikes(): number;
  setLikes(value: number): Comment;

  getPostId(): string;
  setPostId(value: string): Comment;

  getThread(): Thread | undefined;
  setThread(value?: Thread): Comment;
  hasThread(): boolean;
  clearThread(): Comment;

  getHasAlreadyLiked(): boolean;
  setHasAlreadyLiked(value: boolean): Comment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Comment.AsObject;
  static toObject(includeInstance: boolean, msg: Comment): Comment.AsObject;
  static serializeBinaryToWriter(message: Comment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Comment;
  static deserializeBinaryFromReader(message: Comment, reader: jspb.BinaryReader): Comment;
}

export namespace Comment {
  export type AsObject = {
    id: string,
    message: string,
    audio?: Audio.AsObject,
    author: string,
    parentId: string,
    likes: number,
    postId: string,
    thread?: Thread.AsObject,
    hasAlreadyLiked: boolean,
  }
}

export class Audio extends jspb.Message {
  getId(): string;
  setId(value: string): Audio;

  getBytes(): Uint8Array | string;
  getBytes_asU8(): Uint8Array;
  getBytes_asB64(): string;
  setBytes(value: Uint8Array | string): Audio;

  getFormat(): string;
  setFormat(value: string): Audio;

  getDurationMs(): number;
  setDurationMs(value: number): Audio;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Audio.AsObject;
  static toObject(includeInstance: boolean, msg: Audio): Audio.AsObject;
  static serializeBinaryToWriter(message: Audio, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Audio;
  static deserializeBinaryFromReader(message: Audio, reader: jspb.BinaryReader): Audio;
}

export namespace Audio {
  export type AsObject = {
    id: string,
    bytes: Uint8Array | string,
    format: string,
    durationMs: number,
  }
}

export class CreatePostRequest extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): CreatePostRequest;

  getAudioBytes(): Uint8Array | string;
  getAudioBytes_asU8(): Uint8Array;
  getAudioBytes_asB64(): string;
  setAudioBytes(value: Uint8Array | string): CreatePostRequest;

  getAudioDurationMs(): number;
  setAudioDurationMs(value: number): CreatePostRequest;

  getAudioFormat(): string;
  setAudioFormat(value: string): CreatePostRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePostRequest): CreatePostRequest.AsObject;
  static serializeBinaryToWriter(message: CreatePostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePostRequest;
  static deserializeBinaryFromReader(message: CreatePostRequest, reader: jspb.BinaryReader): CreatePostRequest;
}

export namespace CreatePostRequest {
  export type AsObject = {
    message: string,
    audioBytes: Uint8Array | string,
    audioDurationMs: number,
    audioFormat: string,
  }
}

export class CreatePostResponse extends jspb.Message {
  getPost(): Post | undefined;
  setPost(value?: Post): CreatePostResponse;
  hasPost(): boolean;
  clearPost(): CreatePostResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePostResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePostResponse): CreatePostResponse.AsObject;
  static serializeBinaryToWriter(message: CreatePostResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePostResponse;
  static deserializeBinaryFromReader(message: CreatePostResponse, reader: jspb.BinaryReader): CreatePostResponse;
}

export namespace CreatePostResponse {
  export type AsObject = {
    post?: Post.AsObject,
  }
}

export class GetPostRequest extends jspb.Message {
  getPostId(): string;
  setPostId(value: string): GetPostRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPostRequest): GetPostRequest.AsObject;
  static serializeBinaryToWriter(message: GetPostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPostRequest;
  static deserializeBinaryFromReader(message: GetPostRequest, reader: jspb.BinaryReader): GetPostRequest;
}

export namespace GetPostRequest {
  export type AsObject = {
    postId: string,
  }
}

export class GetPostResponse extends jspb.Message {
  getPost(): Post | undefined;
  setPost(value?: Post): GetPostResponse;
  hasPost(): boolean;
  clearPost(): GetPostResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPostResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPostResponse): GetPostResponse.AsObject;
  static serializeBinaryToWriter(message: GetPostResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPostResponse;
  static deserializeBinaryFromReader(message: GetPostResponse, reader: jspb.BinaryReader): GetPostResponse;
}

export namespace GetPostResponse {
  export type AsObject = {
    post?: Post.AsObject,
  }
}

export class GetPostsRequest extends jspb.Message {
  getCategory(): string;
  setCategory(value: string): GetPostsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPostsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPostsRequest): GetPostsRequest.AsObject;
  static serializeBinaryToWriter(message: GetPostsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPostsRequest;
  static deserializeBinaryFromReader(message: GetPostsRequest, reader: jspb.BinaryReader): GetPostsRequest;
}

export namespace GetPostsRequest {
  export type AsObject = {
    category: string,
  }
}

export class GetPostsResponse extends jspb.Message {
  getPostsList(): Array<Post>;
  setPostsList(value: Array<Post>): GetPostsResponse;
  clearPostsList(): GetPostsResponse;
  addPosts(value?: Post, index?: number): Post;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPostsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPostsResponse): GetPostsResponse.AsObject;
  static serializeBinaryToWriter(message: GetPostsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPostsResponse;
  static deserializeBinaryFromReader(message: GetPostsResponse, reader: jspb.BinaryReader): GetPostsResponse;
}

export namespace GetPostsResponse {
  export type AsObject = {
    postsList: Array<Post.AsObject>,
  }
}

export class Thread extends jspb.Message {
  getThreadType(): ThreadType.Enum;
  setThreadType(value: ThreadType.Enum): Thread;

  getTargetId(): string;
  setTargetId(value: string): Thread;

  getComment(): Comment | undefined;
  setComment(value?: Comment): Thread;
  hasComment(): boolean;
  clearComment(): Thread;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Thread.AsObject;
  static toObject(includeInstance: boolean, msg: Thread): Thread.AsObject;
  static serializeBinaryToWriter(message: Thread, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Thread;
  static deserializeBinaryFromReader(message: Thread, reader: jspb.BinaryReader): Thread;
}

export namespace Thread {
  export type AsObject = {
    threadType: ThreadType.Enum,
    targetId: string,
    comment?: Comment.AsObject,
  }
}

export class ThreadType extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThreadType.AsObject;
  static toObject(includeInstance: boolean, msg: ThreadType): ThreadType.AsObject;
  static serializeBinaryToWriter(message: ThreadType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThreadType;
  static deserializeBinaryFromReader(message: ThreadType, reader: jspb.BinaryReader): ThreadType;
}

export namespace ThreadType {
  export type AsObject = {
  }

  export enum Enum { 
    POST = 0,
    COMMENT = 1,
    NONE = 2,
  }
}

export class ThreadRequest extends jspb.Message {
  getThreadType(): ThreadType.Enum;
  setThreadType(value: ThreadType.Enum): ThreadRequest;

  getTargetId(): string;
  setTargetId(value: string): ThreadRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThreadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ThreadRequest): ThreadRequest.AsObject;
  static serializeBinaryToWriter(message: ThreadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThreadRequest;
  static deserializeBinaryFromReader(message: ThreadRequest, reader: jspb.BinaryReader): ThreadRequest;
}

export namespace ThreadRequest {
  export type AsObject = {
    threadType: ThreadType.Enum,
    targetId: string,
  }
}

export class CreateCommentRequest extends jspb.Message {
  getPostId(): string;
  setPostId(value: string): CreateCommentRequest;

  getMessage(): string;
  setMessage(value: string): CreateCommentRequest;

  getAudioBytes(): Uint8Array | string;
  getAudioBytes_asU8(): Uint8Array;
  getAudioBytes_asB64(): string;
  setAudioBytes(value: Uint8Array | string): CreateCommentRequest;

  getAudioDurationMs(): number;
  setAudioDurationMs(value: number): CreateCommentRequest;

  getParentId(): string;
  setParentId(value: string): CreateCommentRequest;

  getThread(): ThreadRequest | undefined;
  setThread(value?: ThreadRequest): CreateCommentRequest;
  hasThread(): boolean;
  clearThread(): CreateCommentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCommentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCommentRequest): CreateCommentRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCommentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCommentRequest;
  static deserializeBinaryFromReader(message: CreateCommentRequest, reader: jspb.BinaryReader): CreateCommentRequest;
}

export namespace CreateCommentRequest {
  export type AsObject = {
    postId: string,
    message: string,
    audioBytes: Uint8Array | string,
    audioDurationMs: number,
    parentId: string,
    thread?: ThreadRequest.AsObject,
  }
}

export class CreateCommentResponse extends jspb.Message {
  getComment(): Comment | undefined;
  setComment(value?: Comment): CreateCommentResponse;
  hasComment(): boolean;
  clearComment(): CreateCommentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCommentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCommentResponse): CreateCommentResponse.AsObject;
  static serializeBinaryToWriter(message: CreateCommentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCommentResponse;
  static deserializeBinaryFromReader(message: CreateCommentResponse, reader: jspb.BinaryReader): CreateCommentResponse;
}

export namespace CreateCommentResponse {
  export type AsObject = {
    comment?: Comment.AsObject,
  }
}

export class LikePostRequest extends jspb.Message {
  getPostId(): string;
  setPostId(value: string): LikePostRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LikePostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LikePostRequest): LikePostRequest.AsObject;
  static serializeBinaryToWriter(message: LikePostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LikePostRequest;
  static deserializeBinaryFromReader(message: LikePostRequest, reader: jspb.BinaryReader): LikePostRequest;
}

export namespace LikePostRequest {
  export type AsObject = {
    postId: string,
  }
}

export class LikePostResponse extends jspb.Message {
  getPost(): Post | undefined;
  setPost(value?: Post): LikePostResponse;
  hasPost(): boolean;
  clearPost(): LikePostResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LikePostResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LikePostResponse): LikePostResponse.AsObject;
  static serializeBinaryToWriter(message: LikePostResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LikePostResponse;
  static deserializeBinaryFromReader(message: LikePostResponse, reader: jspb.BinaryReader): LikePostResponse;
}

export namespace LikePostResponse {
  export type AsObject = {
    post?: Post.AsObject,
  }
}

export class LikeCommentRequest extends jspb.Message {
  getCommentId(): string;
  setCommentId(value: string): LikeCommentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LikeCommentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LikeCommentRequest): LikeCommentRequest.AsObject;
  static serializeBinaryToWriter(message: LikeCommentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LikeCommentRequest;
  static deserializeBinaryFromReader(message: LikeCommentRequest, reader: jspb.BinaryReader): LikeCommentRequest;
}

export namespace LikeCommentRequest {
  export type AsObject = {
    commentId: string,
  }
}

export class LikeCommentResponse extends jspb.Message {
  getComment(): Comment | undefined;
  setComment(value?: Comment): LikeCommentResponse;
  hasComment(): boolean;
  clearComment(): LikeCommentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LikeCommentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LikeCommentResponse): LikeCommentResponse.AsObject;
  static serializeBinaryToWriter(message: LikeCommentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LikeCommentResponse;
  static deserializeBinaryFromReader(message: LikeCommentResponse, reader: jspb.BinaryReader): LikeCommentResponse;
}

export namespace LikeCommentResponse {
  export type AsObject = {
    comment?: Comment.AsObject,
  }
}

