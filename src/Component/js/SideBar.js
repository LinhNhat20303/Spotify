import React from "react";
import "../css/SideBar.css";
import SidebarOption from "./SlidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

function SideBar() {
  const cateArray = ["PlayList", " Nghe si", "Album"];
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <div className="nav nav__SearchHome">
        <SidebarOption Icon={HomeIcon} option="Trang Chu" />
        <SidebarOption Icon={SearchIcon} option="Search" />
      </div>
      <div className=" nav bottom ">
        <div className="nav__Library">
          <SidebarOption Icon={LibraryMusicIcon} option="Your Library" />
          <div className="nav__Icon">
            <AddIcon className="nav__Icon__Add" />
            <ArrowForwardIcon className="nav__Icon__Arrow" />
          </div>
        </div>

        <div className="nav__Category">
          {cateArray.map((cate, index) => (
            <div className="category" id={index}>
              {cate}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
