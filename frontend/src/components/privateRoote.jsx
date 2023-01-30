import { useEffect } from "react";
import { useNavigate, Outlet} from "react-router-dom";
function PrivateRoote() 
{
    const navigate = useNavigate()
    const token = JSON.parse(localStorage.getItem("token"));
   
    
        useEffect(() => 
        {
            if(token) 
                navigate("/home", {replace: true})
            if(!token)
                navigate("/", {replace: true})
        }, [navigate, token])
        return <Outlet/>
}

export default PrivateRoote;