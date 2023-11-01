
const initialState = {
  authorized: false,
};

export function AutorisationReducer(state = initialState, action) {
  switch (action.type) {
    case 'SUCCESSFUL_AUTHORIZATION':
      return {
        ...state,
        authorized: action.payload,
      };
    default:
      return state;
  }
}