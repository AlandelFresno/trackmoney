import { types } from '../types';

const initialState = {
    login: false
};

export const authReducer = (state = initialState, action) => {

    switch (action.types) {
        case types.authLogin:
            return {
                ...state,
                login: action.token
            };
    
        case types.authLogOut:
            return {
                ...state,
                login: action.token
            };

        default:
            return state;
    };

};