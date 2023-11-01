//StringReducer---------------------------------------------------------------------------
export const setGlobalSearchRequest = (search: string) => ({ 
    type: 'GLOBALL_SEARCH_REQUEST',
    payload: search,
});