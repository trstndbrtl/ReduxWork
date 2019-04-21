import { SET_LOGIN } from './action-types';

export function setLogin(isLogged){
    return {
        type : SET_LOGIN,
        payload : isLogged
    }
}