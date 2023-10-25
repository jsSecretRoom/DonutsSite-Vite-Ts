import { CollectionState, SetCollection, GetCollectionName } from '../redaxTypes';


const initialState: CollectionState = {
  collectionsName: [],
  collectionslistNames: [],
  pushToFavirite: [],
  speciallCollectionBox: []

};

export function CollectionReducer(state = initialState, action: SetCollection): CollectionState {
  switch (action.type) {
    case GetCollectionName.GET_COLLECTION_NAME:
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
    default:
      return state;
  }
}