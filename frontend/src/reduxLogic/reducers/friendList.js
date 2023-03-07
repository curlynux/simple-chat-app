import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: "",
    login: "",
    profilePicture: "",
    userId: "",
    loading: false
}
const friendSlice = createSlice({
    name: "friendList",
    initialState,
    reducers: {
        setId: (state, action) => {state.id = action.payload},
        setLogin: (state, action) => {state.login = action.payload},
        setProfilePicture: (state, action) => {state.profilePicture = action.payload},
        setUserId: (state, action) => {state.userId = action.payload},
        setLoading: (state, action) => {state.loading = action.payload}
    }
});

export const {setId, setLogin, setProfilePicture, setUserId, setLoading} = friendSlice.actions;
export default friendSlice;