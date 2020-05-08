import React from "react";
import s from "./Mypost.module.css";
import Post from "./Post/Post";

const Mypost = (props) => {
    let postElements = props.posts.map(p => <Post message={p.message} countLike={p.countLike} />);
    let newPostElement = React.createRef();
    let addPost = () => {
        debugger;
        let text = newPostElement.current.value;
        props.addPost(text);
    }
  return (
      <div className={s.newPost}>
        <h3>My post</h3>
        <input type="text" size="40" placeholder="New post..." ref={newPostElement}/>
        <div className={s.send_btn} onClick={ addPost }>Add post</div>
          <div className={s.posts}>
            { postElements  }
          </div>
      </div>
  );
};

export default Mypost;
