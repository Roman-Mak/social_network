import React, {useState} from "react";

const ProfileStatus = (props) => {
    let [editMode, changeEditMode] = useState(false);
    let [statusText, changeStatusText] = useState(props.status);

    let onChangeStatusText = (e) => {
        changeStatusText(e.currentTarget.value)
    };

    return (
        <div>
            {!editMode
                ? <span onDoubleClick={() => {changeEditMode(true)}}>{statusText}</span>
                : <input value={statusText}
                         onBlur={() => {changeEditMode(false)}}
                         autoFocus={true}
                         onChange={onChangeStatusText}
                />
            }
        </div >
    )
};

export default ProfileStatus;