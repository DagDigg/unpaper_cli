import { ExtUserInfo } from 'api/proto/v1/auth_pb';
import { UserSuggestion } from 'api/proto/v1/chat_pb';
import { NormalizedState } from 'common/entities';

export type UsersModuleState = {
    mainUsers: UsersState;
};

export type UsersState = {
    userSuggestions: UserSuggestion.AsObject[];
    extUserInfos: NormalizedState<ExtUserInfo.AsObject>;
};
