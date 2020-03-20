import React from "react";
import Mypost from "./Mypost/Mypost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <Mypost posts={props.posts}/>
    </div>
  );
};

export default Profile;
