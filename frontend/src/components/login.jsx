import { useState } from "react";
// import { useNavigate } from "react-router-dom";
var Login = () => 
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const navigate = useNavigate();
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
            localStorage.setItem("token", JSON.stringify(data.token));
            localStorage.setItem("userId", JSON.stringify(data.userId));
            console.log(data);
            // navigate("/home");
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