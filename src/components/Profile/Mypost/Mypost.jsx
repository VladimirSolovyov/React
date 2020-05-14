import React from "react";
import s from "./Mypost.module.css";
import Post from "./Post/Post";

const Mypost = (props) => {
    let postElements = props.posts.map(p => <Post message={p.message} countLike={p.countLike} />);
    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost();
    }
    let onPostChange = function() {
        let text = newPostElement.current.value;
        props.editPost(text);
    }
  return (
      <div className={s.newPost}>
        <h3>My post</h3>
        <input type="text" size="40" ref={newPostElement} value={props.newPost} onChange={onPostChange}/>
        <div className={s.send_btn} onClick={ addPost }>Add post</div>
          <div className={s.posts}>
            { postElements  }
          </div>
      </div>
  );
};

export default Mypost;
