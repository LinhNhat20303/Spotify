import React from "react";
import "../css/header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@mui/material";
import { useStateValue } from "../../Config/StateProvider";
import { useEffect } from "react";
// import { useStateValue } from "../../Config/StateProvider";

function Header({ spotify }) {
  const [user, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className="header__right">
        {/* <Avatar alt={user?.display_name} src={user?.images.url} /> */}
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}
export default Header;
