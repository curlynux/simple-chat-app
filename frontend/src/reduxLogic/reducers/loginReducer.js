import {createSlice} from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "login",
    initialState: {
        login: "",
        email: "",
        password: "",
        token: "",
        userId: "",
        isLoading: false,
        error: null
    },
    reducers: {
        setLogin: (state, action) => {state.login = action.payload},
        setEmail: (state, action) => {state.email = action.payload},
        setPassword: (state, action) => {state.password = action.payload},
        setToken: (state, action) => {state.token = action.payload},
        setUserId: (state, action) => {state.userId = action.userId},
        setIsLoading: (state, action) => {state.isLoading = action.payload},
        setError: (state, action) => {state.error = action.payload}
    }
});

export const {setLogin, setEmail, setPassword, setToken, setUserId, setIsLoading, setError} = loginSlice.actions;
export default loginSlice;