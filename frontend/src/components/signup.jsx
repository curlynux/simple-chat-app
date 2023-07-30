import { useSelector, useDispatch } from "react-redux";
import {
	setLogin,
	setEmail,
	setPassword,
} from "../reduxLogic/reducers/signupReducer";
var Signup = () => {
	const login = useSelector((state) => state.signup.login);
	const email = useSelector((state) => state.signup.email);
	const password = useSelector((state) => state.signup.password);
	const dispatch = useDispatch();

	const sendLogin = (Event) => dispatch(setLogin(Event.target.value));
	const sendEmail = (Event) => dispatch(setEmail(Event.target.value));
	const sendPassword = (Event) => dispatch(setPassword(Event.target.value));

	async function handleSubmit(Event) {
		Event.preventDefault();
		console.log(Event);
		await fetch("http://localhost:1337/signup", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ login, email, password }),
			mode: "cors",
		})
			.then(async (response) => {
				return await response.json().then(async (data) => {
					return await console.log(data);
				});
			})
			.catch(async (error) => {
				return await console.error(error);
			});
	}

	return (
		<div className="signup">
			<h1>sign up</h1>
			<form>
				<label>
					Login
					<input name="login" type="text" value={login} onChange={sendLogin} />
				</label>
				<label>
					Email
					<input name="email" type="text" value={email} onChange={sendEmail} />
				</label>
				<label>
					Password
					<input
						type="password"
						name="password"
						value={password}
						onChange={sendPassword}
					/>
				</label>
				<button type="submit" onClick={handleSubmit}>
					sign up
				</button>
				<a href="/">login</a>
			</form>
		</div>
	);
};

export default Signup;
