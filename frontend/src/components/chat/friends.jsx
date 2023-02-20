import { useEffect } from "react";
import { useSelector } from "react-redux";
import { setLogin, setUserId, setId } from "../../reduxLogic/reducers/friendList";

function Friends() {
    const token = useSelector((state) => state.login.token);
    const userId = useSelector((state) => state.friendList.userId);
    const login = useSelector((state) => state.friendList.login);
    const id = useSelector((state) => state.friendList.id);

    setId("ID");
    useEffect(() => {
        fetch("http://localhost:1337/friends",
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            }).then((response) => response.json().then((data) => {
                console.log(data);
                data.forEach(item => {
                    for (var i in item) {
                        setLogin(item.login);
                        setId(item._id);
                        setUserId(item.userId);
                        console.log(item.email);
                    }
                });
            }));
    }, [token])

    return (
        <div>
            <ul>

            </ul>
        </div>
    )
}

export default Friends;