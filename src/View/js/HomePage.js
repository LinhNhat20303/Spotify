import React, { useEffect } from "react";
import SideBar from "../../Component/js/SideBar";
import Body from "./Body";
import "../css/HomePage.css";
import { useStateValue } from "../../Config/StateProvider";
import { Avatar } from "@material-ui/core";
import Footer from "../../Component/js/Footer";

function HomePage({ spotify }) {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div>
      {/* <Body /> */}
      <div className="player">
        <div className="player__body">
          <SideBar />
          {/* <Avatar alt={user?.display_name} src={user?.images[0].url} />
          <h4>{user?.display_name}</h4> */}
          <Body spotify={spotify} />
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default HomePage;
