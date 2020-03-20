import React from "react";
import Mypost from "./Mypost/Mypost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <Mypost dataPost={props.postData}/>
    </div>
  );
};

export default Profile;
