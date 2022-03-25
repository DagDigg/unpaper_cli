import { createAction } from 'typesafe-actions';
import { HowlInitializer } from './helpers';
import { Playlist, PlaylistCommand } from './types';

export const setHomePlaylist = createAction('@mainPlayer/SET_HOME_PLAYLIST')<{
    postId: string;
    onSuccess: (playlist: Playlist) => void;
    howlInitializer: HowlInitializer;
}>();
export const setPostPlaylist = createAction('@mainPlayer/SET_POST_PLAYLIST')<{
    postId: string;
    isOP?: boolean;
    cursor: number;
    onSuccess: (playlist: Playlist) => void;
    howlInitializer: HowlInitializer;
}>();
export const execPlaylistCommand = createAction('@mainPlayer/EXEC_PLAYLIST_ACTION')<{
    command: PlaylistCommand;
    onSuccess?: (playlist: Playlist) => void;
    howlInitializer?: HowlInitializer;
}>();
