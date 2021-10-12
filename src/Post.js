import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import InputOption from "./InputOption";

//material icons
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar />
        <div className="post_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post_body">
        <p>{message}</p>
      </div>

      <div className="post_buttons">
        <InputOption title="Like" Icon={ThumbUpOffAltIcon} iconColor="gray" />
        <InputOption
          title="Comment"
          Icon={ChatBubbleOutlineIcon}
          iconColor="gray"
        />
        <InputOption title="Share" Icon={ShareIcon} iconColor="gray" />
        <InputOption title="Send" Icon={SendIcon} iconColor="gray" />
      </div>
    </div>
  );
}

export default Post;
