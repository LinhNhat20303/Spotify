import React from "react";

function HomePage() {
  window.onSpotifyWebPlaybackSDKReady = () => {
    const token =
      "BQCUdG_vKObDzx2AAgKp10fYCeQWHosev9tCXaF0-9ER8UD93QC1zj68DbYg7bbhv8g3lZV5CE0yRAC7kMEMXCghkNmAClWp7ZBEZakfr9ELDGqNxvLVBzDBOBR5yk_BfSSX6VxkgJ8WAdcIRv7WYR1jAzCzSaRjOPkReoW8BvJ_r8KYSwht9yoUQIvpw1dJzDT4snv62g34zzr9FnDpDkLnR9boXzNa";
    const player = new Spotify.Player({
      name: "Web Playback SDK Quick Start Player",
      getOAuthToken: (cb) => {
        cb(token);
      },
      volume: 0.5,
    });
  };
  return <div>HomePage</div>;
}
export default HomePage;
