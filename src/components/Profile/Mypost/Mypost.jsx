import React from "react";
import s from "./Mypost.module.css";
import Post from "./Post/Post";

const Mypost = () => {
    let postData = [
        {id:1,message:'Hi, how are you?',countLike:10},
        {id:2,message:'It\'s my first post',countLike:18},
    ]

  return (
      <div className={s.newPost}>
        <h3>My post</h3>
        <input type="text" size="40" placeholder="New post..." />
        <div className={s.send_btn}>Send</div>
          <div className={s.posts}>
            <Post message={postData[0].message} countLike={postData[0].countLike}/>
            <Post message={postData[1].message} countLike={postData[1].countLike}/>
          </div>
      </div>
  );
};

export default Mypost;
