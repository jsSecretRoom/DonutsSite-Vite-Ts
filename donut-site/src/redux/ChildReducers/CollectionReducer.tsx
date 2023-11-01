
const initialState = {
  collectionsName: [],
  collectionslistNames: [],
  pushToFavirite: [],

  speciallCollectionBox: [],
  specialCollectionTotallPrice: []

};

export function CollectionReducer(state = initialState, action ) {
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
    default:
      return state;
  }
}