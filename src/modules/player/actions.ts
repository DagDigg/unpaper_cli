import { createAction } from 'typesafe-actions';
import * as models from 'common/models';
import { CurrentAudio, PlayerState } from './types';

export const setState = createAction('@player/SET_STATE')<PlayerState>();
export const setQueue = createAction('@player/SET_QUEUE')<models.Audio[]>();
export const setCurrent = createAction('@player/SET_CURRENT')<CurrentAudio>();
export const shiftQueue = createAction('@player/SHIFT_QUEUE')<{ duration: number }>();
