import React from "react";
import "../css/body.css";
import Header from "../../Component/js/Header";
import SongRow from "../../Component/js/SongRow";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Body() {
  const discover_weekly = {
    images: [
      {
        url: "https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/333544602_3482086815445651_3716737186707577269_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=OrbElr1LlmcAX-I4Y2Z&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfB1hfBtcu_UfKdbx-1S3xNE9UeXosISb7C9p3zaRv4gUA&oe=656B702D",
      },
    ],
    tracks: {
      items: [],
    },
  };
  function playPlaylist() {
    console.log("this is play PlayList");
  }
  return (
    <div className="body">
      <Header />
    </div>
  );
}

export default Body;
