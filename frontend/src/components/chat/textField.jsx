// import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoutButton from "../Logout";
const { useState, useEffect } = require("react")
function Text() {

    const [isFetched, setIsFetched] = useState(false);
    const [message, setMessage] = useState("");
    const [userId, setUserId] = useState();
    const [login, setLogin] = useState();
    const [date, setDate] = useState();
    const [socket, setSocket] = useState(new WebSocket("ws://[::]:8000"));
    const token = useSelector((state) => state.login.token);
    console.log(token)

    useEffect(() => {
        socket.onopen = () => {
            console.log("user connected !");
            socket.send("one test YESS YEAH tex CURLYNUX !");
            socket.send(JSON.stringify({
                userId: userId,
                login: login,
                message: message,
                date: date
            }))
        }
        socket.onmessage = (event) =>
            console.log(`message received from node.js: ${event.data}`);
    }, [userId, login, message, date, socket]);

    async function outMessage(event) {
        event.preventDefault(event)

        await fetch("http://localhost:1337/message",
            {
                method: "POST",
                mode: "cors",
                headers: {
                    "Authorization": `Bearer ${JSON.parse(token)}`,
                    "X-Authenticated-Userid": `${JSON.parse(userId)}`,
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ userId, login, message, date: setDate(Date()) })
            }).then(async (response) => {
                return await response.json().then((data) => console.log(data))
            }).catch((error) => console.error(error))

    }
    return (<div className="chat">
        <div className="messageHistory">
            <p>text</p>
            <p>text 2</p>
        </div>
        <form>
            <input type="text" name="text" value={message} onChange={(e) => setMessage(e.target.value)} />
            <button onClick={outMessage} name="send" type="submit">send</button>
        </form>
        <LogoutButton />
    </div>)
}

export default Text;