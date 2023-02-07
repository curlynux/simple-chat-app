import { createSlice } from "@reduxjs/toolkit";

const outMessageSlice = createSlice({
    name: "outMessage",
    initialState: {
        login: "",
        userId: "",
        date: {},
        message: ""
    },
    reducers: {
        setLogin: (state, action) => {state.login = action.payload},
        setUserId: (state, action) => {state.userId = action.payload},
        setDate: (state, action) => {state.date = action.payload},
        setMessage: (state, action) => {state.message = action.payload}
    }
});

export const {setLogin, setUserId, setDate, setMessage} = outMessageSlice.actions
export default outMessageSlice;