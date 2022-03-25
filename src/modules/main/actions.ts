import { createAction } from 'typesafe-actions';
import { AppPlan } from './types';

export const setAppPlan = createAction('@main/SET_APP_PLAN')<AppPlan>();
