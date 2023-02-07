import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setToken, setUserId } from "../reduxLogic/reducers/loginReducer";
function LogoutButton() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector((state) => state.login.token);
    const userId = useSelector((state) => state.login.userId);
    // console.log(token, userId)

    function logout() {

        if (token && userId) {
            navigate("/", { replace: true })
            dispatch(setToken(""))
            dispatch(setUserId(""))
        }

    }

    return (<button name="logout" onClick={logout}>logout</button>)
}

export default LogoutButton;