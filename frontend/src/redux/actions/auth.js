import { types } from '../types';

export const LogIn = () => {
    localStorage.setItem('auth', true);
    return {
        type: types.authLogIn,
        token: true
    };
};

export const LogOut = () => {
    localStorage.setItem('auth', false);
    return{
        type: types.authLogOut,
        token: false 
    };
};