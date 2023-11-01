//BooleanReducer-------------------------------------------------------------------------
export const SetAutorisation = (togle: boolean) => ({
    type: 'SUCCESSFUL_AUTHORIZATION',
    payload: togle,
});


export const setSideburButton = (togle: boolean) => ({
    type: 'SIDEBUR_IVENT',
    payload: togle,
});

export const setModallBag = (togle: boolean) => ({
    type: 'TOGLE_BAG_MODAL',
    payload: togle,
});

export const setModallOrderSucces = (togle: boolean) => ({
    type: 'TOGLE_SUCCES_ORDER_MODAL',
    payload: togle,
});

export const setTogleSpeciallModalBox = (togle: boolean) => ({
    type: 'TOGLE_SPECIALL_MODAL_BOX',
    payload: togle,
});

export const setTogleLeedOpenClose = (togle: boolean) => ({
    type: 'CLOSE_OPEN_LEED',
    payload: togle,
});