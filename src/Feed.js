import React from "react";
import "./Feed.css";
import InputOption from "./InputOption";
import Post from "./Post";
//material icons
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import ArticleIcon from "@mui/icons-material/Article";

function Feed() {
  const [posts, setPost] = React.useState([]);

  const sendPost = (e) => {
    e.preventDefault()


    setPost

  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form action="">
            <input type="text" />
            <button onClick={sendPost} type="submit">
              send
            </button>
          </form>
        </div>

        <div className="feed_inputOptions">
          <InputOption title="Photo" Icon={ImageIcon} iconColor="#70B5F9" />
          <InputOption
            title="Video"
            Icon={VideoLibraryIcon}
            iconColor="#E7A33E"
          />
          <InputOption title="Event" Icon={EventBusyIcon} iconColor="#C0CBCD" />
          <InputOption
            title="Write article"
            Icon={ArticleIcon}
            iconColor="#7FC15E"
          />
        </div>
      </div>

      {posts.map((post) => {})}

      <Post
        name="Ejilola Hammed "
        description="Android and Web Engineer"
        message="Am happy to announced that I just joined Google as a Senior Backend Engineer !Ohohoh"
      />
    </div>
  );
}

export default Feed;
