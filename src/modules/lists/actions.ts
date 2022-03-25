import { CreateListRequest, GetListByIDRequest, List, UpdateListRequest } from 'api/proto/v1/chat_pb';
import { createAsyncAction } from 'typesafe-actions';

export const createList = createAsyncAction('@lists/CREATE_LISTS_REQUEST', '@lists/CREATE_LIST_SUCCESS', '@lists/CREATE_LISTS_FAILURE')<
    CreateListRequest.AsObject,
    List.AsObject,
    undefined
>();

export const getAllLists = createAsyncAction(
    '@lists/GET_ALL_LISTS_REQUEST',
    '@lists/GET_ALL_LISTS_SUCCESS',
    '@lists/GET_ALL_LISTS_FAILURE',
)<undefined, List.AsObject[], undefined>();

export const getListByID = createAsyncAction(
    '@lists/GET_LIST_BY_ID_REQUEST',
    '@lists/GET_LIST_BY_ID_SUCCESS',
    '@lists/GET_LIST_BY_ID_FAILURE',
)<GetListByIDRequest.AsObject, List.AsObject[], undefined>();

export const updateList = createAsyncAction('@lists/UPDATE_LIST_REQUEST', '@lists/UPDATE_LIST_SUCCESS', '@lists/UPDATE_LIST_FAILURE')<
    UpdateListRequest.AsObject,
    List.AsObject,
    undefined
>();
