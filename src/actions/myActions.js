//Navbar
export const SET_TAB_ACTIVE_FLAG = 'SET_TAB_ACTIVE_FLAG';

//Auth
export const SET_AUTH = "SET_AUTH";
export const SET_AUTH_STATUS_FLAG = "SET_AUTH_STATUS_FLAG";
export const UNSET_AUTH_STATUS_FLAG = "UNSET_AUTH_STATUS_FLAG";
export const SET_GOOGLE_ACCESS_TOKEN = "SET_GOOGLE_ACCESS_TOKEN";


//User
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const UNSET_CURRENT_USER = "UNSET_CURRENT_USER";

//CardList
export const SET_CARD_LIST = "SET_CARD_LIST";
export const ADD_TO_CARD_LIST = "ADD_TO_CARD_LIST";
export const CLEAR_CARD_LIST = "CLEAR_CARD_LIST";
export const REMOVE_CARD_FROM_LIST = "REMOVE_CARD_FROM_LIST";

//Database
export const SET_DB = "SET_DB";


// Action Creators

// Navbar

export const setTabActiveFlag = (payload) => ({
    type: SET_TAB_ACTIVE_FLAG,
    payload
});

//Auth
export const setAuth = (payload) => ({
    type: SET_AUTH,
    payload
});

export const unsetAuthStatusFlag = () => ({
    type: UNSET_AUTH_STATUS_FLAG,
});

export const setAuthStatusFlag = (payload) => ({
    type: SET_AUTH_STATUS_FLAG,
    payload
});

export const setGoogleAccesToken = (payload) => ({
    type: SET_GOOGLE_ACCESS_TOKEN,
    payload
});


//User

export const setCurrentUser = (payload) => ({
    type: SET_CURRENT_USER,
    payload
});

export const unsetCurrentUser = () => ({
    type: UNSET_CURRENT_USER,
})

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

//Database
export const setDB = (payload) => ({
    type: SET_DB,
    payload
});
