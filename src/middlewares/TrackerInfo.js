import { setTracker } from '../actions';
import { SET_TRACKER } from "../actions/action-types";

export const TrackerInfo = (store) => (next) => (action) => {
    if (action.type !== SET_TRACKER) {
        store.dispatch(setTracker());
    }
    next(action);
};