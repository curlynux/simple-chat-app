// import { useNavigate } from "react-router-dom";
import LogoutButton from "../Logout";
const { useState, useEffect } = require("react")

function Text() 
{
    const [message, setMessage] = useState("");
    useEffect(() => 
    {
        const URL = "ws://localhost:1337";
        const ws = new WebSocket(URL)
        ws.onopen = () => 
        {
            console.log("user connected !");
            ws.send("it's from react");
        }
        ws.onmessage = (event) => 
            console.log(`message received from node.js: ${event.data}`);
    }, []);

    useEffect(() => 
    {
        async function getUser() 
        {
            const userId = JSON.parse(localStorage.getItem("userId"));
            console.log(`userId: ${userId}`, JSON.stringify(userId));
            return await fetch("http://localhost:1337/user", 
                {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Authorization": `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
                        "X-Authenticated-Userid": JSON.parse(localStorage.getItem("userId")),
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({userId})
                }).then(async (response) => 
                {
                     return await response.json()
                    .then(async (data) => { 
                        console.log(data)
                        return await localStorage.setItem("login", JSON.stringify(data.login))
                    });
                }).catch(async (error) => { return await console.log(error)});
        }
        getUser()
    }, []);

    async function outMessage(event) 
    {
        event.preventDefault(event)
        const userId = JSON.parse(localStorage.getItem("userId"));
        const login =  JSON.parse(localStorage.getItem("login"));

        await fetch("http://localhost:1337/message", 
        {
            method: "POST",
            mode: "cors",
            headers: {
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
                "X-Authenticated-Userid":`${JSON.parse(localStorage.getItem("userId"))}`,
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({userId, login, message, date: JSON.stringify(Date())})
        }).then(async (response) => 
        {
            return await response.json().then((data) => console.log(data))
        }).catch((error) => console.error(error))
        
    }
    return(<div className="chat">
        <div className="messageHistory">
            <p>text</p>
            <p>text 2</p>
        </div>
        <form>
            <input type="text" name="text" value={message} onChange={(e) => setMessage(e.target.value)} />
            <button onClick={outMessage} name="send" type="submit">send</button>
        </form>
        <LogoutButton/>
    </div>)
}

export default Text;