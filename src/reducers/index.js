import { combineReducers } from "redux";
import authReducer from "./auth";

const rootReducer = combineReducers({
    authReducer: authReducer
})

export default rootReducer