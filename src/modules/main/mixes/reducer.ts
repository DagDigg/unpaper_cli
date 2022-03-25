import { ActionType, createReducer } from 'typesafe-actions';
import * as actions from './actions';
import { MainMixesState, MixPostPayload, PlayableMixPostsRecord } from './types';

const initialState: MainMixesState = {
    currentPost: { index: 0, progress: 0 },
    mixes: {},
};

const reducer = createReducer<MainMixesState, ActionType<typeof actions>>(initialState)
    .handleAction(actions.setCurrentPost, (state, action) => ({ ...state, currentPost: action.payload }))
    .handleAction(actions.setCurrentPostProgress, (state, action) => ({
        ...state,
        currentPost: { ...state.currentPost!, progress: action.payload },
    }))
    .handleAction(actions.addCurrentPostProgress, (state, action) => ({
        ...state,
        currentPost: { ...state.currentPost!, progress: _addProgress(action.payload, state.currentPost.progress) },
    }))
    .handleAction(actions.resetProgress, (state) => ({ ...state, currentPost: { ...state.currentPost!, progress: 0 } }))
    .handleAction(actions.initMixPosts, (state, action) => _initMixPosts(state, action.payload))
    .handleAction([actions.fetchMixPost.success, actions.execMixPostCommand.success], (state, action) =>
        _addPostToMix(state, action.payload),
    );

function _addPostToMix(state: MainMixesState, payload: MixPostPayload): MainMixesState {
    const { mixId, post } = payload;
    return {
        ...state,
        mixes: {
            ...state.mixes,
            [mixId]: { ...state.mixes[mixId], posts: { ...state.mixes[mixId]?.posts, [post.id]: post } },
        },
    };
}

function _initMixPosts(state: MainMixesState, payload: ActionType<typeof actions.initMixPosts>['payload']): MainMixesState {
    const { mixId, postIds } = payload;
    const initializedMixPosts = postIds.reduce<PlayableMixPostsRecord>(
        (acc, postId) => ({
            ...acc,
            [postId]: { id: postId, status: 'LOADING', audioStatus: 'PAUSED' },
        }),
        {} as PlayableMixPostsRecord,
    );

    return { ...state, [mixId]: { status: 'READY', posts: { ...initializedMixPosts } } };
}

function _addProgress(toAdd: number, current?: number): number {
    if (!current) return toAdd;
    if (current + toAdd > 100) return 100;
    return current + toAdd;
}

export default reducer;
