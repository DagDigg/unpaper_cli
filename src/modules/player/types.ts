import * as models from 'common/models';
import { Howl } from 'howler';

export type PlayerModuleState = {
    player: PlayerState;
};

export type PlayerState = {
    current: CurrentAudio | null;
    queue: models.Audio[];
};

export type CurrentAudio = models.Audio & {
    isPlaying: boolean;
    src: string;
    sound: Howl;
};
