import style from "./ProfileInfo.module.css";
import head_img from "../../../../assets/images/headimg.jpg";
import userPhoto from "../../../../assets/images/user-01.png";
import React from "react";
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import MyPostsContainer from "../MyPosts/MyPostsContainer";

const ProfileInfo = ({profile, updateStatus, status, isOwner, setPhoto}) => {
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
                {/*<div className={style.description}>*/}
                    <div className={style.profilePreview}>
                        <img className={style.avatar} src={ava}/>
                        {isOwner && <label><input type={"file"} onChange={onPhotoChange}/>Edit photo</label>}
                    </div>
                {/*</div>*/}
                <div className={style.information}>
                    <h3 className={style.name}>{profile.fullName}</h3>
                    <div className={style.status}>
                        <ProfileStatus status={status} updateStatus={updateStatus}/>
                    </div>
                    <div className={style.about}>
                        <div>About</div>
                        <div>City: Minsk</div>
                        {/*<div>{profile.aboutMe}</div>*/}
                        <div>Looking for a job: {profile.lookingForAJob ? "yes" : "no"}</div>
                        <div>About my skills: {profile.lookingForAJobDescription}</div>
                    </div>
                </div>
            </div>
            <div className={style.secondContainer}>
                <div className={style.contacts}>
                    <div>Contacts</div>
                    {Object.keys(profile.contacts).map(key => {
                        return <Contact key={key} contactKey={key} contactValue={profile.contacts[key]}/>
                    })}
                </div>
                <MyPostsContainer/>
            </div>
        </div>
    )
};

const Contact = ({contactKey, contactValue}) => {
    const contact = contactValue ? contactValue : "not specified";
    const key = contactKey[0].toUpperCase() + contactKey.slice(1);
    return (
        <div>{`${key}: ${contact}`}</div>
    )
};

export default ProfileInfo