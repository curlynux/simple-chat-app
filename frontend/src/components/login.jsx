import "../assets/login.css";
import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    setLogin, 
    setEmail, 
    setPassword, 
    setToken,
    setUserId,
    setError, 
    setIsLoading
} from "../reduxLogic/reducers/loginReducer";

var Login = () => 
{
    const navigate = useNavigate();
    const login = useSelector((state) => state.login)
    const email = useSelector((state) => state.email)
    const password = useSelector((state) => state.password);
    const token = useSelector((state) => state.token);
    const userId = useSelector((state) => state.userId);
console.log(token, email, password)
    useEffect(() => 
    {
        if(token) navigate("/home", {replace: true})
    }, [token, navigate])
    
    useEffect(() => 
    {
        async function getLogin () 
        {
            return await fetch("http://localhost:1337", 
            {
                method: "POST",
                mode: "cors",
                headers: {
                    Authorization: "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(email)
            })
            .then(async (response) => {return await response.json()
                .then((data) => console.log(data))})
                    .catch((error) => console.log(`oups error ! ${error}`))
        }
        getLogin();
    }, []);
    
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
                    setToken(JSON.stringify(data.token))
                    setUserId(JSON.stringify(data.userId))
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