import { useEffect, useState } from "react";
import "./App.css";
import SpotifyWebApi from "spotify-web-api-js";
import HomePage from "./View/js/HomePage";
import Login from "./View/js/Login";
import { useStateValue } from "./Config/StateProvider";
import { getTokenFromResponse } from "./Config/Spotify_API_Auth";

const s = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useStateValue();

  useEffect(() => {
    // Set token
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      s.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      dispatch({
        type: "SET_SPOTIFY",
        spotify: s,
      });

      s.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });
    }
  }, [token, dispatch]);

  return (
    <div className="app">
      {!token && <Login />}
      {token && <HomePage spotify={s} />}
    </div>
  );
}

export default App;
