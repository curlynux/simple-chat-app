// import { useNavigate } from "react-router-dom";
import LogoutButton from "../Logout";
const { useState, useEffect } = require("react")

function Text() 
{
    const [text, setText] = useState("");
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
            body: JSON.stringify({text})
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
            <input type="text" name="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={outMessage} name="send" type="submit">send</button>
        </form>
        <LogoutButton/>
    </div>)
}

export default Text;