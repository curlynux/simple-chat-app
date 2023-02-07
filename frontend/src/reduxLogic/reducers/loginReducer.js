import {createSlice} from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "login",
    initialState: {
        login: "",
        email: "",
        password: "",
        token: "",
        isLoading: false,
        error: null
    },
    reducers: {
        setLogin: (state, action) => {state.login = action.payload},
        setEmail: (state, action) => {state.email = action.payload},
        setPassword: (state, action) => {state.password = action.payload},
        setToken: (state, action) => {state.token = action.payload},
        setIsLoading: (state, action) => {state.isLoading = action.payload},
        setError: (state, action) => {state.error = action.payload}
    }
});

export const {setLogin, setEmail, setPassword, setToken, setIsLoading, setError} = loginSlice.actions;
export default loginSlice;