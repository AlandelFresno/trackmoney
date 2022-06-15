import { types } from "../types";

export const NameLogIn = (name) => {
    localStorage.setItem('name', name);
    return{
        type: types.NameLogIn,
        name
    };
};

export const NameLogOut = () => {
    localStorage.setItem('name', '');
    return {
        type: types.NameLogOut
    };
};