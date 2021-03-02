//Navbar
export const SET_TAB_ACTIVE_FLAG = 'SET_TAB_ACTIVE_FLAG'

//Auth
export const SET_AUTH_STATUS_FLAG = "SET_AUTH_STATUS_FLAG"

//User
export const SET_CURRENT_USER = "SET_CURRENT_USER";


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

