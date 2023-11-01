import { combineReducers } from 'redux';
import { StringReducer } from './ChildReducers/StringReducer';
import { CollectionReducer } from './ChildReducers/CollectionReducer';
import { BooleanReducer } from './ChildReducers/BooleanReducer';
import { NumberReducer } from './ChildReducers/NumberReducer';

import { StringReducerStates, CollectionReducerState, BooleanReducerState, NumberReducerStates } from './TS-STATE';


const RootReducer = combineReducers({

    getstring: StringReducer,
    getcollection: CollectionReducer,
    getboolean: BooleanReducer,
    getnumber: NumberReducer
    
}); 

export default RootReducer;

export interface RootState {
    getstring: StringReducerStates;
    getcollection: CollectionReducerState;
    getboolean: BooleanReducerState;
    getnumber: NumberReducerStates;
}