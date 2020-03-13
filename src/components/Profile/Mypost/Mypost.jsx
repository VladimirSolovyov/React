import React from "react";
import s from "./Mypost.module.css";
import Post from "./Post/Post";

const Mypost = () => {
  return (
      <div className={s.newPost}>
        <h3>My post</h3>
        <input type="text" size="40" placeholder="New post..." />
        <div className={s.send_btn}>Send</div>
          <div className={s.posts}>
            <Post />
            <Post />
            <Post />
          </div>
      </div>
  );
};

export default Mypost;
