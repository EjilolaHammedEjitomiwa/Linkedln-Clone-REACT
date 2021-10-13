import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";

import { useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/counter/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItems = (topic) => {
    return (
      <div className="siderbar_recentItem">
        <span className="sidebar_hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E1BAQF6MHpEwyuTpg/company-background_10000/0/1559664567142?e=2159024400&v=beta&t=VZX1oqx_DJAFtkDkPoMHH60OF-MIwWjyP7VaQ43weNA"
          alt=""
        />
        <Avatar className="sidebar_avater" src={user.photoUrl}>
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebarstat_counter">2,543</p>
        </div>

        <div className="sidebar_stat">
          <p>Views on Post</p>
          <p className="sidebarstat_counter">2,800</p>
        </div>
      </div>

      <div className="sidebar_button">
        <p>Recent</p>
        {recentItems("reactjs")}
        {recentItems("programing")}
        {recentItems("software")}
        {recentItems("design")}
      </div>
    </div>
  );
}

export default Sidebar;
