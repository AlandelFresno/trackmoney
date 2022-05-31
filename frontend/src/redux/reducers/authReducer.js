import { types } from '../types';

const initialState = {
    login: false,
};

export const authReducer = (state = initialState, action) => {
    // console.log(action);
    switch (action.type) {
        case types.authLogIn:
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