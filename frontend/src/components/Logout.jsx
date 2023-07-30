import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
	setToken,
	setLogin,
	setEmail,
	setPassword,
} from "../reduxLogic/reducers/loginReducer";
function LogoutButton() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const token = useSelector((state) => state.login.token);

	function logout() {
		if (token) {
			navigate("/", { replace: true });
			dispatch(setToken(""));
			dispatch(setEmail(""));
			dispatch(setLogin(""));
			dispatch(setPassword(""));
		}
	}

	return (
		<button name="logout" onClick={logout}>
			logout
		</button>
	);
}

export default LogoutButton;
