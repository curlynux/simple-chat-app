import { Outlet, useNavigate } from "react-router-dom";

function PrivateRoote() 
{
    const Navigate = useNavigate()
    const token = JSON.parse(localStorage.getItem("token"));
    
    if(token) <Navigate to="/home" />
    else <Navigate to="/" />
        return <Outlet />
}

export default PrivateRoote;