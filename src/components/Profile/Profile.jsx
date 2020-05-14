import React from "react";
import Mypost from "./Mypost/Mypost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    debugger;
  return (
    <div>
      <ProfileInfo />
      <Mypost posts={props.profilePage.posts} addPost={props.addPost} editPost={props.editPost} newPost={props.profilePage.newPostText}/>
    </div>
  );
};

export default Profile;
