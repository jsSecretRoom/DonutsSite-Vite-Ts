import { ActionTypes } from './redaxTypes';
export const SetAutorisation = (name: string) => ({
    type: ActionTypes.SUCCESSFUL_AUTHORIZATION,
    payload: name,
});

import { GetCollectionName } from './redaxTypes';
export const setNameCollections = (name: string[]) => ({
    type: GetCollectionName.GET_COLLECTION_NAME,
    payload: name,
});