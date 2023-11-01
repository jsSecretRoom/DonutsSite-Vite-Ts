import { CollectionReducerState, CollectionAction } from "../TS-STATE";

const initialState: CollectionReducerState = {
  collectionsName: [],
  collectionslistNames: [],
  pushToFavirite: [],

  speciallCollectionBox: [],
  specialCollectionTotallPrice: [],
  pushToBasket: [],
};
 
export function CollectionReducer(

  state: CollectionReducerState = initialState, 
  action: CollectionAction ) : CollectionReducerState {
    
  switch (action.type) {
    case 'GET_COLLECTION_NAME':
      return {
        ...state,
        collectionsName: action.payload,
      };
    case 'COLLECTION_LIST_DATA':
      return {
        ...state,
        collectionslistNames: action.payload,
      };
    case 'FAVORITE_COLLECTION_LIST':
      return {
        ...state,
        pushToFavirite: action.payload,
      };
    case 'SPECIALL_COLLECTION_BOX':
      return {
        ...state,
        speciallCollectionBox: action.payload,
      };
    
    case 'SPECIALL_COLLECTION_FIND_TOTAL_PRICE':
      return {
        ...state,
        specialCollectionTotallPrice: action.payload,
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