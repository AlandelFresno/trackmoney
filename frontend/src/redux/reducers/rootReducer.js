import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { nameReducer } from './nameReducer';

const rootReducers = combineReducers({
    auth: authReducer,
    name: nameReducer
});

export default rootReducers;