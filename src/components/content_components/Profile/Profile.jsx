import React from "react";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({profile, updateStatus, status, isOwner, setPhoto}) => {
    return (
        <div className={style.profile}>
            <ProfileInfo isOwner={isOwner} profile={profile} updateStatus={updateStatus} status={status}
                         setPhoto={setPhoto}/>
            <MyPostsContainer />
        </div>
    );
};

export default Profile