import React from "react";
import s from "./Post.module.css";

const Post = (prop) => {
  return (
      <div>
            <div className={s.item}>{prop.message}</div>
            <div className={s.like}>
              <img src="https://img2.freepng.ru/20180218/iee/kisspng-thumb-signal-green-clip-art-egore-5a89afde129952.9017755815189728940762.jpg" alt="like"/>
              <span>{prop.countLike}</span>
            </div>
      </div>
  );
};

export default Post;
