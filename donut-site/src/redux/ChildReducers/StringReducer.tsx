import { StringReducerStates, StringAction } from "../TS-STATE";

const initialState: StringReducerStates = {
    globalSearchRequest: ''
};
export function StringReducer(
    
    state: StringReducerStates = initialState, 
    action: StringAction) : StringReducerStates {

    switch (action.type) {
        case 'GLOBALL_SEARCH_REQUEST':
            return {
                ...state,
                globalSearchRequest: action.payload,
            };
        default:
            return state;
    }
}