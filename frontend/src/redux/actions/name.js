import { types } from "../types";


export const NameLogIn = (name) => {
    // console.log(name)
    return{
        type: types.NameLogIn,
        name
    };
};

export const NameLogOut = () => {
    return {
        type: types.NameLogOut
    };
};