import { List } from 'api/proto/v1/chat_pb';

export type ListsModuleState = {
    lists: ListsState;
};

export type ListsState = {
    lists: List.AsObject[];
};
