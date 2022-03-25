import * as jspb from 'google-protobuf'



export class GoogleLoginRequest extends jspb.Message {
  getApi(): string;
  setApi(value: string): GoogleLoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoogleLoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GoogleLoginRequest): GoogleLoginRequest.AsObject;
  static serializeBinaryToWriter(message: GoogleLoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoogleLoginRequest;
  static deserializeBinaryFromReader(message: GoogleLoginRequest, reader: jspb.BinaryReader): GoogleLoginRequest;
}

export namespace GoogleLoginRequest {
  export type AsObject = {
    api: string,
  }
}

export class GoogleLoginResponse extends jspb.Message {
  getApi(): string;
  setApi(value: string): GoogleLoginResponse;

  getConsenturl(): string;
  setConsenturl(value: string): GoogleLoginResponse;

  getState(): string;
  setState(value: string): GoogleLoginResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoogleLoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GoogleLoginResponse): GoogleLoginResponse.AsObject;
  static serializeBinaryToWriter(message: GoogleLoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoogleLoginResponse;
  static deserializeBinaryFromReader(message: GoogleLoginResponse, reader: jspb.BinaryReader): GoogleLoginResponse;
}

export namespace GoogleLoginResponse {
  export type AsObject = {
    api: string,
    consenturl: string,
    state: string,
  }
}

export class GoogleCallbackRequest extends jspb.Message {
  getApi(): string;
  setApi(value: string): GoogleCallbackRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoogleCallbackRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GoogleCallbackRequest): GoogleCallbackRequest.AsObject;
  static serializeBinaryToWriter(message: GoogleCallbackRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoogleCallbackRequest;
  static deserializeBinaryFromReader(message: GoogleCallbackRequest, reader: jspb.BinaryReader): GoogleCallbackRequest;
}

export namespace GoogleCallbackRequest {
  export type AsObject = {
    api: string,
  }
}

export class EmailSignupRequest extends jspb.Message {
  getApi(): string;
  setApi(value: string): EmailSignupRequest;

  getUsername(): string;
  setUsername(value: string): EmailSignupRequest;

  getEmail(): string;
  setEmail(value: string): EmailSignupRequest;

  getPassword(): string;
  setPassword(value: string): EmailSignupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailSignupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EmailSignupRequest): EmailSignupRequest.AsObject;
  static serializeBinaryToWriter(message: EmailSignupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailSignupRequest;
  static deserializeBinaryFromReader(message: EmailSignupRequest, reader: jspb.BinaryReader): EmailSignupRequest;
}

export namespace EmailSignupRequest {
  export type AsObject = {
    api: string,
    username: string,
    email: string,
    password: string,
  }
}

export class EmailSigninRequest extends jspb.Message {
  getApi(): string;
  setApi(value: string): EmailSigninRequest;

  getEmail(): string;
  setEmail(value: string): EmailSigninRequest;

  getPassword(): string;
  setPassword(value: string): EmailSigninRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailSigninRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EmailSigninRequest): EmailSigninRequest.AsObject;
  static serializeBinaryToWriter(message: EmailSigninRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailSigninRequest;
  static deserializeBinaryFromReader(message: EmailSigninRequest, reader: jspb.BinaryReader): EmailSigninRequest;
}

export namespace EmailSigninRequest {
  export type AsObject = {
    api: string,
    email: string,
    password: string,
  }
}

export class EmailVerifyRequest extends jspb.Message {
  getVerificationToken(): string;
  setVerificationToken(value: string): EmailVerifyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailVerifyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EmailVerifyRequest): EmailVerifyRequest.AsObject;
  static serializeBinaryToWriter(message: EmailVerifyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailVerifyRequest;
  static deserializeBinaryFromReader(message: EmailVerifyRequest, reader: jspb.BinaryReader): EmailVerifyRequest;
}

export namespace EmailVerifyRequest {
  export type AsObject = {
    verificationToken: string,
  }
}

export class ChangePasswordRequest extends jspb.Message {
  getOldPassword(): string;
  setOldPassword(value: string): ChangePasswordRequest;

  getNewPassword(): string;
  setNewPassword(value: string): ChangePasswordRequest;

