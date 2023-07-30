import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import Login from "./components/Login";
import Signup from "./components/signup";
import Error from "./components/error";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./reduxLogic/reducers/loginReducer";
import signupSlice from "./reduxLogic/reducers/signupReducer";
import messageSlice from "./reduxLogic/reducers/clientReducer";
import chatSlice from "./reduxLogic/reducers/chatList";
import friendSlice from "./reduxLogic/reducers/friendList";

const store = configureStore({
	reducer: {
		login: loginSlice.reducer,
		signup: signupSlice.reducer,
		message: messageSlice.reducer,
		chatList: chatSlice.reducer,
		friendSlice: friendSlice.reducer,
	},
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<React.StrictMode>
			<Router>
				<Routes>
					{/* <Route element={<PrivateRoote/>}> */}
					<Route path="/home" element={<App />} />
					{/* </Route> */}
					<Route path="/signup" element={<Signup />} />
					<Route path="/" element={<Login />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</Router>
		</React.StrictMode>
	</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
