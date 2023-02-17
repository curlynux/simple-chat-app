import { useEffect } from "react";
import { useSelector } from "react-redux";

function Friends() {
    const token = useSelector((state) => state.login.token)
    useEffect(() => {
        fetch("http://localhost:1337/friends",
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            }).then((response) => response.json().then((data) => console.log(data)))
    }, [token])
    return (
        <div>
            <ul>
                <li></li>
            </ul>
        </div>
    )
}

export default Friends;