  getRepeat(): string;
  setRepeat(value: string): ChangePasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangePasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChangePasswordRequest): ChangePasswordRequest.AsObject;
  static serializeBinaryToWriter(message: ChangePasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangePasswordRequest;
  static deserializeBinaryFromReader(message: ChangePasswordRequest, reader: jspb.BinaryReader): ChangePasswordRequest;
}

export namespace ChangePasswordRequest {
  export type AsObject = {
    oldPassword: string,
    newPassword: string,
    repeat: string,
  }
}

export class UserInfoRequest extends jspb.Message {
  getApi(): string;
  setApi(value: string): UserInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserInfoRequest): UserInfoRequest.AsObject;
  static serializeBinaryToWriter(message: UserInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserInfoRequest;
  static deserializeBinaryFromReader(message: UserInfoRequest, reader: jspb.BinaryReader): UserInfoRequest;
}

export namespace UserInfoRequest {
  export type AsObject = {
    api: string,
  }
}

export class EmailCheckRequest extends jspb.Message {
  getApi(): string;
  setApi(value: string): EmailCheckRequest;

  getEmail(): string;
  setEmail(value: string): EmailCheckRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailCheckRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EmailCheckRequest): EmailCheckRequest.AsObject;
  static serializeBinaryToWriter(message: EmailCheckRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailCheckRequest;
  static deserializeBinaryFromReader(message: EmailCheckRequest, reader: jspb.BinaryReader): EmailCheckRequest;
}

export namespace EmailCheckRequest {
  export type AsObject = {
    api: string,
    email: string,
  }
}

export class SendResetLinkRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): SendResetLinkRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendResetLinkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendResetLinkRequest): SendResetLinkRequest.AsObject;
  static serializeBinaryToWriter(message: SendResetLinkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendResetLinkRequest;
  static deserializeBinaryFromReader(message: SendResetLinkRequest, reader: jspb.BinaryReader): SendResetLinkRequest;
}

export namespace SendResetLinkRequest {
  export type AsObject = {
    email: string,
  }
}

export class ResetPasswordRequest extends jspb.Message {
  getVerificationToken(): string;
  setVerificationToken(value: string): ResetPasswordRequest;

  getNewPassword(): string;
  setNewPassword(value: string): ResetPasswordRequest;

  getRepeat(): string;
  setRepeat(value: string): ResetPasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResetPasswordRequest): ResetPasswordRequest.AsObject;
  static serializeBinaryToWriter(message: ResetPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetPasswordRequest;
  static deserializeBinaryFromReader(message: ResetPasswordRequest, reader: jspb.BinaryReader): ResetPasswordRequest;
}

export namespace ResetPasswordRequest {
  export type AsObject = {
    verificationToken: string,
    newPassword: string,
    repeat: string,
  }
}

export class User extends jspb.Message {
  getApi(): string;
  setApi(value: string): User;

  getId(): string;
  setId(value: string): User;

  getEmail(): string;
  setEmail(value: string): User;

  getGivenName(): string;
  setGivenName(value: string): User;

  getFamilyName(): string;
  setFamilyName(value: string): User;

  getEmailVerified(): boolean;
  setEmailVerified(value: boolean): User;

  getType(): UserType;
  setType(value: UserType): User;

  getUsername(): string;
  setUsername(value: string): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    api: string,
    id: string,
    email: string,
    givenName: string,
    familyName: string,
    emailVerified: boolean,
    type: UserType,
    username: string,
  }
}

export class UpdateUsernameRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): UpdateUsernameRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUsernameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUsernameRequest): UpdateUsernameRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateUsernameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUsernameRequest;
  static deserializeBinaryFromReader(message: UpdateUsernameRequest, reader: jspb.BinaryReader): UpdateUsernameRequest;
}

export namespace UpdateUsernameRequest {
  export type AsObject = {
    username: string,
  }
}

export class ExtUserInfoRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): ExtUserInfoRequest;

  getUsername(): string;
  setUsername(value: string): ExtUserInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtUserInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExtUserInfoRequest): ExtUserInfoRequest.AsObject;
  static serializeBinaryToWriter(message: ExtUserInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExtUserInfoRequest;
  static deserializeBinaryFromReader(message: ExtUserInfoRequest, reader: jspb.BinaryReader): ExtUserInfoRequest;
}

export namespace ExtUserInfoRequest {
  export type AsObject = {
    userId: string,
    username: string,
  }
}

