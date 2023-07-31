import { useSelector, useDispatch } from "react-redux";
import LogoutButton from "../Logout";
import { setMessage, setDate } from "../../reduxLogic/reducers/clientReducer";
import Friends from "./friends";
import { setLoading } from "../../reduxLogic/reducers/friendList";
import { useEffect } from "react";
var socket = new WebSocket("ws://[::]:8000");

function Message() {
	const dispatch = useDispatch();
	const message = useSelector((state) => state.message.message);
	const date = useSelector((state) => state.message.date);
	const userId = useSelector((state) => state.login.userId);
	const token = useSelector((state) => state.login.token);
	const login = useSelector((state) => state.login.login);
	const loading = useSelector((state) => state.friendSlice.loading);

	function formatTime() {
		var date = new Date();
		var hour = date.getHours();
		var minute = date.getMinutes();
		var second = date.getSeconds();

		return `${hour}:${minute}:${second}`;
	}

	useEffect(() => {
		socket.onopen = () => {
			console.log("user connected !");
			socket.send(JSON.stringify("TEST"));
		};
		socket.send(
			JSON.stringify({
				login,
				userId,
				message,
				date,
				token,
			})
		);
		console.log("websocket connected");
	}, [login, userId, message, date, token]);
	async function handleMessge(Event) {
		Event.preventDefault(Event);

		socket.send(
			JSON.stringify({
				login,
				userId,
				message,
				date,
				token,
			})
		);
		console.log(date);
		dispatch(setDate(formatTime()));
	}

	useEffect(() => {
		setTimeout(() => {
			dispatch(setLoading(true));
			console.log(loading);
		}, 3000);
	}, [loading, dispatch]);
	return (
		<div className="chat">
			<div className="wrapper">
				<div className="side1">{loading && <Friends />}</div>
				<div className="side2">
					<div className="messageHistory">
						<div className="text">
							<strong>{login}</strong>
							<span>{date}</span>
							<p>placeholder</p>
						</div>
						<div className="text">
							<strong>{login}</strong>

							<span>{date}</span>
							<p onChange={(Event) => dispatch(setMessage(Event.target.value))}>
								{message}
							</p>
						</div>
					</div>
					<form>
						<input
							type="text"
							name="text"
							value={message}
							onChange={(e) => dispatch(setMessage(e.target.value))}
						/>
						<button name="send" onClick={handleMessge} type="submit">
							send
						</button>
					</form>
				</div>
				<LogoutButton />
			</div>
		</div>
	);
}

export default Message;
