import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import {
// 	setLogin,
// 	setUserId,
// 	setId,
// 	setProfilePicture,
// } from "../../reduxLogic/reducers/friendList";

function Friends() {
	const token = useSelector((state) => state.login.token);
	// const userId = useSelector((state) => state.friendSlice.userId);
	// const login = useSelector((state) => state.friendSlice.login);
	// const id = useSelector((state) => state.friendSlice.id);
	// const dispatch = useDispatch();
	const [object, setObject] = useState();

	useEffect(() => {
		setTimeout(() => {
			fetch("http://localhost:1337/friends", {
				method: "GET",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			}).then((response) =>
				response.json().then((data) => {
					setObject(data);
				})
			);
		}, 3000);
	}, [token]);

	return (
		<div className="Friends">
			<ul>
				<li>TEST</li>
			</ul>
		</div>
	);
}

export default Friends;
