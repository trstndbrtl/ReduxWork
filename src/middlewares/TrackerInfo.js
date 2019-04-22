import { setTracker } from '../actions';
import { SET_TRACKER } from "../actions/action-types";

export const TrackerInfo = function(store){
    return function (next) {
        return function (action) {
            if (action.type !== SET_TRACKER) {
                store.dispatch(setTracker());
            }
            console.log('action tracker : ', action);
            next(action);
        }
    }
};