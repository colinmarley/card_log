import { SET_AUTH_STATUS_FLAG, SET_AUTH, SET_GOOGLE_ACCESS_TOKEN, UNSET_AUTH_STATUS_FLAG } from '../actions/myActions';


let initState = {
    auth: null,
    status: false,
    googleAccessToken: null,
}

const authReducer  = (state = initState, action) => {
    switch (action.type) {

        case SET_AUTH_STATUS_FLAG:
            console.log(`New Auth Status: ${action.payload}`);
            return {
                ...state,
                status: true
            }
        case UNSET_AUTH_STATUS_FLAG:
            return {
                ...state,
                status: false
            }
        case SET_AUTH:
            console.log("Setting Auth", action.payload)
            return {
                ...state,
                auth: action.payload
            }
        case SET_GOOGLE_ACCESS_TOKEN:
            return {
                ...state,
                googleAccessToken: action.payload
            }

        default:
            return state
    }
}

export default authReducer;


