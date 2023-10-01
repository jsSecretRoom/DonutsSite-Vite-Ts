import { combineReducers } from 'redux';
import { AutorisationReducer } from './ChildReducers/AutorisationReducer';

const RootReducer = combineReducers({

    autorisation: AutorisationReducer,
    // Добавьте другие редьюсеры здесь
}); 

export default RootReducer;