import { useState } from "react";

var Login = () => 
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const submit_credentials = (event) => 
    {
        event.preventDefault(event)
        fetch("http://localhost:1337", 
        {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            method: "GET",
            mode: "cors"
        })
        .then((response) => response.json().then(data => console.log(data)))
    }

    return(
    <div>
        <h1>Login</h1>
        <form>
            <label>
                Email or Login
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