import React, { useEffect } from "react";
import "./Feed.css";
import InputOption from "./InputOption";
import Post from "./Post";

import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/counter/userSlice";
import FlipMove from "react-flip-move";

//material icons
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import ArticleIcon from "@mui/icons-material/Article";

import { db } from "./firebase";
function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = React.useState("");
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user?.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form action="">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
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

      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
