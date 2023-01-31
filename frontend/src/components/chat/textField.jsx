// import { useNavigate } from "react-router-dom";
import LogoutButton from "../Logout";
const { useState, useEffect } = require("react")

function Text() 
{
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
    const [text, setText] = useState("");
    return(<div className="chat">
        <div className="messageHistory">
            <p>text</p>
            <p>text 2</p>
        </div>
        <div className="allInput">
            <input type="text" placeholder="send a message" value={text} onChange={e => setText(e.target.value)}/>
            <input type="submit" name="sendMessage" value="send"/>
        </div>
        <LogoutButton/>
    </div>)
}

export default Text;