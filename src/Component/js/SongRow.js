import React from "react";
import "../css/SongRow.css";

function SongRow() {
  const track = {
    id: "SP01",
    name: "My heart will go on",
    album: {
      name: "Titanic",
    },
    artists: [{ ArtistName: "Nhat Linh" }, { ArtistName: "Hau Giang" }],
  };
  function playSong(id) {
    console.log("This is the Song" + id);
  }
  return (
    <div className="songRow" onClick={() => playSong(track.id)}>
      <img className="songRow__album" src={track.album.images[0].url} alt="" />
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.ArtistName).join(", ")} -{" "}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}
export default SongRow;
