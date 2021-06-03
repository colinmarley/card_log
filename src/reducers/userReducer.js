import { SET_CURRENT_USER, UNSET_CURRENT_USER } from '../actions/myActions';



let initState = {
    currentUser: null,
}

const userReducer  = (state = initState, action) => {
    switch (action.type) {

        case SET_CURRENT_USER:
            console.log("Set current user called")
            console.log(action.payload)
            return {
                ...state, 
                currentUser: action.payload,
            }
        case UNSET_CURRENT_USER:
            return {
                ...state,
                currentUser: null
            }

        default:
            return state
    }
}

export default userReducer;