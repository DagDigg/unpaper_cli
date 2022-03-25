import { Mix } from 'api/proto/v1/mixes_pb';
import { NormalizedState } from 'common/entities';

export type MixesModuleState = {
    mixes: MixesState;
};

export type MixesState = NormalizedState<Mix.AsObject>;
