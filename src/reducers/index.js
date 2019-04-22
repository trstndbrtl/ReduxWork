import { combineReducers } from "redux";
import LoginReducer from './LoginReducer';
import TrackerReducer from './TrackerReducer';

const rootReducer = combineReducers({
    login : LoginReducer,
    tracker : TrackerReducer
});

export default rootReducer;