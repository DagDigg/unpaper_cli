import { Post } from 'common/models';
import { TernaryStatus } from 'common/types';

export type PostsModuleState = {
    posts: PostsState;
};

export type PostsState = { status: TernaryStatus; entities: Record<string, Post> };
