import "./reset.css"
import "bulma";
import './App.css';
import TextField from "./components/chat/textField";

function App() {


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
