import {createSlice} from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "auth",
    initialState: {
        login: "",
        email: "",
        password: "",
        userId: "",
        token: "",
        isLoading: false,
        error: null
    },
    reducers: {
        setLogin: (state, action) => {state.login = action.payload},
        setEmail: (state, action) => {state.email = action.payload},
        setPassword: (state, action) => {state.password = action.payload},
        setUserId: (state, action) => {state.userId = action.payload},
        setToken: (state, action) => {state.token = action.payload},
        setIsLoading: (state, action) => {state.isLoading = action.payload},
        setError: (state, action) => {state.error = action.payload}
    }
});

export const {setLogin, setEmail, setPassword, setUserId, setToken, setIsLoading, setError} = loginSlice.actions;
export default loginSlice;