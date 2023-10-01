import { AppState, AppAction, ActionTypes } from '../redaxTypes';

const initialState: AppState = {
  authorized: false,
};

export function AutorisationReducer(state = initialState, action: AppAction): AppState {
  switch (action.type) {
    case ActionTypes.SUCCESSFUL_AUTHORIZATION:
      return {
        ...state,
        authorized: action.payload,
      };
    default:
      return state;
  }
}