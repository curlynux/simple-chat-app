import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    message: "",
    date: ""
}
const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        setMessage: (state, action) => {state.message = action.payload},
        setDate: (state, action) => {state.date = action.payload}
    }
})

export const {setMessage, setDate} = messageSlice.actions
export default messageSlice; 