import { types } from '../types';

const initialState = {
    name: ''
};

export const nameReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.NameLogIn:
            return {
                name: action.name
            };
        case types.NameLogOut:
            return {
                ...state,
                name: ''
            };
        default:
            return state;
    };
};