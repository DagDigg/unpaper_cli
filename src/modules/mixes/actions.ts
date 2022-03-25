import { GetMixesRes } from 'api/proto/v1/mixes_pb';
import { createAsyncAction } from 'typesafe-actions';

export const getMixes = createAsyncAction('@mixes/GET_MIXES_REQUEST', '@mixes/GET_MIXES_SUCCESS', '@mixes/GET_MIXES_FAILURE')<
    undefined,
    GetMixesRes.AsObject,
    undefined
>();
