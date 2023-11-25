import React from "react";
import { URL_TO_LOGIN_API } from "../../Config/Spotify_API_Auth.js";
import "../css/login.css";

function Login() {
  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <a href={URL_TO_LOGIN_API}>LOGIN TO SPOTIFY CLONE</a>
    </div>
  );
}

export default Login;
