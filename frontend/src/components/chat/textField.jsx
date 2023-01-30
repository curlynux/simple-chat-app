// import { useNavigate } from "react-router-dom";
// import LogoutButton from "../Logout";
const { useState, useEffect } = require("react")

function Text() 
{
    // const token = JSON.parse(localStorage.getItem("token"));
    // const navigate = useNavigate();
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
            console.log(`message received TEXT: ${event.data}`);
    }, []);
    // useEffect(() => {if (!token) navigate("/", {replace: true})}, [token, navigate])
    const [text, setText] = useState("");
    return(<div className="chat">
        <div className="messageHistory">
            <p>text</p>
        </div>
        <div className="allInput">
            <input type="text" value={text} onChange={e => setText(e.target.value)}/>
            <input type="submit" name="sendMessage" value="send"/>
        </div>
        {/* <LogoutButton/> */}
    </div>)
}

export default Text;