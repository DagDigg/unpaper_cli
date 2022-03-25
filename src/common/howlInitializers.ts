import { DEFAULT_AUDIO_FORMAT } from 'common/constants';
import { Howl } from 'howler';
import * as mainPlayerActions from 'modules/main/player/actions';
import { HowlInitializer } from 'modules/main/player/helpers';
import { PlaylistCommand } from 'modules/main/player/types';
import { Dispatch } from 'react';
import * as models from './models';
import { Stopwatch } from './useProgress';

export function getAutoplayHowlInitializer(s: Stopwatch, dispatch: Dispatch<any>): HowlInitializer {
    const { startTimer, resetTimer, stopTimer, ended } = s;

    return function howlInitializer(a, src) {
        return new Howl({
            src: [src],
            html5: true,
            format: [DEFAULT_AUDIO_FORMAT],
            onplayerror: (e, err) => console.log(err),
            onloaderror: (e, err) => console.log(err),
            preload: 'metadata',
            onplay: () => {
                if (ended) resetTimer();
                startTimer(a.durationMs);
            },
            onpause: () => stopTimer(),
            onend: () => {
                resetTimer();
                dispatch(
                    mainPlayerActions.execPlaylistCommand({
                        command: PlaylistCommand.Next,
                        onSuccess: () =>
                            dispatch(mainPlayerActions.execPlaylistCommand({ command: PlaylistCommand.StartPlaylist, howlInitializer })),
                        howlInitializer,
                    }),
                );
            },
        });
    };
}

type Callbacks = {
    onPlay: (a: models.Audio) => void;
    onPause: () => void;
    onEnd: () => void;
    onStop?: () => void;
    onSeek?: () => void;
};
export function mixHowlInitializer({ onPlay, onPause, onEnd, onStop, onSeek }: Callbacks): HowlInitializer {
    return function howlInitializer(a, src) {
        return new Howl({
            src: [src],
            html5: true,
            format: [DEFAULT_AUDIO_FORMAT],
            onplayerror: (e, err) => console.log(err),
            onloaderror: (e, err) => console.log(err),
            preload: 'metadata',
            onseek: () => {
                onSeek && onSeek();
            },
            onplay: () => {
                onPlay(a);
            },
            onpause: () => {
                onPause();
            },
            onend: () => {
                onEnd();
            },
            onstop: () => {
                onStop && onStop();
            },
        });
    };
}
