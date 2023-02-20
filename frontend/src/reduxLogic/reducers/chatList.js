import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    profilePicture: "",
    newMessage: ""
}
const chatSlice = createSlice({
    name: "chatList",
    initialState,
    reducers: {
        setProfilePicture: (state, action) => {state.profilePicture = action.payload},
        setPewMessage: (state, action) => {state.newMessage = action.payload}
    }
});

export const {setProfilePicture, setPewMessage} = chatSlice.actions;
export default chatSlice;