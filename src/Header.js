import React from "react";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw"
          alt=""
        />
        <div className="header_search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={PeopleIcon} title="Network" />
        <HeaderOption Icon={WorkIcon} title="Jobs" />
        <HeaderOption Icon={ChatBubbleIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsActiveIcon} title="Notification" />
        <HeaderOption
          avatar="https://www.vhv.rs/dpng/d/428-4287793_male-profile-round-circle-users-svg-png-icon.png"
          title="Profile"
        />
      </div>
    </div>
  );
}

export default Header;
