export interface AppState {
    authorized: boolean;
}
export enum ActionTypes {
    SUCCESSFUL_AUTHORIZATION = 'SUCCESSFUL_AUTHORIZATION',
}

export interface SetAuthorizationAction {
    type: ActionTypes.SUCCESSFUL_AUTHORIZATION;
    payload: boolean;
}
export type AppAction = SetAuthorizationAction;

//------------------------------------------------//

export interface CollectionState {
    collectionsName: string[];
}

export enum GetCollectionName {
    GET_COLLECTION_NAME = 'GET_COLLECTION_NAME',
}

export interface SetNameCollections {
    type: GetCollectionName.GET_COLLECTION_NAME;
    payload: string[];
}

export type SetCollection = SetNameCollections;