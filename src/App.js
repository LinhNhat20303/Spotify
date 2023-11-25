import { useEffect, useState } from "react";
import "./App.css";
import { getTokenFromResponse } from "../src/Config/Spotify_API_Auth.js";
import Login from "./View/js/Login";

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;
    console.log(hash, _token);
    setToken(_token);
  }, [token]); // Empty dependency array to run the effect only once on component mount

  return (
    <div className="App">
      {/* {!token && <Login />} */}
   
    </div>
  );
}

export default App;