export class ExtUserInfo extends jspb.Message {
  getId(): string;
  setId(value: string): ExtUserInfo;

  getEmail(): string;
  setEmail(value: string): ExtUserInfo;

  getGivenName(): string;
  setGivenName(value: string): ExtUserInfo;

  getFamilyName(): string;
  setFamilyName(value: string): ExtUserInfo;

  getUsername(): string;
  setUsername(value: string): ExtUserInfo;

  getIsFollowed(): boolean;
  setIsFollowed(value: boolean): ExtUserInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtUserInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ExtUserInfo): ExtUserInfo.AsObject;
  static serializeBinaryToWriter(message: ExtUserInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExtUserInfo;
  static deserializeBinaryFromReader(message: ExtUserInfo, reader: jspb.BinaryReader): ExtUserInfo;
}

export namespace ExtUserInfo {
  export type AsObject = {
    id: string,
    email: string,
    givenName: string,
    familyName: string,
    username: string,
    isFollowed: boolean,
  }
}

export class CustomerInfo extends jspb.Message {
  getHasConnectedAccount(): boolean;
  setHasConnectedAccount(value: boolean): CustomerInfo;

  getAccountId(): string;
  setAccountId(value: string): CustomerInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerInfo): CustomerInfo.AsObject;
  static serializeBinaryToWriter(message: CustomerInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerInfo;
  static deserializeBinaryFromReader(message: CustomerInfo, reader: jspb.BinaryReader): CustomerInfo;
}

export namespace CustomerInfo {
  export type AsObject = {
    hasConnectedAccount: boolean,
    accountId: string,
  }
}

export class ExtUserInfoResponse extends jspb.Message {
  getUserInfo(): ExtUserInfo | undefined;
  setUserInfo(value?: ExtUserInfo): ExtUserInfoResponse;
  hasUserInfo(): boolean;
  clearUserInfo(): ExtUserInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtUserInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExtUserInfoResponse): ExtUserInfoResponse.AsObject;
  static serializeBinaryToWriter(message: ExtUserInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExtUserInfoResponse;
  static deserializeBinaryFromReader(message: ExtUserInfoResponse, reader: jspb.BinaryReader): ExtUserInfoResponse;
}

export namespace ExtUserInfoResponse {
  export type AsObject = {
    userInfo?: ExtUserInfo.AsObject,
  }
}

export class ExtUserCustomerInfoResponse extends jspb.Message {
  getUserInfo(): ExtUserInfo | undefined;
  setUserInfo(value?: ExtUserInfo): ExtUserCustomerInfoResponse;
  hasUserInfo(): boolean;
  clearUserInfo(): ExtUserCustomerInfoResponse;

  getCustomerInfo(): CustomerInfo | undefined;
  setCustomerInfo(value?: CustomerInfo): ExtUserCustomerInfoResponse;
  hasCustomerInfo(): boolean;
  clearCustomerInfo(): ExtUserCustomerInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtUserCustomerInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExtUserCustomerInfoResponse): ExtUserCustomerInfoResponse.AsObject;
  static serializeBinaryToWriter(message: ExtUserCustomerInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExtUserCustomerInfoResponse;
  static deserializeBinaryFromReader(message: ExtUserCustomerInfoResponse, reader: jspb.BinaryReader): ExtUserCustomerInfoResponse;
}

export namespace ExtUserCustomerInfoResponse {
  export type AsObject = {
    userInfo?: ExtUserInfo.AsObject,
    customerInfo?: CustomerInfo.AsObject,
  }
}

export class FollowUserRequest extends jspb.Message {
  getUserIdToFollow(): string;
  setUserIdToFollow(value: string): FollowUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FollowUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FollowUserRequest): FollowUserRequest.AsObject;
  static serializeBinaryToWriter(message: FollowUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FollowUserRequest;
  static deserializeBinaryFromReader(message: FollowUserRequest, reader: jspb.BinaryReader): FollowUserRequest;
}

export namespace FollowUserRequest {
  export type AsObject = {
    userIdToFollow: string,
  }
}

export class GetFollowingRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): GetFollowingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFollowingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFollowingRequest): GetFollowingRequest.AsObject;
  static serializeBinaryToWriter(message: GetFollowingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFollowingRequest;
  static deserializeBinaryFromReader(message: GetFollowingRequest, reader: jspb.BinaryReader): GetFollowingRequest;
}

