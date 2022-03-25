import { put, takeLeading, all } from '@redux-saga/core/effects';
import * as actions from './actions';
import * as postsActions from 'modules/posts/actions';
import { putAsyncAction, Result } from 'common/sagaUtils';

function* handleCreatePost(action: ReturnType<typeof actions.createPost.request>) {
    try {
        const { audioBytes, audioDurationMs, audioFormat, message, threadMsgs, onSuccess } = action.payload;
        const createPostRes: Result<typeof postsActions.createPost> = yield putAsyncAction(postsActions.createPost, {
            audioBytes,
            message,
            audioDurationMs: Math.floor(audioDurationMs),
            audioFormat,
        });
        if (!createPostRes.isSuccess) {
            throw new Error('create post failed');
        }
        const { post: newPost } = createPostRes.success.payload;
        if (!newPost) {
            throw new Error('post created but not sent back from api');
        }

        if (threadMsgs?.length) {
            yield all(
                threadMsgs.map((m) =>
                    put(
                        postsActions.createComment.request({
                            postId: newPost.id,
                            audioBytes: m.audioBytes,
                            message: m.message,
                            parentId: '',
                            thread: m.thread,
                            audioDurationMs: m.audioDurationMs,
                        }),
                    ),
                ),
            );
        }
        onSuccess && onSuccess();
    } catch (e) {
        console.error(e);
    }
}

export default function* root() {
    yield takeLeading(actions.createPost.request, handleCreatePost);
}
