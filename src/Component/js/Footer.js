import React, { useEffect, useState } from "react";
// import { useStateValue } from "./StateProvider";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";
import "../css/Footer.css";

function Footer() {
  const item = [];
  function skipNext() {}
  function playing() {}
  function handlePlayPause() {}
  function handlePlayPause() {}
  function skipPrevious() {}
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fdaiphatthanh.sound%2Fvideos%2Fl%25E1%25BA%25A1-l%25C3%25B9ng-v%25C5%25A9-live%2F1196409644212835%2F&psig=AOvVaw21aGj6fLA1imrT4Jpar0Gu&ust=1702470210820000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPjwp_PxiYMDFQAAAAAdAAAAABAI"
          alt={item?.name}
        />
        {item ? (
          <div className="footer__songInfo">
            <h4>La Lung</h4>
            <p>Pham Nhat Linh</p>
          </div>
        ) : (
          <div className="footer__songInfo">
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        )}
      </div>

      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon onClick={skipNext} className="footer__icon" />
        {playing ? (
          <PauseCircleOutlineIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="footer__icon"
          />
        ) : (
          <PlayCircleOutlineIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="footer__icon"
          />
        )}
        <SkipNextIcon onClick={skipPrevious} className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
