import { all, call, put, select, take, takeEvery, takeLeading } from '@redux-saga/core/effects';
import * as actions from './actions';
import * as selectors from './selectors';
import * as mixesSelectors from 'modules/mixes/selectors';
import * as postsApi from 'modules/posts/api';
import Client from 'services/client';
import { GetPostResponse, Post } from 'api/proto/v1/posts_pb';
import { CurrentPost, PlayableMix, PlayableMixPost } from './types';
import { _adaptPost } from 'modules/posts/helpers';
import { HowlInitializer } from '../player/helpers';
import { getAudioURLFromB64Bytes } from 'common/audio';
import { Mix } from 'api/proto/v1/mixes_pb';
import { history } from 'common/history';

function* handleFetchMixPosts(action: ReturnType<typeof actions.fetchMixPosts.request>) {
    try {
        const { mixId, howlInitializer, onSuccess } = action.payload;
        if (!mixId) throw new Error('missing mix id');
        const mix: Mix.AsObject | undefined = yield select(mixesSelectors.selectMixById(mixId));
        if (!mix) throw new Error('could not find mix');

        yield all(mix.postIdsList.map((postId) => put(actions.fetchMixPost.request({ id: mix.id, postId, howlInitializer }))));
        yield all(mix.postIdsList.map(() => take(actions.fetchMixPost.success)));
        const playableMix: PlayableMix = yield select(selectors.selectMixPosts(mix.id));

        const mixPosts = Object.values(playableMix.posts);
        if (mixPosts.length === 0) throw new Error('missing posts in mix');

        // After fetching the posts, set the first as current
        yield put(actions.setCurrentPost({ index: 0, postId: mixPosts[0].id, sound: mixPosts[0].sound!, progress: 0 }));
        onSuccess && onSuccess();
    } catch (error) {
        console.log(error);
        yield put(actions.fetchMixPosts.failure(error));
    }
}

function* handleFetchMixPost(action: ReturnType<typeof actions.fetchMixPost.request>) {
    try {
        const { id, postId, howlInitializer } = action.payload;
        // Try to retrieve cached mix post
        const storedPost: PlayableMixPost = yield select(selectors.selectMixPost(id, postId));
        if (storedPost) {
            yield put(actions.fetchMixPost.success({ mixId: id, post: storedPost }));
            return;
        }
        // Post does not exist
        const client = Client.get();
        const getPostRes: GetPostResponse.AsObject = yield call(postsApi.getPost, { client, params: { postId: postId } });
        const playableMixPost = _getPlayableMixPost(howlInitializer, getPostRes.post);
        yield put(actions.fetchMixPost.success({ mixId: id, post: playableMixPost }));
    } catch (error) {
        yield put(actions.fetchMixPost.failure(error));
    }
}

function _getPlayableMixPost(howlInitializer: HowlInitializer, p?: Post.AsObject): PlayableMixPost {
    if (!p) throw new Error('missing post');

    const post = _adaptPost(p);
    const src = getAudioURLFromB64Bytes(post.audio.bytes as string);
    const sound = howlInitializer(post.audio, src);

    return {
        id: post.id,
        sound,
        post: post,
        status: 'READY',
    };
}

function* execMixCommandNext(mixId: string, currentPost: CurrentPost) {
    try {
        const playableMix: PlayableMix = yield select(selectors.selectMixPosts(mixId));
        currentPost?.sound?.stop();

        const mixPosts = Object.values(playableMix.posts);
        const postToPlay = mixPosts[currentPost!.index + 1];
        if (mixPosts.length - 1 === currentPost?.index) {
            yield history.push('/');
            return;
        }
        const newCurrentPost = playableMixPostToCurrentPost(postToPlay, currentPost!.index + 1);
        yield put(actions.setCurrentPost(newCurrentPost!));
        newCurrentPost?.sound?.play();
    } catch (error) {
        console.error(`failed to set current post`);
    }
}

function playableMixPostToCurrentPost(p: PlayableMixPost, index: number): CurrentPost | undefined {
    if (!p) return;
    return {
        index,
        postId: p.id,
        sound: p.sound!,
        progress: 0,
    };
}

function* handleExecMixCommand(action: ReturnType<typeof actions.execMixPostCommand.request>) {
    try {
        const { mixId, command } = action.payload;
        const currentPost: CurrentPost | null = yield select(selectors.selectCurrentPost);

        if (!currentPost || !currentPost.sound || !mixId) throw new Error('failed to retrieve post');

        if (command === 'PLAY') {
            currentPost.sound.play();
        }
        if (command === 'PAUSE') {
            currentPost.sound.stop();
            currentPost.sound.unload();
        }
        if (command === 'NEXT') {
            yield call(execMixCommandNext, mixId, currentPost);
        }
    } catch (error) {
        console.error(error);
        yield put(actions.execMixPostCommand.failure());
    }
}

export default function* mainMixesSaga() {
    yield takeLeading(actions.fetchMixPosts.request, handleFetchMixPosts);
    yield takeEvery(actions.fetchMixPost.request, handleFetchMixPost);
    yield takeLeading(actions.execMixPostCommand.request, handleExecMixCommand);
}
