import {
    SET_DB
} from '../actions/myActions';


let initState = {
    db: null,

}


const dbReducer = (state = initState, action) => {
    switch(action.type) {
        case SET_DB:
            return {...state, db: action.payload};
        default:
            return state;
    }
}

export default dbReducer;