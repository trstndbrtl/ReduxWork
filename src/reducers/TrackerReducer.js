import { SET_TRACKER } from "../actions/action-types";

const initialState = {
    trackerCount : 0
};

export default function TrackerReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TRACKER :
            return {
                trackerCount: state.trackerCount + 1
            };
        default :
            return state;
    }
}