export interface AppState {
    authorized: boolean;
}

// Типы действий
export enum ActionTypes {
    SUCCESSFUL_AUTHORIZATION = 'SUCCESSFUL_AUTHORIZATION',
}

export interface SetAuthorizationAction {
    type: ActionTypes.SUCCESSFUL_AUTHORIZATION;
    payload: boolean;
}

export type AppAction = SetAuthorizationAction;