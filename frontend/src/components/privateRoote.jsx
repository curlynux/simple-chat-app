import { useNavigate, Outlet} from "react-router-dom";
import { useEffect } from "react";
function PrivateRoote() 
{
    const navigate = useNavigate()
    const token = JSON.parse(localStorage.getItem("token"));
   
    useEffect(() => 
    {
        if(token) navigate("/home")
        else navigate("/")
    }, [token, navigate]);
    return <Outlet/>;
}

export default PrivateRoote;