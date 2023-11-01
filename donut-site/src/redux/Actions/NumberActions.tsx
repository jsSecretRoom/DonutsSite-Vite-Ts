//NumberReducer----------------------------------------------------------------------
export const setGloballCount = (update: number) => ({
    type: 'FIND_GLOBAL_COUNT',
    payload: update,
});

export const setGloballTotallPrice = (update: number) => ({
    type: 'FIND_GLOBALL_TOTAL_PRICE',
    payload: update,
});

export const setGloballSpecialPrice = (update: number) => ({ 
    type: 'FIND_GLOBALL_SPECIALL_PRICE',
    payload: update,
});
