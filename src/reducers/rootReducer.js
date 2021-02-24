import { combineReducers } from 'redux';

import navbarReducer from './navbarReducer';


const rootReducer = combineReducers({
    navbar: navbarReducer
});

export default rootReducer;