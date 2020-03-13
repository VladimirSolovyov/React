import React from "react";
import s from "./Profile.module.css";
import Mypost from "./Mypost/Mypost";

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
      <Mypost />
    </div>
  );
};

export default Profile;
