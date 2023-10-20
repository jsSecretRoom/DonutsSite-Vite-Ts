const initialState = {
  togleSidebur: false,
  togleBagModal: false,
  toglSuccesOrder: false,
  pushToBasket: [],
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
    case 'TOGLE_SUCCES_ORDER_MODAL':
      return {
        ...state,
        toglSuccesOrder: action.payload,
      };
    case 'ADD_TO_BASKET':
      return {
        ...state,
        pushToBasket: [...action.payload],
      };
    default:
      return state;
  }
}