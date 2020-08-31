import style from "./ProfileInfo.module.css";
import React, {useState} from "react";

const ProfileInfo = ({aboutMe, lookingForAJob, lookingForAJobDescription, fullName, isOwner, setProfileDescription}) => {
    const [aboutMeEditMode, setAboutMeEditMode] = useState(false);
    const [lookingForAJobEditMode, setLookingForAJobMeEditMode] = useState(false);
    const [lookingForAJobDescriptionEditMode, setLookingForAJobDescriptionEditMode] = useState(false);

    const [aboutMeLocal, setAboutMeLocal] = useState(() => {
        if (aboutMe === null) {
            return ""
        } else return aboutMe
    });
    const [lookingForAJobLocal, setLookingForAJobMeLocal] = useState(lookingForAJob);
    const [lookingForAJobDescriptionLocal, setLookingForAJobDescriptionLocal] = useState(() => {
        if (lookingForAJobDescription === null) {
            return ""
        } else return lookingForAJobDescription
    });

    const setProfileData = () => {
        const profileData = {
            aboutMe: aboutMeLocal,
            lookingForAJob: lookingForAJobLocal,
            lookingForAJobDescription: lookingForAJobDescriptionLocal,
            fullName
        };
        setAboutMeEditMode(false);
        setLookingForAJobMeEditMode(false);
        setLookingForAJobDescriptionEditMode(false);
        setProfileDescription(profileData);
    };

    return (
        <div className={style.about}>
            <div>About</div>
            {aboutMeEditMode && isOwner
                ? <textarea value={aboutMeLocal}
                            autoFocus={true}
                            onBlur={setProfileData}
                            onChange={e => setAboutMeLocal(e.currentTarget.value)}/>
                : <div onClick={() => setAboutMeEditMode(true)}>{aboutMe}</div>}
            {lookingForAJobEditMode && isOwner
                ? <div>
                    <label> Looking for a job
                        <input type={"checkbox"} checked={lookingForAJobLocal}
                               autoFocus={true} onBlur={setProfileData}
                               onChange={e => setLookingForAJobMeLocal(e.currentTarget.checked)}/>
                    </label>
                </div>
                : <div onClick={() => setLookingForAJobMeEditMode(true)}>
                    Looking for a job: {lookingForAJob ? "yes" : "no"}
                </div>}
            {lookingForAJobDescriptionEditMode && isOwner
                ? <div>
                    <label> About my skills: <textarea value={lookingForAJobDescriptionLocal}
                                                       autoFocus={true}
                                                       onBlur={setProfileData}
                                                       onChange={e => setLookingForAJobDescriptionLocal(e.currentTarget.value)}/>
                    </label>
                </div>
                : <div onClick={() => setLookingForAJobDescriptionEditMode(true)}>
                    About my skills: {lookingForAJobDescription}
                </div>}
        </div>
    );
};

export default ProfileInfo