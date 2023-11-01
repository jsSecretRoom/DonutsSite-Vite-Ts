import { NumberReducerStates, NumberAction } from "../TS-STATE";

const initialState: NumberReducerStates = {
    globallCounter: 0,
    globalBoxTotalPrice: 0,
    globalSpecialPrice: 0
};

export function NumberReducer(

    state: NumberReducerStates = initialState, 
    action: NumberAction) : NumberReducerStates {

    switch (action.type) {
        case 'FIND_GLOBAL_COUNT':
            return {
                ...state,
                globallCounter: action.payload,
            };
        case 'FIND_GLOBALL_TOTAL_PRICE':
            return {
                ...state,
                globalBoxTotalPrice: action.payload,
            };
        case 'FIND_GLOBALL_SPECIALL_PRICE':
            return {
                ...state,
                globalSpecialPrice: action.payload,
            };
        default:
            return state;
    }
}