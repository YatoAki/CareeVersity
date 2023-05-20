import { combineReducers } from "redux";
import authReducer from "./auth";
import userReducer from "./user";

const rootReducer = combineReducers({
    authReducer: authReducer,
    userReducer: userReducer
})

export default rootReducer