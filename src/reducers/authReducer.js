import { SET_AUTH_STATUS_FLAG } from '../actions/myActions';


let initState = {
    status: false,
}

const authReducer  = (state = initState, action) => {
    switch (action.type) {

        case SET_AUTH_STATUS_FLAG:
            console.log(`New Auth Status: ${action.payload}`);
            return {
                ...state,
                status: action.payload
            }

        default:
            return state
    }
}

export default authReducer;


