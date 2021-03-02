import { SET_CURRENT_USER } from '../actions/myActions';



let initState = {
    currentUser: {
        username: "",
        email: "",
        lastLoggedIn: "",
        memberSince: "",
        token: ""
    }
}

const userReducer  = (state = initState, action) => {
    switch (action.type) {

        case SET_CURRENT_USER:
            return {
                ...state, 
                currentUser: {
                    ...state.currentUser,
                    username: action.payload.username,
                    email: action.payload.email,
                    lastLoggedIn: action.payload.lastLoggedIn,
                    memberSince: action.payload.memberSince,
                    token: action.payload.token
                }
            }

        default:
            return state
    }
}

export default userReducer;