import { ActionTypes } from './redaxTypes';
export const SetAutorisation = (name: string) => ({
    type: ActionTypes.SUCCESSFUL_AUTHORIZATION,
    payload: name,
});