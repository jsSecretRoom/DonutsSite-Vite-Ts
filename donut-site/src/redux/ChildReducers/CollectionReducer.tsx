import { CollectionState, SetCollection, GetCollectionName } from '../redaxTypes';


const initialState: CollectionState = {
  collectionsName: [],
};

export function CollectionReducer(state = initialState, action: SetCollection): CollectionState {
  switch (action.type) {
    case GetCollectionName.GET_COLLECTION_NAME:
      return {
        ...state,
        collectionsName: action.payload,
      };
    default:
      return state;
  }
}