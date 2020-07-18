import React from "react";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({profile, updateStatus, status}) => {
    return (
        <div className={style.profile}>
            <ProfileInfo profile={profile} updateStatus={updateStatus} status={status}/>
            <MyPostsContainer />
        </div>
    );
};

export default Profile