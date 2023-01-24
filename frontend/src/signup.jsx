import { useState } from "react";

var Signup = () => 
{
    const [email, setEmail] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

        async function handle_submit(event) 
        {
            event.preventDefault();
            await fetch("http://localhost:1337/signup", 
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({login, email, password}),
                mode: "cors"
            })
            .then(response => console.log(response.json().then(data => console.log(data))))
            .catch(error => console.error(error))
        }

    return(
    <div className="signup">
        <h1>sign up</h1>
        <form >
            <label>
                Login
                <input name="login" type="text" value={login} onChange={(e) => setLogin(e.target.value)} />
            </label>
            <label>
                Email
                <input name="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                Password
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit" onClick={handle_submit}>sign up</button>
        </form>
    </div>)
}

export default Signup;