import { Outlet, useNavigate } from "react-router-dom";

function PrivateRoote() 
{
    const Navigate = useNavigate()
    const token = JSON.parse(localStorage.getItem("token"));

    if (token) return <Outlet />;
    else <Navigate to="/login"/>;
}

export default PrivateRoote;