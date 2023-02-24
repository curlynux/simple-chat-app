import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLogin, setUserId, setId, setProfilePicture } from "../../reduxLogic/reducers/friendList";

function Friends() {
    const token = useSelector((state) => state.login.token);
    const userId = useSelector((state) => state.friendSlice.userId);
    const login = useSelector((state) => state.friendSlice.login);
    const id = useSelector((state) => state.friendSlice.id);
    const dispatch = useDispatch();


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
                data.map((item) => {
                    dispatch(setLogin(item.login));
                    dispatch(setId(item._id));
                    dispatch(setUserId(item.userId));
                    dispatch(setProfilePicture("path/to/profilepicture"));
                });
            }));
    }, [token])

    return (
        <div>
            <ul>
                <li key={id}>{login}</li>
            </ul>
        </div>
    )
}

export default Friends;