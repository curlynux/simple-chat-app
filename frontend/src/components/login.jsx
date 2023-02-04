import "../assets/login.css";
import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {loginSlice, setError, setIsLoading} from "../reduxLogic/reducers/loginReducer";
import { useDispatch, useSelector } from "@reduxjs/toolkit";
import { useMutation } from "react-query";

const useSignup = () => 
{
    const dispatch = useDispatch();
    const selector = useSelector();
    const mutate = useMutation();
    const login = selector(state => state.login.login);
    const email = selector(state => state.login.email);
    const password = selector(state => state.login.password);
    const isLoading = selector(state => state.login.isLoading);
    const error = selector(state => state.login.error);
    const [mutateLogin, {isLoading: isLoginLoading, error: loginError}] = mutate(
        async ({login, email, password}) => 
        {
            
        }
    )
}

var Login = () => 
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const token = JSON.parse(localStorage.getItem("token"));

    useEffect(() => 
    {
        if(token) navigate("/home", {replace: true})
    }, [token, navigate])
        
    const submit_credentials = async (event) => 
    {
        event.preventDefault(event)
        await fetch("http://localhost:1337/login", 
        {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            method: "POST",
            mode: "cors",
            body: JSON.stringify({email, password})
        })
        .then(async (response) => 
        {
            return await response.json().then(data => 
                {
                    localStorage.setItem("token", JSON.stringify(data.token));
                    localStorage.setItem("userId", JSON.stringify(data.userId));
                    console.log(data);
                    navigate("/home", {replace: true})
                });
        })
        .catch(error => console.log(error))
        
    }

    return(
    <div>
        <h1>Login</h1>
        <form>
            <label>
                Email
                <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
            </label>
            <label>
                password
                <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </label>
            <button onClick={submit_credentials}>Login</button>
        </form>
    </div>)
}

export default Login;