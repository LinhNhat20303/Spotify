import React, { useEffect } from "react";
import "../css/body.css";
import Header from "../../Component/js/Header";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useStateValue } from "../../Config/StateProvider";
import SongRow from "../../Component/js/SongRow";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useStateValue();
  // const discover_weekly = {
  //   images: [
  //     {
  //       url: "https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/333544602_3482086815445651_3716737186707577269_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=OrbElr1LlmcAX-I4Y2Z&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfB1hfBtcu_UfKdbx-1S3xNE9UeXosISb7C9p3zaRv4gUA&oe=656B702D",
  //     },
  //   ],
  //   tracks: {
  //     items: ["la lung", "tu ngay em den"],
  //   },
  // };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  useEffect(() => {
    console.log(discover_weekly, spotify);
  }, []);
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__shuffle"
            // onClick={playPlaylist}
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow playSong={playSong} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
