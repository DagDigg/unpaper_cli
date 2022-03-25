import { createAction } from 'typesafe-actions';
import { ListModalStatus } from './types';

export const setListsModalStatus = createAction('@mainLists/SET_LISTS_MODAL_STATUS')<ListModalStatus>();
