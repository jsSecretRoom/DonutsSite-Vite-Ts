const initialState = {
  togleSidebur: false,
  togleBagModal: false,
};
export function ButtonsReducer(state = initialState, action) {
  switch (action.type) {
    case 'SIDEBUR_IVENT':
      return {
        ...state,
        togleSidebur: action.payload,
      };
    case 'TOGLE_BAG_MODAL':
      return {
        ...state,
        togleBagModal: action.payload,
      };
    default:
      return state;
  }
}