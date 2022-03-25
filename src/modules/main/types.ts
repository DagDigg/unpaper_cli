export type MainModuleState = {
    main: MainState;
};

export type MainState = {
    api: string;
    appPlan: AppPlan;
};

export enum AppPlan {
    Free = 'FREE',
    Plus = 'PLUS',
}
