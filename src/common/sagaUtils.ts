import { all, delay, fork, put, race, take } from 'redux-saga/effects';
import { EmptyActionCreator, PayloadActionCreator } from 'typesafe-actions';

export function* hasSucceeded(asyncAction: { request: any; success: any; failure: any }) {
    // Set up timeout
    yield fork(function* () {
        yield delay(3000);
        return false;
    });

    const { failure } = yield race({ success: take(asyncAction.success), failure: take(asyncAction.failure) });
    if (failure) {
        return false;
    }
    return true;
}

interface GenericActionGroup {
    request: GenericAsyncActionCreator;
    success: GenericAsyncActionCreator;
    failure: GenericAsyncActionCreator;
}
interface EmptyActionGroup {
    request: EmptyActionCreator<string>;
    success: GenericAsyncActionCreator;
    failure: GenericAsyncActionCreator;
}
interface PayloadActionGroup {
    request: PayloadActionCreator<string, any>;
    success: GenericAsyncActionCreator;
    failure: GenericAsyncActionCreator;
}

type GenericAsyncActionCreator = EmptyActionCreator<string> | PayloadActionCreator<string, any>;

export type Result<T extends GenericActionGroup> = {
    request: ReturnType<T['request']>;
    success: ReturnType<T['success']>;
    failure: ReturnType<T['failure']>;
    isSuccess: boolean;
};

type PayloadOf<A> = A extends PayloadActionCreator<string, any>
    ? ReturnType<PayloadActionCreator<string, ReturnType<A>['payload']>>['payload']
    : never;

type AsyncAllResult<T extends GenericActionGroup> = [
    ReturnType<T['request']>,
    {
        success: ReturnType<T['success']>;
        failure: ReturnType<T['failure']>;
        timeout: boolean;
    },
];

type Options = {
    timeout?: number;
};

export function putAsyncAction<T extends PayloadActionGroup>(action: T, params: PayloadOf<T['request']>): Generator<any, Result<T>, any>;
export function putAsyncAction<T extends PayloadActionGroup>(
    action: T,
    params: PayloadOf<T['request']>,
    options: Options,
): Generator<any, Result<T>, any>;

export function putAsyncAction<T extends EmptyActionGroup>(action: T): Generator<any, Result<T>, any>;
export function putAsyncAction<T extends EmptyActionGroup>(action: T, options: Options): Generator<any, Result<T>, any>;
export function putAsyncAction<T extends GenericActionGroup>(
    action: T,
    params: PayloadOf<T['request']>,
    options: Options,
): Generator<any, Result<T>, any>;

export function* putAsyncAction<T extends GenericActionGroup>(
    action: T,
    params?: PayloadOf<T['request']>,
    options?: Options,
): Generator<any, Result<T>, any> {
    const [request, { success, failure, timeout }]: AsyncAllResult<T> = yield all([
        put(action.request(params)),
        race({
            success: take(action.success),
            failure: take(action.failure),
            timeout: delay(options?.timeout ?? 30000),
        }),
    ]);

    return {
        request,
        success,
        failure,
        isSuccess: !!success && !timeout,
    };
}
