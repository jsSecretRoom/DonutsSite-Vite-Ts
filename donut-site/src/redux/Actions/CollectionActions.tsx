import { ProductList, BasketItem, TotalBasket, CollectionAction } from '../TS-STATE';

export const setAddToBasket = (addCollection: ProductList[]): CollectionAction => ({
    type: 'ADD_TO_BASKET',
    payload: addCollection,
});

export const setNameCollections = (addCollection: string[]): CollectionAction => ({
    type: 'GET_COLLECTION_NAME',
    payload: addCollection,
});

export const setListCollectionsnames = (addCollection: string[]): CollectionAction => ({
    type: 'COLLECTION_LIST_DATA',
    payload: addCollection,
});

export const setPushToFavirite = (addCollection: ProductList[]): CollectionAction => ({
    type: 'FAVORITE_COLLECTION_LIST',
    payload: addCollection,
});

export const setSpeciallCollection = (addCollection: BasketItem[]): CollectionAction => ({
    type: 'SPECIALL_COLLECTION_BOX',
    payload: addCollection,
});

export const setSpeciallCollectionFindTotall = (addCollection: TotalBasket[]): CollectionAction => ({
    type: 'SPECIALL_COLLECTION_FIND_TOTAL_PRICE',
    payload: addCollection,
});