import { useNavigate } from "react-router-dom";
function LogoutButton() 
{
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    function logout()
    {
        
            if(token && userId)
            {
                navigate("/", {replace: true})
                localStorage.removeItem("token")
                localStorage.removeItem("userId")
            }
      
    }

    return(<button name="logout" onClick={logout}>logout</button>)
}

export default LogoutButton;