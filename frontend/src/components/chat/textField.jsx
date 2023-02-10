// import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LogoutButton from "../Logout";
import {
    setLogin,
    setMessage,
    setDate
} from "../../reduxLogic/reducers/outMessageReducer";
import { setUserId } from "../../reduxLogic/reducers/loginReducer";
const { useEffect } = require("react")


function Text() {

    const dispatch = useDispatch();
    const message = useSelector((state) => state.outMessage.message);
    const login = useSelector((state) => state.login.login);
    const date = useSelector((state) => state.outMessage.date);
    const userId = useSelector((state) => state.login.userId);
    const token = useSelector((state) => state.login.token);

    const dispatchMessage = dispatch(setMessage(message));
    const dispatchLogin = dispatch(setLogin(login));
    const dispatchDate = dispatch(setDate(formatTime()));
    const dispatchUserId = dispatch(setUserId(userId));

    function formatTime() {
        var date = new Date();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();

        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDay();

        return (`${hour}:${minute}:${second}`)
    }
    console.log(formatTime());
    console.log(token);
    console.log("login", login);
    console.log("USERID", userId);
    useEffect(() => {
        const socket = new WebSocket("ws://[::]:8000");
        socket.onopen = () => {
            console.log("user connected !");
            socket.send(JSON.stringify("TEST"))
            socket.send(JSON.stringify({
                login, userId, message, date
            }))
        }
        socket.onmessage = (event) =>
            console.log(`message received from node.js: ${event.data}`);
    }, [userId, login, message, date]);

    async function outMessage(event) {
        event.preventDefault(event)

        await fetch("http://localhost:1337/message",
            {
                method: "POST",
                mode: "cors",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userId: userId,
                    login: login,
                    message: message,
                    date: date
                })
            }).then(async (response) => {
                return await response.json().then((data) => console.log(data))
            }).catch((error) => console.error(error))

    }
    return (<div className="chat">
        <div className="messageHistory">
            <p>text 2</p>
            <div className="inMessage">
                <p><strong>login: {dispatchLogin.payload} </strong> message: {dispatchMessage.payload}</p>
                <p>{dispatchDate.payload}</p>
                <p>{dispatchUserId.payload}</p>
            </div>
        </div>
        <form>
            <input type="text" name="text" value={message} onChange={(e) => dispatch(setMessage(e.target.value))} />
            <button onClick={outMessage} name="send" type="submit">send</button>
        </form>
        <LogoutButton />
    </div>)
}

export default Text;