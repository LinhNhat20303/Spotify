import "./App.css";
import Body from "../src/View/js/Body.js";
import Login from "../src/View/js/Login";

function App() {
  return (
    <div className="App">
      {/* {!token && <Login />}
      {alert("welcome Back")} */}
      <Login />
      <Body />
    </div>
  );
}

export default App;
