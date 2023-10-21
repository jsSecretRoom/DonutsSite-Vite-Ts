import { combineReducers } from 'redux';
import { AutorisationReducer } from './ChildReducers/AutorisationReducer';
import { CollectionReducer } from './ChildReducers/CollectionReducer';
import { ButtonsReducer } from './ChildReducers/ButtonsReducer';
import { GlobalStatesReducer } from './ChildReducers/GlobalStatesReducer';
const RootReducer = combineReducers({

    autorisation: AutorisationReducer,
    getcollection: CollectionReducer,
    togllebutton: ButtonsReducer,
    globalStates: GlobalStatesReducer
    
}); 

export default RootReducer;