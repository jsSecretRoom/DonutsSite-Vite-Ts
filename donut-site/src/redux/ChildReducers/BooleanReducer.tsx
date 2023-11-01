import { BooleanReducerState, BooleanAction } from "../TS-STATE";

const initialState: BooleanReducerState = {
  authorized: false,
  togleSidebur: false,
  togleBagModal: false,
  toglSuccesOrder: false,
  togleSpeciallModalBox: false,
  togleLeedOpenClose: false,
};

export function BooleanReducer(
  
  state: BooleanReducerState = initialState, 
  action: BooleanAction) : BooleanReducerState {

  switch (action.type) {
    case 'SUCCESSFUL_AUTHORIZATION':
      return {
        ...state,
        authorized: action.payload,
      };
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
    case 'TOGLE_SPECIALL_MODAL_BOX':
      return {
        ...state,
        togleSpeciallModalBox: action.payload,
      };
    case 'CLOSE_OPEN_LEED':
      return {
        ...state,
        togleLeedOpenClose: action.payload,
      };
    
    default:
      return state;
  }
}