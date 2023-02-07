import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLogin, setEmail, setPassword } from "../reduxLogic/reducers/signupReducer";
var Signup = () => {
    const login = useSelector((state) => state.signup.login);
    const email = useSelector((state) => state.signup.email);
    const password = useSelector((state) => state.signup.password);
    const dispatch = useDispatch();

    const sendLogin = (event) => dispatch(setLogin(event.target.value));
    const sendEmail = (event => dispatch(setEmail(event.target.value)));
    const sendPassword = (event) => dispatch(setPassword(event.target.value));

    async function handleSubmit(event) {
        event.preventDefault();
        await fetch("http://localhost:1337/signup",
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ login, email, password }),
                mode: "cors"
            })
            .then(async (response) => {
                return await response.json().then(async (data) => { return await console.log(data) })
            })
            .catch(async (error) => { return await console.error(error) })
    }

    return (
        <div className="signup">
            <h1>sign up</h1>
            <form>
                <label>
                    Login
                    <input name="login" type="text" value={login} onChange={sendLogin} />
                </label>
                <label>
                    Email
                    <input name="email" type="text" value={email} onChange={sendEmail} />
                </label>
                <label>
                    Password
                    <input type="password" name="password" value={password} onChange={sendPassword} />
                </label>
                <button type="submit" onClick={handleSubmit}>sign up</button>
            </form>
        </div>)
}

export default Signup;