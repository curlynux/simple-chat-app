import { useSelector, useDispatch } from "react-redux";
import LogoutButton from "../Logout";
import { setMessage, setDate } from "../../reduxLogic/reducers/clientReducer";
const socket = new WebSocket("ws://[::]:8000");


function Message() {


    const dispatch = useDispatch();
    const message = useSelector((state) => state.message.message);
    const date = useSelector((state) => state.message.date);
    const userId = useSelector((state) => state.login.userId);
    const token = useSelector((state) => state.login.token);
    const login = useSelector((state) => state.login.login);

    function formatTime() {
        var date = new Date();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();

        return (`${hour}:${minute}:${second}`)
    }


    async function handleMessge(event) {
        event.preventDefault(event)
        socket.onopen = () => {
            console.log("user connected !");
            socket.send(JSON.stringify("TEST"))

        }
        dispatch(setDate(formatTime()));
        socket.send(JSON.stringify({
            login, userId, message, date, token
        }));

        socket.onmessage = (event) =>
            console.log(`message received from node.js: ${event.data}`);
        console.log("message sent !")
    }

    return (<div className="chat">
        <div className="messageHistory">
            <div className="text">
                <strong>{login}</strong>
                <span>{date}</span>
                <p>placeholder</p>
            </div>
            <div className="text">
                <strong>{login}</strong>
                <span>{date}</span>
                <p>placehorder</p>
            </div>
        </div>
        <form>
            <input type="text" name="text" value={message} onChange={(e) => dispatch(setMessage(e.target.value))} />
            <button onClick={handleMessge} name="send" type="submit">send</button>
        </form>
        <LogoutButton />
    </div>)
}

export default Message;