// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes

//This client I have create from the Spotify Docs
const clientId = "27266038ef854f18ac594f552ca4b638";

//the RedirectURI is the domain where the Spotify App host
const redirectUri = "http://localhost:3000/";

// scopes where the software Act with the corresponding api that we call
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

// this method allow us to get an token form the software has an OAuth'Security
export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

// Access token
export const ACCESS_TOKEN =
  "BQBAMWjcc7VyOUGWkKASa-FWPXJffKIV7iMOD15zXGrAMFsr6qnoLFLlqv2YSGk2qgC_bG9segWKQRX2zUj_Juawzgi5HPDiFeUp_71E2WA704sZFlM2gww5XCEwpe04OM4iPIG37Xl6XqqlUFry4rwc44z1C-O831Ql-OkUVFLhCn4vxz6GbFzMVz14oInsepUekAV1AGgjruOYNEBTqHzjR_Erpjfg";
export const URL_TO_LOGIN_API = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
