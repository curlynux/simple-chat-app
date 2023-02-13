import "./reset.css"
import "bulma";
import './App.css';
import Message from "./components/chat/message";
function App() {

  return (
    <div className="App">
        <h1>simple chat app</h1>
        <div className="wrapper">
          <Message />
        </div>
    </div>
  );
}

export default App;
