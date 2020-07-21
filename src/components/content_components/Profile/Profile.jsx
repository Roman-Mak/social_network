import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({profile, updateStatus, status, isOwner, setPhoto}) => {
    return (
        // <div className={style.profile}>
            <ProfileInfo isOwner={isOwner} profile={profile} updateStatus={updateStatus} status={status}
                         setPhoto={setPhoto}/>
        // </div>
    );
};

export default Profile