export namespace GetFollowingRequest {
  export type AsObject = {
    userId: string,
  }
}

export class GetFollowingResponse extends jspb.Message {
  getUsersList(): Array<ExtUserInfo>;
  setUsersList(value: Array<ExtUserInfo>): GetFollowingResponse;
  clearUsersList(): GetFollowingResponse;
  addUsers(value?: ExtUserInfo, index?: number): ExtUserInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFollowingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFollowingResponse): GetFollowingResponse.AsObject;
  static serializeBinaryToWriter(message: GetFollowingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFollowingResponse;
  static deserializeBinaryFromReader(message: GetFollowingResponse, reader: jspb.BinaryReader): GetFollowingResponse;
}

export namespace GetFollowingResponse {
  export type AsObject = {
    usersList: Array<ExtUserInfo.AsObject>,
  }
}

export class GetFollowersRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): GetFollowersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFollowersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFollowersRequest): GetFollowersRequest.AsObject;
  static serializeBinaryToWriter(message: GetFollowersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFollowersRequest;
  static deserializeBinaryFromReader(message: GetFollowersRequest, reader: jspb.BinaryReader): GetFollowersRequest;
}

export namespace GetFollowersRequest {
  export type AsObject = {
    userId: string,
  }
}

export class GetFollowersResponse extends jspb.Message {
  getUsersList(): Array<ExtUserInfo>;
  setUsersList(value: Array<ExtUserInfo>): GetFollowersResponse;
  clearUsersList(): GetFollowersResponse;
  addUsers(value?: ExtUserInfo, index?: number): ExtUserInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFollowersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFollowersResponse): GetFollowersResponse.AsObject;
  static serializeBinaryToWriter(message: GetFollowersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFollowersResponse;
  static deserializeBinaryFromReader(message: GetFollowersResponse, reader: jspb.BinaryReader): GetFollowersResponse;
}

export namespace GetFollowersResponse {
  export type AsObject = {
    usersList: Array<ExtUserInfo.AsObject>,
  }
}

export class GetFollowersCountRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): GetFollowersCountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFollowersCountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFollowersCountRequest): GetFollowersCountRequest.AsObject;
  static serializeBinaryToWriter(message: GetFollowersCountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFollowersCountRequest;
  static deserializeBinaryFromReader(message: GetFollowersCountRequest, reader: jspb.BinaryReader): GetFollowersCountRequest;
}

export namespace GetFollowersCountRequest {
  export type AsObject = {
    userId: string,
  }
}

export class GetFollowersCountResponse extends jspb.Message {
  getFollowersCount(): number;
  setFollowersCount(value: number): GetFollowersCountResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFollowersCountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFollowersCountResponse): GetFollowersCountResponse.AsObject;
  static serializeBinaryToWriter(message: GetFollowersCountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFollowersCountResponse;
  static deserializeBinaryFromReader(message: GetFollowersCountResponse, reader: jspb.BinaryReader): GetFollowersCountResponse;
}

export namespace GetFollowersCountResponse {
  export type AsObject = {
    followersCount: number,
  }
}

export class GetFollowingCountRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): GetFollowingCountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFollowingCountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFollowingCountRequest): GetFollowingCountRequest.AsObject;
  static serializeBinaryToWriter(message: GetFollowingCountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFollowingCountRequest;
  static deserializeBinaryFromReader(message: GetFollowingCountRequest, reader: jspb.BinaryReader): GetFollowingCountRequest;
}

export namespace GetFollowingCountRequest {
  export type AsObject = {
    userId: string,
  }
}

export class GetFollowingCountResponse extends jspb.Message {
  getFollowingCount(): number;
  setFollowingCount(value: number): GetFollowingCountResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFollowingCountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFollowingCountResponse): GetFollowingCountResponse.AsObject;
  static serializeBinaryToWriter(message: GetFollowingCountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFollowingCountResponse;
  static deserializeBinaryFromReader(message: GetFollowingCountResponse, reader: jspb.BinaryReader): GetFollowingCountResponse;
}

export namespace GetFollowingCountResponse {
  export type AsObject = {
    followingCount: number,
  }
}

export enum UserType { 
  MEMBER = 0,
  CREATOR = 1,
}
