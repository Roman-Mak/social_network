import style from "./ProfileInfo/ProfileInfo.module.css";
import userPhoto from "../../../assets/images/user-01.png";
import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileInfo/ProfileStatus";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileContacts from "./ProfileInfo/ProfileContacts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({profile, updateStatus, status, isOwner, setPhoto, setProfileDescription}) => {
    if (!profile) {
        return <div className={style.profilePreloader}><Preloader/></div>
    }

    let ava = profile.photos.large;
    if (ava === null) {
        ava = userPhoto;
    }

    const onPhotoChange = (e) => {
        if (e.target.files.length) {
            setPhoto(e.target.files[0]);
        }
    };

    return (
        <div className={style.profileInfo}>
            <div className={style.informationContainer}>
                <div className={style.profilePreview}>
                    <img className={style.avatar} src={ava} alt={""}/>
                    {isOwner && <label><input type={"file"} onChange={onPhotoChange}/>Edit photo</label>}
                </div>
                <div className={style.information}>
                    <h3 className={style.name}>{profile.fullName}</h3>
                    <div className={style.status}>
                        <ProfileStatus status={status} updateStatus={updateStatus}/>
                    </div>
                    <ProfileInfo aboutMe={profile.aboutMe}
                                 lookingForAJob={profile.lookingForAJob}
                                 lookingForAJobDescription={profile.lookingForAJobDescription}
                                 isOwner={isOwner}
                                 fullName={profile.fullName}
                                 setProfileDescription={setProfileDescription}/>
                </div>
            </div>
            <div className={style.secondContainer}>
                <ProfileContacts profile={profile} setProfileDescription={setProfileDescription} isOwner={isOwner}/>
                <MyPostsContainer/>
            </div>
        </div>
    )
};


export default Profile