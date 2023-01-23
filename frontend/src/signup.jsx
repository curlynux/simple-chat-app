import { useState } from "react";

var Signup = () => 
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handle_submit(event) 
    {
        event.preventDefault();
    }

    function validated_form() 
    {
        return email.length > 0 && password.length > 0;
    }

    return(
    <div className="signup">
        <h1>sign up</h1>
        <form onSubmit={handle_submit}>
            <label>
                Email or login
                <input name="emailOrLogin" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                Password
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit">sign up</button>
        </form>
    </div>)
}

export default Signup;