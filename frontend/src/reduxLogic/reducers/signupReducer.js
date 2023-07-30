import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	login: "",
	email: "",
	password: "",
};
const signupSlice = createSlice({
	name: "signup",
	initialState,
	reducers: {
		setLogin: (state, action) => void (state.login = action.payload),
		setEmail: (state, action) => void (state.email = action.payload),
		setPassword: (state, action) => void (state.password = action.payload),
	},
});

export const { setLogin, setEmail, setPassword } = signupSlice.actions;
export default signupSlice;
