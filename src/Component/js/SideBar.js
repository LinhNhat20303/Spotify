import React from "react";
import "../css/SideBar.css";
import SlidebarOption from "./SlidebarOption";

function SideBar() {
  return (
    <div>
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SlidebarOption Icon={HomeIcon} option="Home" />
      <SidebarOption Icon={SearchIcon} option="Search" />
      <SidebarOption Icon={LibraryMusicIcon} option="Your Library" />
      <br />
    </div>
  );
}

export default SideBar;
