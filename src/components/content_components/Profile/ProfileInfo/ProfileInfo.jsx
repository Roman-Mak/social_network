import style from "./ProfileInfo.module.css";
import head_img from "../../../../assets/images/headimg.jpg";
import userPhoto from "../../../../assets/images/user-01.png";
import React from "react";
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({profile, updateStatus, status, isOwner, setPhoto}) => {
    if (!profile) {
        return <Preloader/>
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
        // <div className={style.profileInfo}>
        //     <img className={style.head_img} src={head_img}/>
        //     <div className={style.information}>
        //         <img className={style.avatar} src={avatar}/>
        //         <div className={style.description}>
        //             <div className={style.name}>Roman Makarevich</div>
        //             <div>City: Minsk</div>
        //             <div>21 years old</div>
        //             <div>Website: instagram.com/myPage/</div>
        //         </div>
        //     </div>
        // </div>
        <div className={style.profileInfo}>
            <img className={style.head_img} src={head_img}/>
            <div className={style.information}>
                <div className={style.description}>
                    <div className={style.profilePreview}>
                        <img className={style.avatar} src={ava}/>
                        {isOwner && <input type={"file"} onChange={onPhotoChange}/>}
                        <h3 className={style.name}>{profile.fullName}</h3>
                    </div>
                    <div className={style.status}>
                        <ProfileStatus status={status} updateStatus={updateStatus}/>
                    </div>
                    <div className={style.about}>
                        <div>About</div>
                        <div>City: Minsk</div>
                        {/*<div>{profile.contacts.facebook}/</div>*/}
                        {/*<div>{props.profile.aboutMe}</div>*/}
                    </div>
                    <div className={style.about}>
                        <div>Contacts</div>
                        {Object.keys(profile.contacts).map(key => {
                            return <Contact key={key} contactKey={key} contactValue={profile.contacts[key]}/>
                        })}
                    </div>
                </div>
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