import "./reset.css"
import "bulma";
import './App.css';
import {useNavigate} from "react-router-dom"
import { useEffect } from "react";
import TextField from "./components/chat/textField";

function App() {
  const token = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();
  useEffect(() => 
  {
    if(token) navigate("/home", {replace: true})
    else navigate("/", {replace: true})
  }, [token, navigate]);

  return (
    <div className="App">
      <div className="wrapper">
        <h1>simple chat app</h1>
        <TextField />
      </div>
    </div>
  );
}

export default App;
