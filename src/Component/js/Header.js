import React from "react";
import "../css/h tereader.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@mui/material";
// import { useStateValue } from "../../Config/StateProvider";

export default function Header() {
  //where the Logic will spaced
  const user = {
    display_name: "Linh Nhat",
    images: [
      {
        url: "https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/333544602_3482086815445651_3716737186707577269_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qdSWYb5Ig6UAX-hPe6n&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfCHvbnH8r6GJoHD5OSy5EXnfZjVJph1R4B1fPoESMs0cw&oe=65677BAD",
      },
    ],
  };

  // const [user, dispatch] = useStateValue();

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
        <Avatar alt={user?.display_name} src={user?.images[0].url} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}
