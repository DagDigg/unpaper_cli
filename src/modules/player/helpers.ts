import { CurrentAudio, PlayerState } from './types';
import * as models from 'common/models';
import * as actions from './actions';
import { Howl } from 'howler';

export function setShiftQueue(state: PlayerState, action: ReturnType<typeof actions.shiftQueue>): PlayerState {
    if (!state.queue.shift()) {
        // Don't do anything if the queue has ended
        return state;
    }
    return { current: _audioToCurrentAudio(state.queue.shift()!, action.payload.duration), queue: state.queue.slice(1) };
}

function _audioToCurrentAudio(audio: models.Audio, durationMs: number): CurrentAudio {
    return {
        id: audio.id,
        bytes: audio.bytes,
        isPlaying: false,
        src: '',
        durationMs,
        sound: new Howl({}),
    };
}
