import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function LogoutButton() 
{
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    useEffect(() => 
    {
        if(!token && !userId)
        {
            navigate("/", {replace: true})
            localStorage.removeItem("token")
            localStorage.removeItem("userId")
        }
    }, [token, navigate, userId])

    return(<button name="logout">logout</button>)
}

export default LogoutButton;