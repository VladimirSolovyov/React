import React from "react";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          className={s.contentImg}
          alt="content-img"
          src="https://pbs.twimg.com/media/D4H6S4AWsAY3knd.jpg"
        />
      </div>
      <div className={s.info}>
        <img
          className={s.avatar}
          src="https://www.macitynet.it/forum/uploads/profile/photo-21332.gif"
          alt="avatar"
        />
        <div className={s.date}>
          <div>Ivan I.</div>
          <div>
            <label>Date of Birth:</label>
            <span>2 may</span>
          </div>
          <div>
            <label>City:</label>
            <span>Kovrov</span>
          </div>
          <div>
            <label>Education:</label>
            <span>KTA'11</span>
          </div>
          <div>
            <label>Phone:</label>
            <span>8-930-031-**-**</span>
          </div>
        </div>
      </div>
      <div className={s.newPost}>
        <h3>My post</h3>
        <input type="text" size="40" placeholder="New post..." />
        <div className={s.send_btn}>Send</div>
          <div className={s.posts}>
            <div className={s.item}>Post1</div>
            <div className={s.item}>Post2</div>
          </div>
      </div>
    </div>
  );
};

export default Profile;
