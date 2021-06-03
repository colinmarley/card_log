import { combineReducers } from 'redux';

import navbarReducer from './navbarReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';
import cardListReducer from './cardListReducer';
import dbReducer from './dbReducer';


const rootReducer = combineReducers({
    navbar: navbarReducer,
    auth: authReducer,
    user: userReducer,
    cardList: cardListReducer,
    db: dbReducer,
});

export default rootReducer;