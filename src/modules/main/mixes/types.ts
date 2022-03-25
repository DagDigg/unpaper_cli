import { NormalizedState } from 'common/entities';
import * as models from 'common/models';
import { Howl } from 'howler';

export type MainMixesModuleState = {
    mainMixes: MainMixesState;
};

export type MainMixesState = {
    currentPost: CurrentPost;
    mixes: Record<MixId, PlayableMix>;
};

export type PlayableMix = {
    id: MixId;
    posts: PlayableMixPostsRecord;
};

export type PlayableMixPostsRecord = Record<PostId, PlayableMixPost>;
export type PlayableMixPost = {
    id: string;
    status: 'LOADING' | 'READY';
    sound?: Howl;
    post?: models.Post;
};

export type MixPostPayload = { mixId: MixId; post: PlayableMixPost };

export type CurrentPost = { postId?: string; sound?: Howl; index: number; progress?: number };
export type PostId = string;
export type MixId = string;
