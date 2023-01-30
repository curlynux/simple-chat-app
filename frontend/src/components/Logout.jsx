import { Navigate } from "react-router-dom";

function LogoutButton() 
{
    // const navigate = Navigate();
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("user_id");

    if(!token && !userId)
        Navigate("/")
    localStorage.removeItem("token")
    localStorage.removeItem("user_id")
    return(<button name="logout">logout</button>)
}

export default LogoutButton;