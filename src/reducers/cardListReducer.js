import { SET_CARD_LIST, ADD_TO_CARD_LIST, CLEAR_CARD_LIST, REMOVE_CARD_FROM_LIST } from '../actions/myActions';


let initState = {
    
    cards: [],

}

const authReducer  = (state = initState, action) => {
    switch (action.type) {
        case SET_CARD_LIST:
            return {...state, cards: action.payload.map(card => card)}
        case ADD_TO_CARD_LIST:
            return {...state, cards: [...state.cards, action.payload]}
        case CLEAR_CARD_LIST:
            return {...state, cards: []}
        case REMOVE_CARD_FROM_LIST:
            return state
        default:
            return state
    }
}

export default authReducer;


