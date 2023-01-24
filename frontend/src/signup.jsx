import { useState } from "react";

var Signup = () => 
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

        function handle_submit(event) 
        {
            event.preventDefault();
            fetch("http://localhost:1337/signup", 
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email, password}),
                mode: "cors"
            })
            .then((response) => console.log(response))
            .catch(error => console.error(error))
        }

    return(
    <div className="signup">
        <h1>sign up</h1>
        <form >
            <label>
                Email or login
                <input name="emailOrLogin" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
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