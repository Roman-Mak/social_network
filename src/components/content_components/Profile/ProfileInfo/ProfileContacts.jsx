import React from "react";
import style from "./ProfileInfo.module.css";
import ProfileContact from "./ProfileContact";

const ProfileContacts = ({profile, setProfileDescription, isOwner}) => {
    return (
        <div className={style.contacts}>
            <div>Contacts</div>
            {Object.keys(profile.contacts).map(key => {
                return <ProfileContact key={key} contactKey={key} contactValue={profile.contacts[key]}
                                       profile={profile}
                                       setProfileDescription={setProfileDescription} isOwner={isOwner}/>
            })}
        </div>
    );
};

export default ProfileContacts;