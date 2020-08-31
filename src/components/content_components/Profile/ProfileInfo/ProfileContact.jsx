import React, {useState} from "react";

const ProfileContact = ({contactKey, contactValue, profile, setProfileDescription, isOwner}) => {
    const contact = contactValue ? contactValue : "not specified";
    const key = contactKey[0].toUpperCase() + contactKey.slice(1);

    const [editMode, setEditMode] = useState(false);
    const [inputValue, setInputValue] = useState(contact);

    const updateProfileDescription = () => {
        const updatedProfileDescription = {...profile, contacts: {...profile.contacts, [contactKey]: inputValue}};
        delete updatedProfileDescription.photos;
        setEditMode(false);
        setProfileDescription(updatedProfileDescription);
    };

    return (
        <>
            {editMode && isOwner
                ? <label>{`${key}:`}
                    <input value={inputValue} onChange={(e) => setInputValue(e.currentTarget.value)}
                           autoFocus={true}
                           onBlur={updateProfileDescription}/>
                </label>
                : <div onClick={() => setEditMode(true)}>{`${key}: ${contact}`}</div>}
        </>
    )
};

export default ProfileContact;