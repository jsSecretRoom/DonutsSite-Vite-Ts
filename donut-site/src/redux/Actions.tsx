//autorization reducer
export const SetAutorisation = (name) => ({
    type: 'SUCCESSFUL_AUTHORIZATION',
    payload: name,
});

//collection reducer 

export const setNameCollections = (name) => ({
    type: 'GET_COLLECTION_NAME',
    payload: name,
});

export const setListCollectionsnames = (name) => ({
    type: 'COLLECTION_LIST_DATA',
    payload: name,
});

export const setPushToFavirite = (name) => ({
    type: 'FAVORITE_COLLECTION_LIST',
    payload: name,
});

export const setSpeciallCollection = (name) => ({
    type: 'SPECIALL_COLLECTION_BOX',
    payload: name,
});

export const setSpeciallCollectionFindTotall = (name) => ({
    type: 'SPECIALL_COLLECTION_FIND_TOTAL_PRICE',
    payload: name,
});

//buttonsreducer togleSpeciallModalBox 
export const setSideburButton = (togle) => ({
    type: 'SIDEBUR_IVENT',
    payload: togle,
});

export const setModallBag = (togle) => ({
    type: 'TOGLE_BAG_MODAL',
    payload: togle,
});

export const setModallOrderSucces = (togle) => ({
    type: 'TOGLE_SUCCES_ORDER_MODAL',
    payload: togle,
});

export const setTogleSpeciallModalBox = (togle) => ({
    type: 'TOGLE_SPECIALL_MODAL_BOX',
    payload: togle,
});

export const setTogleLeedOpenClose = (togle) => ({
    type: 'CLOSE_OPEN_LEED',
    payload: togle,
});

export const setAddToBasket = (push) => ({
    type: 'ADD_TO_BASKET',
    payload: push,
});

//globall stats reducer 

export const setGloballCount = (update) => ({
    type: 'FIND_GLOBAL_COUNT',
    payload: update,
});

export const setGloballTotallPrice = (update) => ({
    type: 'FIND_GLOBALL_TOTAL_PRICE',
    payload: update,
});

export const setGloballSpecialPrice = (update) => ({ 
    type: 'FIND_GLOBALL_SPECIALL_PRICE',
    payload: update,
});

export const setGlobalSearchRequest = (search) => ({ 
    type: 'GLOBALL_SEARCH_REQUEST',
    payload: search,
});