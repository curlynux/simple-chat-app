import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import Login from "./components/Login";
import Signup from "./components/signup";
import Error from "./components/error";
import PrivateRoote from "./components/privateRoote";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Provider } from "react-redux";
import rootReducer from './reduxLogic/reducers/store';
import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./reduxLogic/reducers/loginReducer";
import inMessageSlice from "./reduxLogic/reducers/inMessageReducer"
import outMessageSlice from "./reduxLogic/reducers/outMessageReducer"

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    inMessage: inMessageSlice.reducer,
    outMessage: outMessageSlice.reducer
  }})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
  <React.StrictMode>
      <Router>
        <Routes>
          {/* <Route element={<PrivateRoote/>}> */}
            <Route path="/home" element={<App/>}/>
          {/* </Route> */}
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/" element={<Login/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </Router>
    </React.StrictMode>
</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
