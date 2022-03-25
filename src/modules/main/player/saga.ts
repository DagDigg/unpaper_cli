import { call, put, select, takeLatest } from '@redux-saga/core/effects';
import * as playerActions from 'modules/player/actions';
import * as playerSelectors from 'modules/player/selectors';
import * as actions from './actions';
import {
    _getHomePostsPlaylist,
    _getPostPlaylist,
    _playlistCommandNext,
    _playlistCommandPlayPause,
    _playlistCommandStart,
    _unloadCurrentSound,
} from './helpers';
import { Playlist, PlaylistCommand } from './types';

/**
 * Sets the Home playlist: current audio and queue
 *
 * @param action Payload Action
 */
function* handleSetHomePlaylist(action: ReturnType<typeof actions.setHomePlaylist>) {
    const { postId, onSuccess, howlInitializer } = action.payload;
    // Unload current (will be previous) sound, if existing. This is needed because only one sound can be reproduced at a time
    yield call(_unloadCurrentSound);
    const playlist: Playlist = yield _getHomePostsPlaylist(postId, howlInitializer);

    yield put(playerActions.setState(playlist));
    yield call(onSuccess, playlist);
}

/**
 * Sets the Post-specific playlist: current audio and queue
 *
 * @param action Payload Action
 */
function* handleSetPostPlaylist(action: ReturnType<typeof actions.setPostPlaylist>) {
    const { postId, onSuccess, cursor, isOP, howlInitializer } = action.payload;
    yield call(_unloadCurrentSound);
    const playlist: Playlist = yield _getPostPlaylist(postId, cursor, isOP, howlInitializer);

    yield put(playerActions.setState(playlist));
    yield call(onSuccess, playlist);
}

/**
 * Handler for the plalyst `exec` actions.
 *
 * @param action Payload Action
 */
function* handleExecPlaylistCommand(action: ReturnType<typeof actions.execPlaylistCommand>) {
    const { command, onSuccess, howlInitializer } = action.payload;
    const playlist: Playlist = yield select(playerSelectors.selectState);

    switch (command) {
        case PlaylistCommand.StartPlaylist:
            yield _playlistCommandStart(playlist);
            break;
        case PlaylistCommand.Next:
            yield _playlistCommandNext(playlist, onSuccess, howlInitializer);
            break;
        case PlaylistCommand.PlayPauseCurrent:
        default:
            yield _playlistCommandPlayPause(playlist, onSuccess);
            break;
    }
}

export default function* root() {
    yield takeLatest(actions.setHomePlaylist, handleSetHomePlaylist);
    yield takeLatest(actions.setPostPlaylist, handleSetPostPlaylist);
    yield takeLatest(actions.execPlaylistCommand, handleExecPlaylistCommand);
}
