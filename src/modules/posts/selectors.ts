import { PostsModuleState } from './types';

export function selectPosts(state: PostsModuleState) {
    return state.posts.entities;
}

export function selectPost(id: string) {
    return function (state: PostsModuleState) {
        return state.posts.entities[id];
    };
}
