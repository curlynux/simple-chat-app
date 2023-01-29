import "./reset.css"
import "bulma";
import './App.css';
import {useNavigate} from "react-router-dom"
import { useEffect } from "react";
import TextField from "./components/chat/textField";

function App() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => 
  {
    if(token) navigate("/", {replace: true})
    else console.log("no token !");
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
