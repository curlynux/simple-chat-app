import { useState } from "react";

var Login = () => 
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    localStorage.setItem("TEST", "just a test")
    const submit_credentials = (event) => 
    {
        event.preventDefault(event)
        fetch("http://localhost:1337/login", 
        {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            method: "POST",
            mode: "cors",
            body: JSON.stringify({email, password})
        })
        .then((response) => response.json().then(data => 
        {
            localStorage.setItem("test", "test")
            console.log("TEST");
            localStorage.setItem("token", JSON.stringify(data.token));
            localStorage.setItem("userId", JSON.stringify(data.userId));
            console.log("TEST 2");
            console.log(data)
        }))
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