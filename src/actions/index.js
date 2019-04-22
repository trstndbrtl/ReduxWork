import { SET_LOGIN, SET_TRACKER } from './action-types';

export function setLogin(isLogged){
    return function(dispatch){
        dispatch({
            type : SET_LOGIN,
            payload : isLogged
        });
        dispatch(setTracker());
    }
}

export function setTracker(){
    return {
        type : SET_TRACKER
    }
}