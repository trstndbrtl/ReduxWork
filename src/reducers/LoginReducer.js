import { SET_LOGIN } from "../actions/action-types";

const initialState = {
    isLogged : false
};

export default function LoginReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOGIN :
            return {
                isLogged: action.payload
            };
        default :
            return state;
    }
}