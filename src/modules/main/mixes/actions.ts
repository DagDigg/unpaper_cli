import { createAction, createAsyncAction } from 'typesafe-actions';
import { HowlInitializer } from '../player/helpers';
import { CurrentPost, MixPostPayload } from './types';

export const initMixPosts = createAction('@mainMixes/INIT_MIX_POSTS')<{ mixId: string; postIds: string[] }>();
export const setCurrentPost = createAction('@mainMixes/SET_CURRENT_POST')<CurrentPost>();
export const setCurrentPostProgress = createAction('@mainMixes/SET_CURRENT_POST_PROGRESS')<number>();
export const addCurrentPostProgress = createAction('@mainMixes/ADD_CURRENT_POST_PROGRESS')<number>();
export const resetProgress = createAction('@mainMixes/RESET_PROGRESS')<undefined>();

export const fetchMixPosts = createAsyncAction(
    '@mainMixes/FETCH_MIX_POSTS_REQUEST',
    '@mainMixes/FETCH_MIX_POSTS_SUCCESS',
    '@mainMixes/FETCH_MIX_POSTS_FAILURE',
)<{ mixId?: string; howlInitializer: HowlInitializer; onSuccess?: () => void }, MixPostPayload, unknown>();

export const fetchMixPost = createAsyncAction(
    '@mainMixes/FETCH_MIX_POST_REQUEST',
    '@mainMixes/FETCH_MIX_POST_SUCCESS',
    '@mainMixes/FETCH_MIX_POST_FAILURE',
)<{ id: string; postId: string; howlInitializer: HowlInitializer }, MixPostPayload, unknown>();

export const execMixPostCommand = createAsyncAction(
    '@mainMixes/EXEC_MIX_POST_COMMAND_REQUEST',
    '@mainMixes/EXEC_MIX_POST_COMMAND_SUCCESS',
    '@mainMixes/EXEC_MIX_POST_COMMAND_FAILURE',
)<{ mixId?: string; command: 'PLAY' | 'PAUSE' | 'NEXT' | 'PREVIOUS' }, MixPostPayload, undefined>();
