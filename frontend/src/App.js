import "./reset.css"
import "bulma";
import './App.css';
import {useNavigate} from "react-router-dom"
import { useEffect } from "react";

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
      <h1>simple chat app</h1>
    </div>
  );
}

export default App;
