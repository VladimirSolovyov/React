import React from "react";
import s from "./Mypost.module.css";
import Post from "./Post/Post";

const Mypost = (props) => {
    let postElements = props.posts.map(p => <Post message={p.message} countLike={p.countLike} />);

  return (
      <div className={s.newPost}>
        <h3>My post</h3>
        <input type="text" size="40" placeholder="New post..." />
        <div className={s.send_btn}>Send</div>
          <div className={s.posts}>
            { postElements  }
          </div>
      </div>
  );
};

export default Mypost;
