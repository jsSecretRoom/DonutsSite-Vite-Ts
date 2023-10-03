import { combineReducers } from 'redux';
import { AutorisationReducer } from './ChildReducers/AutorisationReducer';
import { CollectionReducer } from './ChildReducers/CollectionReducer';
const RootReducer = combineReducers({

    autorisation: AutorisationReducer,
    getcollection: CollectionReducer
    // Добавьте другие редьюсеры здесь
}); 

export default RootReducer;