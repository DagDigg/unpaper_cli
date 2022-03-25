export type MainListsState = {
    listModalStatus: ListModalStatus;
};

export type MainListsModuleState = {
    mainLists: MainListsState;
};

export enum ListModalStatus {
    Closed,
    Creating,
    CreatingLoading,
    Editing,
    EditingLoading,
}
