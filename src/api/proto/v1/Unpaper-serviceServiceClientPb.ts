/**
 * @fileoverview gRPC-Web generated client stub for v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as api_proto_v1_unpaper$service_pb from '../../../api/proto/v1/unpaper-service_pb';
import * as api_proto_v1_notifications_pb from '../../../api/proto/v1/notifications_pb';
import * as api_proto_v1_mixes_pb from '../../../api/proto/v1/mixes_pb';
import * as api_proto_v1_posts_pb from '../../../api/proto/v1/posts_pb';
import * as api_proto_v1_payment_pb from '../../../api/proto/v1/payment_pb';
import * as api_proto_v1_auth_pb from '../../../api/proto/v1/auth_pb';
import * as api_proto_v1_chat_pb from '../../../api/proto/v1/chat_pb';


export class UnpaperServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoPing = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_auth_pb.User,
    (request: api_proto_v1_unpaper$service_pb.PingRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_auth_pb.User.deserializeBinary
  );

  ping(
    request: api_proto_v1_unpaper$service_pb.PingRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_auth_pb.User>;

  ping(
    request: api_proto_v1_unpaper$service_pb.PingRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_auth_pb.User) => void): grpcWeb.ClientReadableStream<api_proto_v1_auth_pb.User>;

  ping(
    request: api_proto_v1_unpaper$service_pb.PingRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_auth_pb.User) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/Ping',
        request,
        metadata || {},
        this.methodInfoPing,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/Ping',
    request,
    metadata || {},
    this.methodInfoPing);
  }

  methodInfoGoogleLogin = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_auth_pb.GoogleLoginResponse,
    (request: api_proto_v1_auth_pb.GoogleLoginRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_auth_pb.GoogleLoginResponse.deserializeBinary
  );

  googleLogin(
    request: api_proto_v1_auth_pb.GoogleLoginRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_auth_pb.GoogleLoginResponse>;

  googleLogin(
    request: api_proto_v1_auth_pb.GoogleLoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_auth_pb.GoogleLoginResponse) => void): grpcWeb.ClientReadableStream<api_proto_v1_auth_pb.GoogleLoginResponse>;

  googleLogin(
    request: api_proto_v1_auth_pb.GoogleLoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_auth_pb.GoogleLoginResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/GoogleLogin',
        request,
        metadata || {},
        this.methodInfoGoogleLogin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/GoogleLogin',
    request,
    metadata || {},
    this.methodInfoGoogleLogin);
  }

  methodInfoGoogleCallback = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_auth_pb.User,
    (request: api_proto_v1_auth_pb.GoogleCallbackRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_auth_pb.User.deserializeBinary
  );

  googleCallback(
    request: api_proto_v1_auth_pb.GoogleCallbackRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_auth_pb.User>;

  googleCallback(
    request: api_proto_v1_auth_pb.GoogleCallbackRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_auth_pb.User) => void): grpcWeb.ClientReadableStream<api_proto_v1_auth_pb.User>;

  googleCallback(
    request: api_proto_v1_auth_pb.GoogleCallbackRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_auth_pb.User) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/GoogleCallback',
        request,
        metadata || {},
        this.methodInfoGoogleCallback,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/GoogleCallback',
    request,
    metadata || {},
    this.methodInfoGoogleCallback);
  }

  methodInfoGoogleOneTap = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_auth_pb.User,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    api_proto_v1_auth_pb.User.deserializeBinary
  );

  googleOneTap(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_auth_pb.User>;

  googleOneTap(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_auth_pb.User) => void): grpcWeb.ClientReadableStream<api_proto_v1_auth_pb.User>;

  googleOneTap(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_auth_pb.User) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/GoogleOneTap',
        request,
        metadata || {},
        this.methodInfoGoogleOneTap,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/GoogleOneTap',
    request,
    metadata || {},
    this.methodInfoGoogleOneTap);
  }

  methodInfoEmailSignup = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_auth_pb.User,
    (request: api_proto_v1_auth_pb.EmailSignupRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_auth_pb.User.deserializeBinary
  );

  emailSignup(
    request: api_proto_v1_auth_pb.EmailSignupRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_auth_pb.User>;

  emailSignup(
    request: api_proto_v1_auth_pb.EmailSignupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_auth_pb.User) => void): grpcWeb.ClientReadableStream<api_proto_v1_auth_pb.User>;

  emailSignup(
    request: api_proto_v1_auth_pb.EmailSignupRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_auth_pb.User) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/EmailSignup',
        request,
        metadata || {},
        this.methodInfoEmailSignup,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/EmailSignup',
    request,
    metadata || {},
    this.methodInfoEmailSignup);
  }

  methodInfoEmailSignin = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_auth_pb.User,
    (request: api_proto_v1_auth_pb.EmailSigninRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_auth_pb.User.deserializeBinary
  );

  emailSignin(
    request: api_proto_v1_auth_pb.EmailSigninRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_auth_pb.User>;

  emailSignin(
    request: api_proto_v1_auth_pb.EmailSigninRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_auth_pb.User) => void): grpcWeb.ClientReadableStream<api_proto_v1_auth_pb.User>;

  emailSignin(
    request: api_proto_v1_auth_pb.EmailSigninRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_auth_pb.User) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/EmailSignin',
        request,
        metadata || {},
        this.methodInfoEmailSignin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/EmailSignin',
    request,
    metadata || {},
    this.methodInfoEmailSignin);
  }

  methodInfoEmailVerify = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: api_proto_v1_auth_pb.EmailVerifyRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  emailVerify(
    request: api_proto_v1_auth_pb.EmailVerifyRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  emailVerify(
    request: api_proto_v1_auth_pb.EmailVerifyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  emailVerify(
    request: api_proto_v1_auth_pb.EmailVerifyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/EmailVerify',
        request,
        metadata || {},
        this.methodInfoEmailVerify,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/EmailVerify',
    request,
    metadata || {},
    this.methodInfoEmailVerify);
  }

  methodInfoEmailCheck = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: api_proto_v1_auth_pb.EmailCheckRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  emailCheck(
    request: api_proto_v1_auth_pb.EmailCheckRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  emailCheck(
    request: api_proto_v1_auth_pb.EmailCheckRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  emailCheck(
    request: api_proto_v1_auth_pb.EmailCheckRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/EmailCheck',
        request,
        metadata || {},
        this.methodInfoEmailCheck,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/EmailCheck',
    request,
    metadata || {},
    this.methodInfoEmailCheck);
  }

  methodInfoChangePassword = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: api_proto_v1_auth_pb.ChangePasswordRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  changePassword(
    request: api_proto_v1_auth_pb.ChangePasswordRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  changePassword(
    request: api_proto_v1_auth_pb.ChangePasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  changePassword(
    request: api_proto_v1_auth_pb.ChangePasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/ChangePassword',
        request,
        metadata || {},
        this.methodInfoChangePassword,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/ChangePassword',
    request,
    metadata || {},
    this.methodInfoChangePassword);
  }

  methodInfoSendResetLink = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: api_proto_v1_auth_pb.SendResetLinkRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  sendResetLink(
    request: api_proto_v1_auth_pb.SendResetLinkRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  sendResetLink(
    request: api_proto_v1_auth_pb.SendResetLinkRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  sendResetLink(
    request: api_proto_v1_auth_pb.SendResetLinkRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/SendResetLink',
        request,
        metadata || {},
        this.methodInfoSendResetLink,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/SendResetLink',
    request,
    metadata || {},
    this.methodInfoSendResetLink);
  }

  methodInfoResetPassword = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: api_proto_v1_auth_pb.ResetPasswordRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  resetPassword(
    request: api_proto_v1_auth_pb.ResetPasswordRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  resetPassword(
    request: api_proto_v1_auth_pb.ResetPasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  resetPassword(
    request: api_proto_v1_auth_pb.ResetPasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/ResetPassword',
        request,
        metadata || {},
        this.methodInfoResetPassword,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/ResetPassword',
    request,
    metadata || {},
    this.methodInfoResetPassword);
  }

  methodInfoUpdateUsername = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_auth_pb.User,
    (request: api_proto_v1_auth_pb.UpdateUsernameRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_auth_pb.User.deserializeBinary
  );

  updateUsername(
    request: api_proto_v1_auth_pb.UpdateUsernameRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_auth_pb.User>;

  updateUsername(
    request: api_proto_v1_auth_pb.UpdateUsernameRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_auth_pb.User) => void): grpcWeb.ClientReadableStream<api_proto_v1_auth_pb.User>;

  updateUsername(
    request: api_proto_v1_auth_pb.UpdateUsernameRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_auth_pb.User) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/UpdateUsername',
        request,
        metadata || {},
        this.methodInfoUpdateUsername,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/UpdateUsername',
    request,
    metadata || {},
    this.methodInfoUpdateUsername);
  }

  methodInfoSignOut = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  signOut(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  signOut(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  signOut(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/SignOut',
        request,
        metadata || {},
        this.methodInfoSignOut,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/SignOut',
    request,
    metadata || {},
    this.methodInfoSignOut);
  }

  methodInfoSetUserOnline = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  setUserOnline(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  setUserOnline(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  setUserOnline(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/SetUserOnline',
        request,
        metadata || {},
        this.methodInfoSetUserOnline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/SetUserOnline',
    request,
    metadata || {},
    this.methodInfoSetUserOnline);
  }

  methodInfoSetUserOffline = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  setUserOffline(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  setUserOffline(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  setUserOffline(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/SetUserOffline',
        request,
        metadata || {},
        this.methodInfoSetUserOffline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/SetUserOffline',
    request,
    metadata || {},
    this.methodInfoSetUserOffline);
  }

  methodInfoFollowUser = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_auth_pb.ExtUserInfoResponse,
    (request: api_proto_v1_auth_pb.FollowUserRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_auth_pb.ExtUserInfoResponse.deserializeBinary
  );

  followUser(
    request: api_proto_v1_auth_pb.FollowUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_auth_pb.ExtUserInfoResponse>;

  followUser(
    request: api_proto_v1_auth_pb.FollowUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_auth_pb.ExtUserInfoResponse) => void): grpcWeb.ClientReadableStream<api_proto_v1_auth_pb.ExtUserInfoResponse>;

  followUser(
    request: api_proto_v1_auth_pb.FollowUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_auth_pb.ExtUserInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/FollowUser',
        request,
        metadata || {},
        this.methodInfoFollowUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/FollowUser',
    request,
    metadata || {},
    this.methodInfoFollowUser);
  }

  methodInfoGetFollowers = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_auth_pb.GetFollowersResponse,
    (request: api_proto_v1_auth_pb.GetFollowersRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_auth_pb.GetFollowersResponse.deserializeBinary
  );

  getFollowers(
    request: api_proto_v1_auth_pb.GetFollowersRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_auth_pb.GetFollowersResponse>;

  getFollowers(
    request: api_proto_v1_auth_pb.GetFollowersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_auth_pb.GetFollowersResponse) => void): grpcWeb.ClientReadableStream<api_proto_v1_auth_pb.GetFollowersResponse>;

  getFollowers(
    request: api_proto_v1_auth_pb.GetFollowersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_auth_pb.GetFollowersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/GetFollowers',
        request,
        metadata || {},
        this.methodInfoGetFollowers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/GetFollowers',
    request,
    metadata || {},
    this.methodInfoGetFollowers);
  }

  methodInfoGetFollowing = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_auth_pb.GetFollowingResponse,
    (request: api_proto_v1_auth_pb.GetFollowingRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_auth_pb.GetFollowingResponse.deserializeBinary
  );

  getFollowing(
    request: api_proto_v1_auth_pb.GetFollowingRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_auth_pb.GetFollowingResponse>;

  getFollowing(
    request: api_proto_v1_auth_pb.GetFollowingRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_auth_pb.GetFollowingResponse) => void): grpcWeb.ClientReadableStream<api_proto_v1_auth_pb.GetFollowingResponse>;

  getFollowing(
    request: api_proto_v1_auth_pb.GetFollowingRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_auth_pb.GetFollowingResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/GetFollowing',
        request,
        metadata || {},
        this.methodInfoGetFollowing,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/GetFollowing',
    request,
    metadata || {},
    this.methodInfoGetFollowing);
  }

  methodInfoGetFollowingCount = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_auth_pb.GetFollowingCountResponse,
    (request: api_proto_v1_auth_pb.GetFollowingCountRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_auth_pb.GetFollowingCountResponse.deserializeBinary
  );

  getFollowingCount(
    request: api_proto_v1_auth_pb.GetFollowingCountRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_auth_pb.GetFollowingCountResponse>;

  getFollowingCount(
    request: api_proto_v1_auth_pb.GetFollowingCountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_auth_pb.GetFollowingCountResponse) => void): grpcWeb.ClientReadableStream<api_proto_v1_auth_pb.GetFollowingCountResponse>;

  getFollowingCount(
    request: api_proto_v1_auth_pb.GetFollowingCountRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_auth_pb.GetFollowingCountResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/GetFollowingCount',
        request,
        metadata || {},
        this.methodInfoGetFollowingCount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/GetFollowingCount',
    request,
    metadata || {},
    this.methodInfoGetFollowingCount);
  }

  methodInfoGetFollowersCount = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_auth_pb.GetFollowersCountResponse,
    (request: api_proto_v1_auth_pb.GetFollowersCountRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_auth_pb.GetFollowersCountResponse.deserializeBinary
  );

  getFollowersCount(
    request: api_proto_v1_auth_pb.GetFollowersCountRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_auth_pb.GetFollowersCountResponse>;

  getFollowersCount(
    request: api_proto_v1_auth_pb.GetFollowersCountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_auth_pb.GetFollowersCountResponse) => void): grpcWeb.ClientReadableStream<api_proto_v1_auth_pb.GetFollowersCountResponse>;

  getFollowersCount(
    request: api_proto_v1_auth_pb.GetFollowersCountRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_auth_pb.GetFollowersCountResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/GetFollowersCount',
        request,
        metadata || {},
        this.methodInfoGetFollowersCount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/GetFollowersCount',
    request,
    metadata || {},
    this.methodInfoGetFollowersCount);
  }

  methodInfoUserInfo = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_auth_pb.User,
    (request: api_proto_v1_auth_pb.UserInfoRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_auth_pb.User.deserializeBinary
  );

  userInfo(
    request: api_proto_v1_auth_pb.UserInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_auth_pb.User>;

  userInfo(
    request: api_proto_v1_auth_pb.UserInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_auth_pb.User) => void): grpcWeb.ClientReadableStream<api_proto_v1_auth_pb.User>;

  userInfo(
    request: api_proto_v1_auth_pb.UserInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_auth_pb.User) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/UserInfo',
        request,
        metadata || {},
        this.methodInfoUserInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/UserInfo',
    request,
    metadata || {},
    this.methodInfoUserInfo);
  }

  methodInfoExtUserInfo = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_auth_pb.ExtUserInfoResponse,
    (request: api_proto_v1_auth_pb.ExtUserInfoRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_auth_pb.ExtUserInfoResponse.deserializeBinary
  );

  extUserInfo(
    request: api_proto_v1_auth_pb.ExtUserInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_auth_pb.ExtUserInfoResponse>;

  extUserInfo(
    request: api_proto_v1_auth_pb.ExtUserInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_auth_pb.ExtUserInfoResponse) => void): grpcWeb.ClientReadableStream<api_proto_v1_auth_pb.ExtUserInfoResponse>;

  extUserInfo(
    request: api_proto_v1_auth_pb.ExtUserInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_auth_pb.ExtUserInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/ExtUserInfo',
        request,
        metadata || {},
        this.methodInfoExtUserInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/ExtUserInfo',
    request,
    metadata || {},
    this.methodInfoExtUserInfo);
  }

  methodInfoCustomerInfo = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_payment_pb.Customer,
    (request: api_proto_v1_payment_pb.CustomerInfoRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_payment_pb.Customer.deserializeBinary
  );

  customerInfo(
    request: api_proto_v1_payment_pb.CustomerInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_payment_pb.Customer>;

  customerInfo(
    request: api_proto_v1_payment_pb.CustomerInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_payment_pb.Customer) => void): grpcWeb.ClientReadableStream<api_proto_v1_payment_pb.Customer>;

  customerInfo(
    request: api_proto_v1_payment_pb.CustomerInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_payment_pb.Customer) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/CustomerInfo',
        request,
        metadata || {},
        this.methodInfoCustomerInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/CustomerInfo',
    request,
    metadata || {},
    this.methodInfoCustomerInfo);
  }

  methodInfoStripeWebhook = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: api_proto_v1_payment_pb.StripeWebhookRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  stripeWebhook(
    request: api_proto_v1_payment_pb.StripeWebhookRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  stripeWebhook(
    request: api_proto_v1_payment_pb.StripeWebhookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  stripeWebhook(
    request: api_proto_v1_payment_pb.StripeWebhookRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/StripeWebhook',
        request,
        metadata || {},
        this.methodInfoStripeWebhook,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/StripeWebhook',
    request,
    metadata || {},
    this.methodInfoStripeWebhook);
  }

  methodInfoStripeConnectWebhook = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: api_proto_v1_payment_pb.StripeWebhookRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  stripeConnectWebhook(
    request: api_proto_v1_payment_pb.StripeWebhookRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  stripeConnectWebhook(
    request: api_proto_v1_payment_pb.StripeWebhookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  stripeConnectWebhook(
    request: api_proto_v1_payment_pb.StripeWebhookRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/StripeConnectWebhook',
        request,
        metadata || {},
        this.methodInfoStripeConnectWebhook,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/StripeConnectWebhook',
    request,
    metadata || {},
    this.methodInfoStripeConnectWebhook);
  }

  methodInfoSubscribeToPlan = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_payment_pb.Customer,
    (request: api_proto_v1_payment_pb.SubscribeToPlanRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_payment_pb.Customer.deserializeBinary
  );

  subscribeToPlan(
    request: api_proto_v1_payment_pb.SubscribeToPlanRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_payment_pb.Customer>;

  subscribeToPlan(
    request: api_proto_v1_payment_pb.SubscribeToPlanRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_payment_pb.Customer) => void): grpcWeb.ClientReadableStream<api_proto_v1_payment_pb.Customer>;

  subscribeToPlan(
    request: api_proto_v1_payment_pb.SubscribeToPlanRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_payment_pb.Customer) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/SubscribeToPlan',
        request,
        metadata || {},
        this.methodInfoSubscribeToPlan,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/SubscribeToPlan',
    request,
    metadata || {},
    this.methodInfoSubscribeToPlan);
  }

  methodInfoRetryInvoice = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_payment_pb.Invoice,
    (request: api_proto_v1_payment_pb.RetryInvoiceRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_payment_pb.Invoice.deserializeBinary
  );

  retryInvoice(
    request: api_proto_v1_payment_pb.RetryInvoiceRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_payment_pb.Invoice>;

  retryInvoice(
    request: api_proto_v1_payment_pb.RetryInvoiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_payment_pb.Invoice) => void): grpcWeb.ClientReadableStream<api_proto_v1_payment_pb.Invoice>;

  retryInvoice(
    request: api_proto_v1_payment_pb.RetryInvoiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_payment_pb.Invoice) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/RetryInvoice',
        request,
        metadata || {},
        this.methodInfoRetryInvoice,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/RetryInvoice',
    request,
    metadata || {},
    this.methodInfoRetryInvoice);
  }

  methodInfoGetSubscriptionByID = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_payment_pb.GetSubscriptionByIDResponse,
    (request: api_proto_v1_payment_pb.GetSubscriptionByIDRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_payment_pb.GetSubscriptionByIDResponse.deserializeBinary
  );

  getSubscriptionByID(
    request: api_proto_v1_payment_pb.GetSubscriptionByIDRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_payment_pb.GetSubscriptionByIDResponse>;

  getSubscriptionByID(
    request: api_proto_v1_payment_pb.GetSubscriptionByIDRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_payment_pb.GetSubscriptionByIDResponse) => void): grpcWeb.ClientReadableStream<api_proto_v1_payment_pb.GetSubscriptionByIDResponse>;

  getSubscriptionByID(
    request: api_proto_v1_payment_pb.GetSubscriptionByIDRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_payment_pb.GetSubscriptionByIDResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/GetSubscriptionByID',
        request,
        metadata || {},
        this.methodInfoGetSubscriptionByID,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/GetSubscriptionByID',
    request,
    metadata || {},
    this.methodInfoGetSubscriptionByID);
  }

  methodInfoCreateSetupIntent = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_payment_pb.CreateSetupIntentResponse,
    (request: api_proto_v1_payment_pb.CreateSetupIntentRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_payment_pb.CreateSetupIntentResponse.deserializeBinary
  );

  createSetupIntent(
    request: api_proto_v1_payment_pb.CreateSetupIntentRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_payment_pb.CreateSetupIntentResponse>;

  createSetupIntent(
    request: api_proto_v1_payment_pb.CreateSetupIntentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_payment_pb.CreateSetupIntentResponse) => void): grpcWeb.ClientReadableStream<api_proto_v1_payment_pb.CreateSetupIntentResponse>;

  createSetupIntent(
    request: api_proto_v1_payment_pb.CreateSetupIntentRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_payment_pb.CreateSetupIntentResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/CreateSetupIntent',
        request,
        metadata || {},
        this.methodInfoCreateSetupIntent,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/CreateSetupIntent',
    request,
    metadata || {},
    this.methodInfoCreateSetupIntent);
  }

  methodInfoAttachPaymentMethod = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_payment_pb.PaymentMethod,
    (request: api_proto_v1_payment_pb.AttachPaymentMethodRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_payment_pb.PaymentMethod.deserializeBinary
  );

  attachPaymentMethod(
    request: api_proto_v1_payment_pb.AttachPaymentMethodRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_payment_pb.PaymentMethod>;

  attachPaymentMethod(
    request: api_proto_v1_payment_pb.AttachPaymentMethodRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_payment_pb.PaymentMethod) => void): grpcWeb.ClientReadableStream<api_proto_v1_payment_pb.PaymentMethod>;

  attachPaymentMethod(
    request: api_proto_v1_payment_pb.AttachPaymentMethodRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_payment_pb.PaymentMethod) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/AttachPaymentMethod',
        request,
        metadata || {},
        this.methodInfoAttachPaymentMethod,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/AttachPaymentMethod',
    request,
    metadata || {},
    this.methodInfoAttachPaymentMethod);
  }

  methodInfoUpdateSubscription = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_payment_pb.Customer,
    (request: api_proto_v1_payment_pb.UpdateSubscriptionRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_payment_pb.Customer.deserializeBinary
  );

  updateSubscription(
    request: api_proto_v1_payment_pb.UpdateSubscriptionRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_payment_pb.Customer>;

  updateSubscription(
    request: api_proto_v1_payment_pb.UpdateSubscriptionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_payment_pb.Customer) => void): grpcWeb.ClientReadableStream<api_proto_v1_payment_pb.Customer>;

  updateSubscription(
    request: api_proto_v1_payment_pb.UpdateSubscriptionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_payment_pb.Customer) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/UpdateSubscription',
        request,
        metadata || {},
        this.methodInfoUpdateSubscription,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/UpdateSubscription',
    request,
    metadata || {},
    this.methodInfoUpdateSubscription);
  }

  methodInfoInvoicePreview = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_payment_pb.Invoice,
    (request: api_proto_v1_payment_pb.InvoicePreviewRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_payment_pb.Invoice.deserializeBinary
  );

  invoicePreview(
    request: api_proto_v1_payment_pb.InvoicePreviewRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_payment_pb.Invoice>;

  invoicePreview(
    request: api_proto_v1_payment_pb.InvoicePreviewRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_payment_pb.Invoice) => void): grpcWeb.ClientReadableStream<api_proto_v1_payment_pb.Invoice>;

  invoicePreview(
    request: api_proto_v1_payment_pb.InvoicePreviewRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_payment_pb.Invoice) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/InvoicePreview',
        request,
        metadata || {},
        this.methodInfoInvoicePreview,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/InvoicePreview',
    request,
    metadata || {},
    this.methodInfoInvoicePreview);
  }

  methodInfoCouponCheck = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_payment_pb.CouponCheckResponse,
    (request: api_proto_v1_payment_pb.CouponCheckRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_payment_pb.CouponCheckResponse.deserializeBinary
  );

  couponCheck(
    request: api_proto_v1_payment_pb.CouponCheckRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_payment_pb.CouponCheckResponse>;

  couponCheck(
    request: api_proto_v1_payment_pb.CouponCheckRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_payment_pb.CouponCheckResponse) => void): grpcWeb.ClientReadableStream<api_proto_v1_payment_pb.CouponCheckResponse>;

  couponCheck(
    request: api_proto_v1_payment_pb.CouponCheckRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_payment_pb.CouponCheckResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/CouponCheck',
        request,
        metadata || {},
        this.methodInfoCouponCheck,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/CouponCheck',
    request,
    metadata || {},
    this.methodInfoCouponCheck);
  }

  methodInfoGetConnectAccountLink = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_payment_pb.GetConnectAccountLinkResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    api_proto_v1_payment_pb.GetConnectAccountLinkResponse.deserializeBinary
  );

  getConnectAccountLink(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_payment_pb.GetConnectAccountLinkResponse>;

  getConnectAccountLink(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_payment_pb.GetConnectAccountLinkResponse) => void): grpcWeb.ClientReadableStream<api_proto_v1_payment_pb.GetConnectAccountLinkResponse>;

  getConnectAccountLink(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_payment_pb.GetConnectAccountLinkResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/GetConnectAccountLink',
        request,
        metadata || {},
        this.methodInfoGetConnectAccountLink,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/GetConnectAccountLink',
    request,
    metadata || {},
    this.methodInfoGetConnectAccountLink);
  }

  methodInfoMakeDonation = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_payment_pb.ConnectedPaymentIntentResponse,
    (request: api_proto_v1_payment_pb.MakeDonationRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_payment_pb.ConnectedPaymentIntentResponse.deserializeBinary
  );

  makeDonation(
    request: api_proto_v1_payment_pb.MakeDonationRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_payment_pb.ConnectedPaymentIntentResponse>;

  makeDonation(
    request: api_proto_v1_payment_pb.MakeDonationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_payment_pb.ConnectedPaymentIntentResponse) => void): grpcWeb.ClientReadableStream<api_proto_v1_payment_pb.ConnectedPaymentIntentResponse>;

  makeDonation(
    request: api_proto_v1_payment_pb.MakeDonationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_payment_pb.ConnectedPaymentIntentResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/MakeDonation',
        request,
        metadata || {},
        this.methodInfoMakeDonation,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/MakeDonation',
    request,
    metadata || {},
    this.methodInfoMakeDonation);
  }

  methodInfoPayRoomEntrance = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_payment_pb.ConnectedPaymentIntentResponse,
    (request: api_proto_v1_payment_pb.PayRoomEntranceRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_payment_pb.ConnectedPaymentIntentResponse.deserializeBinary
  );

  payRoomEntrance(
    request: api_proto_v1_payment_pb.PayRoomEntranceRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_payment_pb.ConnectedPaymentIntentResponse>;

  payRoomEntrance(
    request: api_proto_v1_payment_pb.PayRoomEntranceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_payment_pb.ConnectedPaymentIntentResponse) => void): grpcWeb.ClientReadableStream<api_proto_v1_payment_pb.ConnectedPaymentIntentResponse>;

  payRoomEntrance(
    request: api_proto_v1_payment_pb.PayRoomEntranceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_payment_pb.ConnectedPaymentIntentResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/PayRoomEntrance',
        request,
        metadata || {},
        this.methodInfoPayRoomEntrance,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/PayRoomEntrance',
    request,
    metadata || {},
    this.methodInfoPayRoomEntrance);
  }

  methodInfoCreateStripeAccount = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_payment_pb.Customer,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    api_proto_v1_payment_pb.Customer.deserializeBinary
  );

  createStripeAccount(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_payment_pb.Customer>;

  createStripeAccount(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_payment_pb.Customer) => void): grpcWeb.ClientReadableStream<api_proto_v1_payment_pb.Customer>;

  createStripeAccount(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_payment_pb.Customer) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/CreateStripeAccount',
        request,
        metadata || {},
        this.methodInfoCreateStripeAccount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/CreateStripeAccount',
    request,
    metadata || {},
    this.methodInfoCreateStripeAccount);
  }

  methodInfoGetDashboardLink = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_payment_pb.GetDashboardLinkResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    api_proto_v1_payment_pb.GetDashboardLinkResponse.deserializeBinary
  );

  getDashboardLink(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_payment_pb.GetDashboardLinkResponse>;

  getDashboardLink(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_payment_pb.GetDashboardLinkResponse) => void): grpcWeb.ClientReadableStream<api_proto_v1_payment_pb.GetDashboardLinkResponse>;

  getDashboardLink(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_payment_pb.GetDashboardLinkResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/GetDashboardLink',
        request,
        metadata || {},
        this.methodInfoGetDashboardLink,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/GetDashboardLink',
    request,
    metadata || {},
    this.methodInfoGetDashboardLink);
  }

  methodInfoCheckRoomEntrancePI = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_payment_pb.CheckRoomEntrancePIResponse,
    (request: api_proto_v1_payment_pb.CheckRoomEntrancePIRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_payment_pb.CheckRoomEntrancePIResponse.deserializeBinary
  );

  checkRoomEntrancePI(
    request: api_proto_v1_payment_pb.CheckRoomEntrancePIRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_payment_pb.CheckRoomEntrancePIResponse>;

  checkRoomEntrancePI(
    request: api_proto_v1_payment_pb.CheckRoomEntrancePIRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_payment_pb.CheckRoomEntrancePIResponse) => void): grpcWeb.ClientReadableStream<api_proto_v1_payment_pb.CheckRoomEntrancePIResponse>;

  checkRoomEntrancePI(
    request: api_proto_v1_payment_pb.CheckRoomEntrancePIRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_payment_pb.CheckRoomEntrancePIResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/CheckRoomEntrancePI',
        request,
        metadata || {},
        this.methodInfoCheckRoomEntrancePI,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/CheckRoomEntrancePI',
    request,
    metadata || {},
    this.methodInfoCheckRoomEntrancePI);
  }

  methodInfoSubscribeToRoom = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_payment_pb.SubscribeToRoomResponse,
    (request: api_proto_v1_payment_pb.SubscribeToRoomRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_payment_pb.SubscribeToRoomResponse.deserializeBinary
  );

  subscribeToRoom(
    request: api_proto_v1_payment_pb.SubscribeToRoomRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_payment_pb.SubscribeToRoomResponse>;

  subscribeToRoom(
    request: api_proto_v1_payment_pb.SubscribeToRoomRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_payment_pb.SubscribeToRoomResponse) => void): grpcWeb.ClientReadableStream<api_proto_v1_payment_pb.SubscribeToRoomResponse>;

  subscribeToRoom(
    request: api_proto_v1_payment_pb.SubscribeToRoomRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_payment_pb.SubscribeToRoomResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/SubscribeToRoom',
        request,
        metadata || {},
        this.methodInfoSubscribeToRoom,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/SubscribeToRoom',
    request,
    metadata || {},
    this.methodInfoSubscribeToRoom);
  }

  methodInfoGetRoomSubscriptions = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_payment_pb.GetRoomSubscriptionsResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    api_proto_v1_payment_pb.GetRoomSubscriptionsResponse.deserializeBinary
  );

  getRoomSubscriptions(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_payment_pb.GetRoomSubscriptionsResponse>;

  getRoomSubscriptions(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_payment_pb.GetRoomSubscriptionsResponse) => void): grpcWeb.ClientReadableStream<api_proto_v1_payment_pb.GetRoomSubscriptionsResponse>;

  getRoomSubscriptions(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_payment_pb.GetRoomSubscriptionsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/GetRoomSubscriptions',
        request,
        metadata || {},
        this.methodInfoGetRoomSubscriptions,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/GetRoomSubscriptions',
    request,
    metadata || {},
    this.methodInfoGetRoomSubscriptions);
  }

  methodInfoConfirmRoomSubscription = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_payment_pb.ConfirmRoomSubscriptionResponse,
    (request: api_proto_v1_payment_pb.ConfirmRoomSubscriptionRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_payment_pb.ConfirmRoomSubscriptionResponse.deserializeBinary
  );

  confirmRoomSubscription(
    request: api_proto_v1_payment_pb.ConfirmRoomSubscriptionRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_payment_pb.ConfirmRoomSubscriptionResponse>;

  confirmRoomSubscription(
    request: api_proto_v1_payment_pb.ConfirmRoomSubscriptionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_payment_pb.ConfirmRoomSubscriptionResponse) => void): grpcWeb.ClientReadableStream<api_proto_v1_payment_pb.ConfirmRoomSubscriptionResponse>;

  confirmRoomSubscription(
    request: api_proto_v1_payment_pb.ConfirmRoomSubscriptionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_payment_pb.ConfirmRoomSubscriptionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/ConfirmRoomSubscription',
        request,
        metadata || {},
        this.methodInfoConfirmRoomSubscription,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/ConfirmRoomSubscription',
    request,
    metadata || {},
    this.methodInfoConfirmRoomSubscription);
  }

  methodInfoRetryRoomSubscription = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_payment_pb.ConnectedPaymentIntentResponse,
    (request: api_proto_v1_payment_pb.RetryRoomSubscriptionRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_payment_pb.ConnectedPaymentIntentResponse.deserializeBinary
  );

  retryRoomSubscription(
    request: api_proto_v1_payment_pb.RetryRoomSubscriptionRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_payment_pb.ConnectedPaymentIntentResponse>;

  retryRoomSubscription(
    request: api_proto_v1_payment_pb.RetryRoomSubscriptionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_payment_pb.ConnectedPaymentIntentResponse) => void): grpcWeb.ClientReadableStream<api_proto_v1_payment_pb.ConnectedPaymentIntentResponse>;

  retryRoomSubscription(
    request: api_proto_v1_payment_pb.RetryRoomSubscriptionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_payment_pb.ConnectedPaymentIntentResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/RetryRoomSubscription',
        request,
        metadata || {},
        this.methodInfoRetryRoomSubscription,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/RetryRoomSubscription',
    request,
    metadata || {},
    this.methodInfoRetryRoomSubscription);
  }

  methodInfoGetRoomSubscriptionByRoomID = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_payment_pb.GetRoomSubscriptionByRoomIDResponse,
    (request: api_proto_v1_payment_pb.GetRoomSubscriptionByRoomIDRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_payment_pb.GetRoomSubscriptionByRoomIDResponse.deserializeBinary
  );

  getRoomSubscriptionByRoomID(
    request: api_proto_v1_payment_pb.GetRoomSubscriptionByRoomIDRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_payment_pb.GetRoomSubscriptionByRoomIDResponse>;

  getRoomSubscriptionByRoomID(
    request: api_proto_v1_payment_pb.GetRoomSubscriptionByRoomIDRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_payment_pb.GetRoomSubscriptionByRoomIDResponse) => void): grpcWeb.ClientReadableStream<api_proto_v1_payment_pb.GetRoomSubscriptionByRoomIDResponse>;

  getRoomSubscriptionByRoomID(
    request: api_proto_v1_payment_pb.GetRoomSubscriptionByRoomIDRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_payment_pb.GetRoomSubscriptionByRoomIDResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/GetRoomSubscriptionByRoomID',
        request,
        metadata || {},
        this.methodInfoGetRoomSubscriptionByRoomID,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/GetRoomSubscriptionByRoomID',
    request,
    metadata || {},
    this.methodInfoGetRoomSubscriptionByRoomID);
  }

  methodInfoGetOwnConnectedAccount = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_payment_pb.GetOwnConnectedAccountResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    api_proto_v1_payment_pb.GetOwnConnectedAccountResponse.deserializeBinary
  );

  getOwnConnectedAccount(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_payment_pb.GetOwnConnectedAccountResponse>;

  getOwnConnectedAccount(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_payment_pb.GetOwnConnectedAccountResponse) => void): grpcWeb.ClientReadableStream<api_proto_v1_payment_pb.GetOwnConnectedAccountResponse>;

  getOwnConnectedAccount(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_payment_pb.GetOwnConnectedAccountResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/GetOwnConnectedAccount',
        request,
        metadata || {},
        this.methodInfoGetOwnConnectedAccount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/GetOwnConnectedAccount',
    request,
    metadata || {},
    this.methodInfoGetOwnConnectedAccount);
  }

  methodInfoGetMessages = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_chat_pb.GetMessagesResponse,
    (request: api_proto_v1_chat_pb.GetMessagesRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_chat_pb.GetMessagesResponse.deserializeBinary
  );

  getMessages(
    request: api_proto_v1_chat_pb.GetMessagesRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_chat_pb.GetMessagesResponse>;

  getMessages(
    request: api_proto_v1_chat_pb.GetMessagesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_chat_pb.GetMessagesResponse) => void): grpcWeb.ClientReadableStream<api_proto_v1_chat_pb.GetMessagesResponse>;

  getMessages(
    request: api_proto_v1_chat_pb.GetMessagesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_chat_pb.GetMessagesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/GetMessages',
        request,
        metadata || {},
        this.methodInfoGetMessages,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/GetMessages',
    request,
    metadata || {},
    this.methodInfoGetMessages);
  }

  methodInfoListenForMessages = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_chat_pb.ChatMessage,
    (request: api_proto_v1_chat_pb.ListenForMessagesRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_chat_pb.ChatMessage.deserializeBinary
  );

  listenForMessages(
    request: api_proto_v1_chat_pb.ListenForMessagesRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/v1.UnpaperService/ListenForMessages',
      request,
      metadata || {},
      this.methodInfoListenForMessages);
  }

  methodInfoSendMessage = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: api_proto_v1_chat_pb.SendMessageRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  sendMessage(
    request: api_proto_v1_chat_pb.SendMessageRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  sendMessage(
    request: api_proto_v1_chat_pb.SendMessageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  sendMessage(
    request: api_proto_v1_chat_pb.SendMessageRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/SendMessage',
        request,
        metadata || {},
        this.methodInfoSendMessage,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/SendMessage',
    request,
    metadata || {},
    this.methodInfoSendMessage);
  }

  methodInfoSendAward = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: api_proto_v1_chat_pb.SendAwardRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  sendAward(
    request: api_proto_v1_chat_pb.SendAwardRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  sendAward(
    request: api_proto_v1_chat_pb.SendAwardRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  sendAward(
    request: api_proto_v1_chat_pb.SendAwardRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/SendAward',
        request,
        metadata || {},
        this.methodInfoSendAward,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/SendAward',
    request,
    metadata || {},
    this.methodInfoSendAward);
  }

  methodInfoSendDonation = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: api_proto_v1_chat_pb.SendDonationRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  sendDonation(
    request: api_proto_v1_chat_pb.SendDonationRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  sendDonation(
    request: api_proto_v1_chat_pb.SendDonationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  sendDonation(
    request: api_proto_v1_chat_pb.SendDonationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/SendDonation',
        request,
        metadata || {},
        this.methodInfoSendDonation,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/SendDonation',
    request,
    metadata || {},
    this.methodInfoSendDonation);
  }

  methodInfoSendAudio = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: api_proto_v1_chat_pb.SendAudioRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  sendAudio(
    request: api_proto_v1_chat_pb.SendAudioRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  sendAudio(
    request: api_proto_v1_chat_pb.SendAudioRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  sendAudio(
    request: api_proto_v1_chat_pb.SendAudioRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/SendAudio',
        request,
        metadata || {},
        this.methodInfoSendAudio,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/SendAudio',
    request,
    metadata || {},
    this.methodInfoSendAudio);
  }

  methodInfoCreateList = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_chat_pb.List,
    (request: api_proto_v1_chat_pb.CreateListRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_chat_pb.List.deserializeBinary
  );

  createList(
    request: api_proto_v1_chat_pb.CreateListRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_chat_pb.List>;

  createList(
    request: api_proto_v1_chat_pb.CreateListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_chat_pb.List) => void): grpcWeb.ClientReadableStream<api_proto_v1_chat_pb.List>;

  createList(
    request: api_proto_v1_chat_pb.CreateListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_chat_pb.List) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/CreateList',
        request,
        metadata || {},
        this.methodInfoCreateList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/CreateList',
    request,
    metadata || {},
    this.methodInfoCreateList);
  }

  methodInfoUpdateList = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_chat_pb.List,
    (request: api_proto_v1_chat_pb.UpdateListRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_chat_pb.List.deserializeBinary
  );

  updateList(
    request: api_proto_v1_chat_pb.UpdateListRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_chat_pb.List>;

  updateList(
    request: api_proto_v1_chat_pb.UpdateListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_chat_pb.List) => void): grpcWeb.ClientReadableStream<api_proto_v1_chat_pb.List>;

  updateList(
    request: api_proto_v1_chat_pb.UpdateListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_chat_pb.List) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/UpdateList',
        request,
        metadata || {},
        this.methodInfoUpdateList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/UpdateList',
    request,
    metadata || {},
    this.methodInfoUpdateList);
  }

  methodInfoGetUserSuggestions = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_chat_pb.GetUserSuggestionsResponse,
    (request: api_proto_v1_chat_pb.GetUserSuggestionsRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_chat_pb.GetUserSuggestionsResponse.deserializeBinary
  );

  getUserSuggestions(
    request: api_proto_v1_chat_pb.GetUserSuggestionsRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_chat_pb.GetUserSuggestionsResponse>;

  getUserSuggestions(
    request: api_proto_v1_chat_pb.GetUserSuggestionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_chat_pb.GetUserSuggestionsResponse) => void): grpcWeb.ClientReadableStream<api_proto_v1_chat_pb.GetUserSuggestionsResponse>;

  getUserSuggestions(
    request: api_proto_v1_chat_pb.GetUserSuggestionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_chat_pb.GetUserSuggestionsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/GetUserSuggestions',
        request,
        metadata || {},
        this.methodInfoGetUserSuggestions,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/GetUserSuggestions',
    request,
    metadata || {},
    this.methodInfoGetUserSuggestions);
  }

  methodInfoGetAllLists = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_chat_pb.GetAllListsResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    api_proto_v1_chat_pb.GetAllListsResponse.deserializeBinary
  );

  getAllLists(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_chat_pb.GetAllListsResponse>;

  getAllLists(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_chat_pb.GetAllListsResponse) => void): grpcWeb.ClientReadableStream<api_proto_v1_chat_pb.GetAllListsResponse>;

  getAllLists(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_chat_pb.GetAllListsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/GetAllLists',
        request,
        metadata || {},
        this.methodInfoGetAllLists,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/GetAllLists',
    request,
    metadata || {},
    this.methodInfoGetAllLists);
  }

  methodInfoGetListByID = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_chat_pb.List,
    (request: api_proto_v1_chat_pb.GetListByIDRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_chat_pb.List.deserializeBinary
  );

  getListByID(
    request: api_proto_v1_chat_pb.GetListByIDRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_chat_pb.List>;

  getListByID(
    request: api_proto_v1_chat_pb.GetListByIDRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_chat_pb.List) => void): grpcWeb.ClientReadableStream<api_proto_v1_chat_pb.List>;

  getListByID(
    request: api_proto_v1_chat_pb.GetListByIDRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_chat_pb.List) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/GetListByID',
        request,
        metadata || {},
        this.methodInfoGetListByID,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/GetListByID',
    request,
    metadata || {},
    this.methodInfoGetListByID);
  }

  methodInfoRoomAccessCheck = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_chat_pb.RoomAccessCheckResponse,
    (request: api_proto_v1_chat_pb.RoomAccessCheckRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_chat_pb.RoomAccessCheckResponse.deserializeBinary
  );

  roomAccessCheck(
    request: api_proto_v1_chat_pb.RoomAccessCheckRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_chat_pb.RoomAccessCheckResponse>;

  roomAccessCheck(
    request: api_proto_v1_chat_pb.RoomAccessCheckRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_chat_pb.RoomAccessCheckResponse) => void): grpcWeb.ClientReadableStream<api_proto_v1_chat_pb.RoomAccessCheckResponse>;

  roomAccessCheck(
    request: api_proto_v1_chat_pb.RoomAccessCheckRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_chat_pb.RoomAccessCheckResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/RoomAccessCheck',
        request,
        metadata || {},
        this.methodInfoRoomAccessCheck,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/RoomAccessCheck',
    request,
    metadata || {},
    this.methodInfoRoomAccessCheck);
  }

  methodInfoCreateConversation = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_chat_pb.CreateConversationResponse,
    (request: api_proto_v1_chat_pb.CreateConversationRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_chat_pb.CreateConversationResponse.deserializeBinary
  );

  createConversation(
    request: api_proto_v1_chat_pb.CreateConversationRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_chat_pb.CreateConversationResponse>;

  createConversation(
    request: api_proto_v1_chat_pb.CreateConversationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_chat_pb.CreateConversationResponse) => void): grpcWeb.ClientReadableStream<api_proto_v1_chat_pb.CreateConversationResponse>;

  createConversation(
    request: api_proto_v1_chat_pb.CreateConversationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_chat_pb.CreateConversationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/CreateConversation',
        request,
        metadata || {},
        this.methodInfoCreateConversation,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/CreateConversation',
    request,
    metadata || {},
    this.methodInfoCreateConversation);
  }

  methodInfoGetConversation = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_chat_pb.GetConversationResponse,
    (request: api_proto_v1_chat_pb.GetConversationRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_chat_pb.GetConversationResponse.deserializeBinary
  );

  getConversation(
    request: api_proto_v1_chat_pb.GetConversationRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_chat_pb.GetConversationResponse>;

  getConversation(
    request: api_proto_v1_chat_pb.GetConversationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_chat_pb.GetConversationResponse) => void): grpcWeb.ClientReadableStream<api_proto_v1_chat_pb.GetConversationResponse>;

  getConversation(
    request: api_proto_v1_chat_pb.GetConversationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_chat_pb.GetConversationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/GetConversation',
        request,
        metadata || {},
        this.methodInfoGetConversation,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/GetConversation',
    request,
    metadata || {},
    this.methodInfoGetConversation);
  }

  methodInfoGetConversations = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_chat_pb.GetConversationsResponse,
    (request: api_proto_v1_chat_pb.GetConversationsRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_chat_pb.GetConversationsResponse.deserializeBinary
  );

  getConversations(
    request: api_proto_v1_chat_pb.GetConversationsRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_chat_pb.GetConversationsResponse>;

  getConversations(
    request: api_proto_v1_chat_pb.GetConversationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_chat_pb.GetConversationsResponse) => void): grpcWeb.ClientReadableStream<api_proto_v1_chat_pb.GetConversationsResponse>;

  getConversations(
    request: api_proto_v1_chat_pb.GetConversationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_chat_pb.GetConversationsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/GetConversations',
        request,
        metadata || {},
        this.methodInfoGetConversations,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/GetConversations',
    request,
    metadata || {},
    this.methodInfoGetConversations);
  }

  methodInfoGetConversationWithParticipants = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_chat_pb.GetConversationWithParticipantsResponse,
    (request: api_proto_v1_chat_pb.GetConversationWithParticipantsRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_chat_pb.GetConversationWithParticipantsResponse.deserializeBinary
  );

  getConversationWithParticipants(
    request: api_proto_v1_chat_pb.GetConversationWithParticipantsRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_chat_pb.GetConversationWithParticipantsResponse>;

  getConversationWithParticipants(
    request: api_proto_v1_chat_pb.GetConversationWithParticipantsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_chat_pb.GetConversationWithParticipantsResponse) => void): grpcWeb.ClientReadableStream<api_proto_v1_chat_pb.GetConversationWithParticipantsResponse>;

  getConversationWithParticipants(
    request: api_proto_v1_chat_pb.GetConversationWithParticipantsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_chat_pb.GetConversationWithParticipantsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/GetConversationWithParticipants',
        request,
        metadata || {},
        this.methodInfoGetConversationWithParticipants,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/GetConversationWithParticipants',
    request,
    metadata || {},
    this.methodInfoGetConversationWithParticipants);
  }

  methodInfoListenForNotifications = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_notifications_pb.Notification,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    api_proto_v1_notifications_pb.Notification.deserializeBinary
  );

  listenForNotifications(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/v1.UnpaperService/ListenForNotifications',
      request,
      metadata || {},
      this.methodInfoListenForNotifications);
  }

  methodInfoGetAllNotifications = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_notifications_pb.GetAllNotificationsRes,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    api_proto_v1_notifications_pb.GetAllNotificationsRes.deserializeBinary
  );

  getAllNotifications(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_notifications_pb.GetAllNotificationsRes>;

  getAllNotifications(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_notifications_pb.GetAllNotificationsRes) => void): grpcWeb.ClientReadableStream<api_proto_v1_notifications_pb.GetAllNotificationsRes>;

  getAllNotifications(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_notifications_pb.GetAllNotificationsRes) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/GetAllNotifications',
        request,
        metadata || {},
        this.methodInfoGetAllNotifications,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/GetAllNotifications',
    request,
    metadata || {},
    this.methodInfoGetAllNotifications);
  }

  methodInfoReadNotification = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_notifications_pb.ReadNotificationResponse,
    (request: api_proto_v1_notifications_pb.ReadNotificationRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_notifications_pb.ReadNotificationResponse.deserializeBinary
  );

  readNotification(
    request: api_proto_v1_notifications_pb.ReadNotificationRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_notifications_pb.ReadNotificationResponse>;

  readNotification(
    request: api_proto_v1_notifications_pb.ReadNotificationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_notifications_pb.ReadNotificationResponse) => void): grpcWeb.ClientReadableStream<api_proto_v1_notifications_pb.ReadNotificationResponse>;

  readNotification(
    request: api_proto_v1_notifications_pb.ReadNotificationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_notifications_pb.ReadNotificationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/ReadNotification',
        request,
        metadata || {},
        this.methodInfoReadNotification,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/ReadNotification',
    request,
    metadata || {},
    this.methodInfoReadNotification);
  }

  methodInfoGetMixes = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_mixes_pb.GetMixesRes,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    api_proto_v1_mixes_pb.GetMixesRes.deserializeBinary
  );

  getMixes(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_mixes_pb.GetMixesRes>;

  getMixes(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_mixes_pb.GetMixesRes) => void): grpcWeb.ClientReadableStream<api_proto_v1_mixes_pb.GetMixesRes>;

  getMixes(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_mixes_pb.GetMixesRes) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/GetMixes',
        request,
        metadata || {},
        this.methodInfoGetMixes,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/GetMixes',
    request,
    metadata || {},
    this.methodInfoGetMixes);
  }

  methodInfoCreatePost = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_posts_pb.CreatePostResponse,
    (request: api_proto_v1_posts_pb.CreatePostRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_posts_pb.CreatePostResponse.deserializeBinary
  );

  createPost(
    request: api_proto_v1_posts_pb.CreatePostRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_posts_pb.CreatePostResponse>;

  createPost(
    request: api_proto_v1_posts_pb.CreatePostRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_posts_pb.CreatePostResponse) => void): grpcWeb.ClientReadableStream<api_proto_v1_posts_pb.CreatePostResponse>;

  createPost(
    request: api_proto_v1_posts_pb.CreatePostRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_posts_pb.CreatePostResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/CreatePost',
        request,
        metadata || {},
        this.methodInfoCreatePost,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/CreatePost',
    request,
    metadata || {},
    this.methodInfoCreatePost);
  }

  methodInfoGetPost = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_posts_pb.GetPostResponse,
    (request: api_proto_v1_posts_pb.GetPostRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_posts_pb.GetPostResponse.deserializeBinary
  );

  getPost(
    request: api_proto_v1_posts_pb.GetPostRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_posts_pb.GetPostResponse>;

  getPost(
    request: api_proto_v1_posts_pb.GetPostRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_posts_pb.GetPostResponse) => void): grpcWeb.ClientReadableStream<api_proto_v1_posts_pb.GetPostResponse>;

  getPost(
    request: api_proto_v1_posts_pb.GetPostRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_posts_pb.GetPostResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/GetPost',
        request,
        metadata || {},
        this.methodInfoGetPost,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/GetPost',
    request,
    metadata || {},
    this.methodInfoGetPost);
  }

  methodInfoGetPosts = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_posts_pb.GetPostsResponse,
    (request: api_proto_v1_posts_pb.GetPostsRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_posts_pb.GetPostsResponse.deserializeBinary
  );

  getPosts(
    request: api_proto_v1_posts_pb.GetPostsRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_posts_pb.GetPostsResponse>;

  getPosts(
    request: api_proto_v1_posts_pb.GetPostsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_posts_pb.GetPostsResponse) => void): grpcWeb.ClientReadableStream<api_proto_v1_posts_pb.GetPostsResponse>;

  getPosts(
    request: api_proto_v1_posts_pb.GetPostsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_posts_pb.GetPostsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/GetPosts',
        request,
        metadata || {},
        this.methodInfoGetPosts,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/GetPosts',
    request,
    metadata || {},
    this.methodInfoGetPosts);
  }

  methodInfoCreateComment = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_posts_pb.CreateCommentResponse,
    (request: api_proto_v1_posts_pb.CreateCommentRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_posts_pb.CreateCommentResponse.deserializeBinary
  );

  createComment(
    request: api_proto_v1_posts_pb.CreateCommentRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_posts_pb.CreateCommentResponse>;

  createComment(
    request: api_proto_v1_posts_pb.CreateCommentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_posts_pb.CreateCommentResponse) => void): grpcWeb.ClientReadableStream<api_proto_v1_posts_pb.CreateCommentResponse>;

  createComment(
    request: api_proto_v1_posts_pb.CreateCommentRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_posts_pb.CreateCommentResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/CreateComment',
        request,
        metadata || {},
        this.methodInfoCreateComment,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/CreateComment',
    request,
    metadata || {},
    this.methodInfoCreateComment);
  }

  methodInfoLikePost = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_posts_pb.LikePostResponse,
    (request: api_proto_v1_posts_pb.LikePostRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_posts_pb.LikePostResponse.deserializeBinary
  );

  likePost(
    request: api_proto_v1_posts_pb.LikePostRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_posts_pb.LikePostResponse>;

  likePost(
    request: api_proto_v1_posts_pb.LikePostRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_posts_pb.LikePostResponse) => void): grpcWeb.ClientReadableStream<api_proto_v1_posts_pb.LikePostResponse>;

  likePost(
    request: api_proto_v1_posts_pb.LikePostRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_posts_pb.LikePostResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/LikePost',
        request,
        metadata || {},
        this.methodInfoLikePost,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/LikePost',
    request,
    metadata || {},
    this.methodInfoLikePost);
  }

  methodInfoLikeComment = new grpcWeb.AbstractClientBase.MethodInfo(
    api_proto_v1_posts_pb.LikeCommentResponse,
    (request: api_proto_v1_posts_pb.LikeCommentRequest) => {
      return request.serializeBinary();
    },
    api_proto_v1_posts_pb.LikeCommentResponse.deserializeBinary
  );

  likeComment(
    request: api_proto_v1_posts_pb.LikeCommentRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_proto_v1_posts_pb.LikeCommentResponse>;

  likeComment(
    request: api_proto_v1_posts_pb.LikeCommentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_proto_v1_posts_pb.LikeCommentResponse) => void): grpcWeb.ClientReadableStream<api_proto_v1_posts_pb.LikeCommentResponse>;

  likeComment(
    request: api_proto_v1_posts_pb.LikeCommentRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_proto_v1_posts_pb.LikeCommentResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/v1.UnpaperService/LikeComment',
        request,
        metadata || {},
        this.methodInfoLikeComment,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/v1.UnpaperService/LikeComment',
    request,
    metadata || {},
    this.methodInfoLikeComment);
  }

}

