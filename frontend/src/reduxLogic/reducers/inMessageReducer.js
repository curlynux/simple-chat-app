import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: "inMessage",
    initialState: {
        login: "",
        userId: "",
        date: {},
        message: ""
    },
    reducers: {
        setLogin: (state) => state.inMessage.login,
        setUserId: (state) => state.inMessage.userId,
        setDate: (state) => state.inMessage.date,
        setMessage: (state) => state.inMessage.message
    }
});

export const {setLogin, setUserId, setDate, setMessage} = messageSlice.actions
export default messageSlice;