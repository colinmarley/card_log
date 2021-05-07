//Navbar
export const SET_TAB_ACTIVE_FLAG = 'SET_TAB_ACTIVE_FLAG'

//Auth
export const SET_AUTH_STATUS_FLAG = "SET_AUTH_STATUS_FLAG"

//User
export const SET_CURRENT_USER = "SET_CURRENT_USER";

//CardList
export const SET_CARD_LIST = "SET_CARD_LIST";
export const ADD_TO_CARD_LIST = "ADD_TO_CARD_LIST";
export const CLEAR_CARD_LIST = "CLEAR_CARD_LIST";
export const REMOVE_CARD_FROM_LIST = "REMOVE_CARD_FROM_LIST";


// Action Creators

// Navbar

export const setTabActiveFlag = (payload) => ({
    type: SET_TAB_ACTIVE_FLAG,
    payload
});

//Auth

export const setAuthStatusFlag = (payload) => ({
    type: SET_AUTH_STATUS_FLAG,
    payload
});

//User

export const setCurrentUser = (payload) => ({
    type: SET_CURRENT_USER,
    payload
});

//CardList

export const setCardList = (payload) => ({
    type: SET_CARD_LIST,
    payload
});

export const addToCardList = (payload) => ({
    type: ADD_TO_CARD_LIST,
    payload
});

export const clearCardList = () => ({
    type: CLEAR_CARD_LIST,
});

export const removeCardFromList = (payload) => ({
    type: REMOVE_CARD_FROM_LIST,
    payload
});

