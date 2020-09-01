import React, {useEffect, useState} from "react";
import style from "./ProfileInfo.module.css";

const ProfileContact = ({contactKey, contactValue, profile, setProfileDescription, isOwner, isFetching, error}) => {
    const contact = contactValue ? contactValue : "not specified";
    const key = contactKey[0].toUpperCase() + contactKey.slice(1);

    const [editMode, setEditMode] = useState(false);
    const [inputValue, setInputValue] = useState(contact);

    const updateProfileDescription = () => {
        const updatedProfileDescription = {...profile, contacts: {...profile.contacts, [contactKey]: inputValue}};
        delete updatedProfileDescription.photos;
        setProfileDescription(updatedProfileDescription);
    };

    useEffect(() => {
        setInputValue(contact);
    }, [contact]);

    useEffect(() => {
        if (!error && !isFetching) {
            setEditMode(false);
        }
    }, [error, isFetching]);

    return (
        <>
            {editMode && isOwner
                ? <label className={style.contactContainer}>{`${key}:`}
                    <input value={inputValue} onChange={(e) => setInputValue(e.currentTarget.value)}
                           autoFocus={true}/>
                           <button className={style.btn} onClick={updateProfileDescription}
                                   disabled={isFetching}>save</button>
                </label>
                : <div onClick={() => setEditMode(true)}>{`${key}: ${contact}`}</div>}
        </>
    )
};

export default ProfileContact;