import React from "react";
import style from "./ProfileInfo.module.css";
import ProfileContact from "./ProfileContact";

const ProfileContacts = ({profile, setProfileDescription, isOwner, error, isFetching}) => {
    return (
        <div className={style.contactsContainer}>
            <div className={style.contacts}>
                <div>Contacts</div>
                {Object.keys(profile.contacts).map(key => {
                    return <ProfileContact key={key} contactKey={key} contactValue={profile.contacts[key]}
                                           profile={profile} isFetching={isFetching} error={error}
                                           setProfileDescription={setProfileDescription} isOwner={isOwner}/>
                })}
            </div>
            {error && <div className={style.error}>{error}</div>}
        </div>
    );
};

export default ProfileContacts;