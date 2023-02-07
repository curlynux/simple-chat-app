import { useNavigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
function PrivateRoote() {
        const Navigate = useNavigate()
        const token = useSelector((state) => state.login.token);
        return !token ? <Navigate to="/" /> : <Outlet />
}

export default PrivateRoote;