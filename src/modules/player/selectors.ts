import { CurrentAudio, PlayerModuleState } from './types';

export function selectCurrent(state: PlayerModuleState): CurrentAudio | null {
    return state.player.current;
}

export function selectQueue(state: PlayerModuleState) {
    return state.player.queue;
}

export function selectState(state: PlayerModuleState) {
    return state.player;
}
