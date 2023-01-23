import { useState } from "react";

var Login = () => 
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
            <button>Login</button>
        </form>
    </div>)
}

export default Login;