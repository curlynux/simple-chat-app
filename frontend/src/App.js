import "./reset.css"
import "bulma";
import './App.css';
import Signup from "./signup"
import Login from "./login";

function App() {
  return (
    <div className="App">
      <Signup/>
      <Login />
    </div>
  );
}

export default App;
