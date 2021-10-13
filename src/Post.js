import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import "./Post.css";
import InputOption from "./InputOption";

//material icons
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post_header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
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
});

export default Post;
