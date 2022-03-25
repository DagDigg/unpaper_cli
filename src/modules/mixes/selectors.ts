import { Mix } from 'api/proto/v1/mixes_pb';
import { MixesModuleState } from './types';

export function selectAllMixes(state: MixesModuleState) {
    return Object.values(state.mixes.entities);
}

export function selectMixById(id: string) {
    return function (state: MixesModuleState): Mix.AsObject | undefined {
        return state.mixes.entities[id];
    };
}
