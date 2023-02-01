// import { useNavigate } from "react-router-dom";
import LogoutButton from "../Logout";
const { useState, useEffect } = require("react")

function Text() 
{
    const [message, setMessage] = useState("");
    const userId = JSON.parse(localStorage.getItem("userId"));
    const login =  JSON.parse(localStorage.getItem("login"));
    var date = JSON.stringify(Date());
    const WEBSOCKET_URL = "ws://localhost:1337";
    const ws = new WebSocket(WEBSOCKET_URL)
    useEffect(() => 
    {
        const data = {userId, login, message, date}    
        ws.onopen = () => 
        {
            console.log("user connected !");
            ws.send("one test YESS YEAH tex CURLYNUX !");
            ws.send(JSON.stringify(data))
        }
        ws.onmessage = (event) => 
            console.log(`message received from node.js: ${event.data}`);
    }, [userId, login, message, date]);
    

    useEffect(() => 
    {
        async function getUser() 
        {
            console.log(`userId: ${userId}`);
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
    }, [userId]);

    async function outMessage(event) 
    {
        event.preventDefault(event)

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