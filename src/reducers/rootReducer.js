import { combineReducers } from 'redux';

import navbarReducer from './navbarReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';
import cardReducer from './cardReducer';


const rootReducer = combineReducers({
    navbar: navbarReducer,
    auth: authReducer,
    user: userReducer,
    card: cardReducer
});

export default rootReducer;