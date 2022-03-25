import { CurrentAudio } from 'modules/player/types';
import * as models from 'common/models';

export enum PlaylistCommand {
    StartPlaylist = 'START_PLAYLIST',
    Next = 'NEXT',
    PlayPauseCurrent = 'CURRENT:PLAY/PAUSE',
}
export type Playlist = { current: CurrentAudio; queue: models.Audio[] };
