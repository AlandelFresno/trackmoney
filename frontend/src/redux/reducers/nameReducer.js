import { types } from '../types';

const initialState = {
    name: ''
};

export const authReducer = (state = initialState, action) => {
    console.log(action)
    console.log(action.name)
    switch (action.types) {

        case types.authNameLogIn:
            return {
                ...state,
                name: action.name
            };

        case types.authNameLogOut:
            return {
                ...state,
                name: ''
            };

        default:
            return state;
    };

};