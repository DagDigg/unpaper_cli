import { call, put, select } from '@redux-saga/core/effects';
import { getAudioURLFromB64Bytes, intro } from 'common/audio';
import * as models from 'common/models';
import { Howl } from 'howler';
import * as playerActions from 'modules/player/actions';
import * as playerSelectors from 'modules/player/selectors';
import { CurrentAudio } from 'modules/player/types';
import * as postsSelectors from 'modules/posts/selectors';
import { Playlist } from './types';

export type HowlInitializer = (a: models.Audio, src: string) => Howl;

export function _audioToCurrentAudio(a: models.Audio, howlInitializer?: HowlInitializer): CurrentAudio {
    const src = getAudioURLFromB64Bytes(a.bytes as string);
    const sound = howlInitializer!(a, src);
    return { ...a, src, sound, isPlaying: true };
}

export function* _playlistCommandNext(playlist: Playlist, onSuccess?: (playlist: Playlist) => void, howlInitializer?: HowlInitializer) {
    const nextAudio = playlist.queue[0];
    if (!nextAudio) {
        // Unload current (will be previous) audio. This is needed because if the last audio is played, no `next` action will be executed
        _unloadCurrentSound();
        yield put(playerActions.setState({ current: null, queue: [] }));
        return;
    }

    const current = _audioToCurrentAudio(nextAudio, howlInitializer);
    const newPlaylist = { current, queue: playlist.queue.slice(1) };

    yield put(playerActions.setState(newPlaylist));
    if (onSuccess) yield call(onSuccess, newPlaylist);
}

export function* _playlistCommandPlayPause(playlist: Playlist, onSuccess?: (playlist: Playlist) => void) {
    if (intro.playing()) {
        intro.stop();
        const newCurrent: CurrentAudio = { ...playlist.current, isPlaying: false };
        yield put(playerActions.setCurrent(newCurrent));
        if (onSuccess) yield call(onSuccess, { current: newCurrent, queue: playlist.queue });
        return;
    }

    playlist.current.sound.playing() ? playlist.current.sound.pause() : playlist.current.sound.play();
    const newCurrent: CurrentAudio = { ...playlist.current, isPlaying: !playlist.current.isPlaying };

    yield put(playerActions.setCurrent(newCurrent));
    if (onSuccess) yield call(onSuccess, { current: newCurrent, queue: playlist.queue });
}

export function _playlistCommandStart(playlist: Playlist) {
    intro.off('end');
    intro.load();
    playlist.current.sound.load();
    intro.play();
    return intro.once('end', () => {
        playlist.current.sound.play();
    });
}

export function* _getPostPlaylist(postId: string, cursor: number, isOP?: boolean, howlInitializer?: HowlInitializer) {
    const post: models.Post = yield select(postsSelectors.selectPost(postId));

    const current = _getPostCurrentAudio(post, cursor, isOP, howlInitializer);
    const queue = _getPostQueue(post.commentsList, cursor, isOP);

    return { current, queue };
}

export function* _getHomePostsPlaylist(postId: string, howlInitializer?: HowlInitializer) {
    const post: models.Post = yield select(postsSelectors.selectPost(postId));
    const posts: Record<string, models.Post> = yield select(postsSelectors.selectPosts);
    const postsList = Object.values(posts);
    const postIdx = postsList.indexOf(post);

    const audios = postsList.slice(postIdx).map((p) => p.audio);
    if (audios.length === 0) {
        return console.error('could not create playlist');
    }

    const current = _audioToCurrentAudio(audios[0], howlInitializer);
    const queue = audios.slice(1);

    return { current, queue };
}

export function _getPostCurrentAudio(post: models.Post, cursor: number, isOP?: boolean, howlInitializer?: HowlInitializer) {
    if (isOP) {
        return _audioToCurrentAudio(post.audio, howlInitializer);
    }

    const commentToPlay = post.commentsList[cursor];
    if (!commentToPlay || !commentToPlay.audio) {
        return console.error('invalid cursor');
    }

    return _audioToCurrentAudio(commentToPlay.audio, howlInitializer);
}

export function _getPostQueue(commentsList: models.Comment[], cursor: number, isOP?: boolean) {
    if (isOP) {
        return commentsList.map((c) => c.audio!);
    }

    return commentsList.slice(cursor + 1).map((c) => c.audio!);
}

export function* _unloadCurrentSound() {
    const currentAudio: CurrentAudio | null = yield select(playerSelectors.selectCurrent);
    currentAudio?.sound.unload();
}
