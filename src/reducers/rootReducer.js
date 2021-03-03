import { combineReducers } from 'redux';

import navbarReducer from './navbarReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';
import cardListReducer from './cardListReducer';


const rootReducer = combineReducers({
    navbar: navbarReducer,
    auth: authReducer,
    user: userReducer,
    cardList: cardListReducer,
});

export default rootReducer;