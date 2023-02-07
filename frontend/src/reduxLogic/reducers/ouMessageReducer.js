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
        setLogin: (state) => state.outMessage.login,
        setUserId: (state) => state.outMessage.userId,
        setDate: (state) => state.outMessage.date,
        setMessage: (state) => state.outMessage.message
    }
});

export const {setLogin, setUserId, setDate, setMessage} = outMessageSlice.actions
export default outMessageSlice;