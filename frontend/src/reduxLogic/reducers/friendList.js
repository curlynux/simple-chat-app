import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: "",
    login: "",
    profilePicture: "",
    userId: ""
}
const friendList = createSlice({
    name: "friend",
    initialState,
    reducers: {
        setId: (state, action) => {state.id = action.payload},
        setLogin: (state, action) => {state.login = action.payload},
        setProfilePicture: (state, action) => {state.profilePicture = action.payload},
        setUserId: (state, action) => {state.userId = action.payload}
    }
});

export const {setId, setLogin, setProfilePicture, setUserId} = friendList.actions;
export default friendList;