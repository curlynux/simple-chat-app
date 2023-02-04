import loginReducer from "./loginReducer";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    loginReducer
});

export default rootReducer;