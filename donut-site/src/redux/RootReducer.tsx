import { combineReducers } from 'redux';
import { AutorisationReducer } from './ChildReducers/AutorisationReducer';
import { CollectionReducer } from './ChildReducers/CollectionReducer';
import { ButtonsReducer } from './ChildReducers/ButtonsReducer';
const RootReducer = combineReducers({

    autorisation: AutorisationReducer,
    getcollection: CollectionReducer,
    togllebutton: ButtonsReducer
    // Добавьте другие редьюсеры здесь
}); 

export default RootReducer;