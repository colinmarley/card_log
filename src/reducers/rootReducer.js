import { combineReducers } from 'redux';

import navbarReducer from './navbarReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';


const rootReducer = combineReducers({
    navbar: navbarReducer,
    auth: authReducer,
    user: userReducer,
});

export default rootReducer;