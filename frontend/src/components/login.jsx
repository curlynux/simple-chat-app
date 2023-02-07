import "../assets/login.css";
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
    setIsLoading,
} from "../reduxLogic/reducers/loginReducer";

var Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const email = useSelector((state) => state.login.email)
    const password = useSelector((state) => state.login.password);
    const token = useSelector((state) => state.login.token);
    const isLoading = useSelector((state) => state.login.isLoading);

    const dispatchEmail = (event) => dispatch(setEmail(event.target.value));
    const dispatchPassword = (event) => dispatch(setPassword(event.target.value));

    setIsLoading(false)
    const submit_credentials = async (event) => {
        console.log(email, password);
        event.preventDefault(event)
        await fetch("http://localhost:1337/login",
            {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST",
                mode: "cors",
                body: JSON.stringify({ email, password })
            })
            .then(async (response) => {
                return await response.json().then(data => {
                    dispatch(setToken(data.token));
                    dispatch(setUserId(data.userId));
                    dispatch(setLogin(data.login));
                    console.log(data);
                    navigate("/home", { replace: true });
                });
            })
            .catch(error => {
                console.log(error)
                dispatch(setError(error))
            })
        setIsLoading(true)
    }

    useEffect(() => {
        if (token) navigate("/home", { replace: true })
    }, [token, navigate])

    useEffect(() => {
        setIsLoading(true)
        async function getLogin() {
            return await fetch("http://localhost:1337/user",
                {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        Authorization: "application/json",
                        Accept: "application/json"
                    },
                    body: JSON.stringify({ email })
                })
                .then(async (response) => {
                    return await response.json()
                        .then((data) => console.log(data))
                })
                .catch((error) => console.log(`oups error ! ${error}`))
        }
        if (isLoading === true) getLogin();
    }, [email, isLoading]);

    return (
        <div>
            <h1>Login</h1>
            <form>
                <label>
                    Email
                    <input type="email" name="email" value={email} onChange={dispatchEmail} />
                </label>
                <label>
                    password
                    <input type="password" name="password" value={password} onChange={dispatchPassword} />
                </label>
                <button onClick={submit_credentials}>Login</button>
            </form>
        </div>)
}

export default Login;