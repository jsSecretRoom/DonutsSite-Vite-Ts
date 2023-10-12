const initialState = {
  togleSidebur: false,
};
export function ButtonsReducer(state = initialState, action) {
  switch (action.type) {
    case 'SIDEBUR_IVENT':
      return {
        ...state,
        togleSidebur: action.payload,
      };
    default:
      return state;
  }
}