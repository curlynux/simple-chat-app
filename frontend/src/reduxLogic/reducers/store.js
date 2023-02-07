import loginReducer from "./loginReducer";
import { combineReducers } from "@reduxjs/toolkit";
import inMessageSlice from "./inMessageReducer";
import outMessageSlice from "./outMessageReducer";

const rootReducer = combineReducers({
    loginReducer, inMessageSlice, outMessageSlice
});

export default rootReducer;