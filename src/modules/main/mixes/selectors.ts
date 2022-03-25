import { MainMixesModuleState } from './types';

export function selectMixPosts(mixId: string) {
    return function (state: MainMixesModuleState) {
        return state.mainMixes.mixes[mixId];
    };
}

export function selectMixPost(mixId?: string, postId?: string) {
    return function (state: MainMixesModuleState) {
        if (!mixId || !postId) return undefined;
        return state.mainMixes.mixes[mixId]?.posts?.[postId];
    };
}

export function selectCurrentPost(state: MainMixesModuleState) {
    return state.mainMixes.currentPost;
}

export function selectCurrentPostProgress(state: MainMixesModuleState) {
    return state.mainMixes.currentPost?.progress;
}
