const initialState = {
    globallCounter: 0,
    
};
export function GlobalStatesReducer(state = initialState, action) {
    switch (action.type) {
        case 'FIND_GLOBAL_COUNT':
            return {
            ...state,
            globallCounter: action.payload,
            };
        default:
            return state;
    }
}