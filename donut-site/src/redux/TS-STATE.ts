//-----TS-Interfase-----//

//BooleanReducer---------------------------------------------------------------------
export interface BooleanReducerState {
    authorized: boolean,
    togleSidebur: boolean,
    togleBagModal: boolean,
    toglSuccesOrder: boolean,
    togleSpeciallModalBox: boolean,
    togleLeedOpenClose: boolean,
}

export type BooleanAction =
  | { type: 'SUCCESSFUL_AUTHORIZATION'; payload: boolean }
  | { type: 'SIDEBUR_IVENT'; payload: boolean }
  | { type: 'TOGLE_BAG_MODAL'; payload: boolean }
  | { type: 'TOGLE_SUCCES_ORDER_MODAL'; payload: boolean }
  | { type: 'TOGLE_SPECIALL_MODAL_BOX'; payload: boolean }
  | { type: 'CLOSE_OPEN_LEED'; payload: boolean };


//NumberReducer------------------------------------------------------------------------

export interface NumberReducerStates {
    globallCounter: number,
    globalBoxTotalPrice: number,
    globalSpecialPrice: number
};

export type NumberAction =
  | { type: 'FIND_GLOBAL_COUNT'; payload: number }
  | { type: 'FIND_GLOBALL_TOTAL_PRICE'; payload: number }
  | { type: 'FIND_GLOBALL_SPECIALL_PRICE'; payload: number };

//StringReducer-----------------------------------------------------------------------
export interface StringReducerStates {
    globalSearchRequest: string,
};

export type StringAction =
  | { type: 'GLOBALL_SEARCH_REQUEST'; payload: string };

//CollectionReducer--------------------------------------------------------------------

export interface CollectionReducerState {
    collectionsName: string[],
    collectionslistNames: string[],
    pushToBasket: ProductList[],
    pushToFavirite: ProductList[],
    speciallCollectionBox: BasketItem[],
    specialCollectionTotallPrice: TotalBasket[],
    
};

export type CollectionAction =
    | { type: 'GET_COLLECTION_NAME'; payload: string[] }
    | { type: 'COLLECTION_LIST_DATA'; payload: string[] }

    | { type: 'ADD_TO_BASKET'; payload: ProductList[] }
    | { type: 'FAVORITE_COLLECTION_LIST'; payload: ProductList[] }

    | { type: 'SPECIALL_COLLECTION_BOX'; payload: BasketItem[] }
    | { type: 'SPECIALL_COLLECTION_FIND_TOTAL_PRICE'; payload: TotalBasket[] };


export interface ProductList {
    diskountIndicator: boolean;
    diskountPrice: string;
    foto: string;
    id: number;
    name: string;
    realPrice: string;
    
}

export interface BasketItem {
    id: string;
    info: string;
    oneimg: string;
    price: number;
    specialcount: number;
    specialid: string;
}
export interface TotalBasket {
    totalCount: number;
    totalId: number;
    totalItem: BasketItem[];
}
