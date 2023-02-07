import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: "",
    email: "",
    password: ""
}
const signupSlice = createSlice({
    name: "signup",
    initialState,
    reducers: {
        setLogin: (state, action) => state.login = action.payload,
        setEmail: (state, action) => state.email = action.payload,
        setPassword: (state, action) => state.password = action.payload
    }
});

export const {setLogin, setEmail, setPassword} = signupSlice.actions;
export default signupSlice;