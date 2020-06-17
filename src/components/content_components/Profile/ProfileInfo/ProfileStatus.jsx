import React, {useEffect, useState} from "react";

const ProfileStatus = (props) => {
    let [editMode, changeEditMode] = useState(false);
    let [statusText, changeStatusText] = useState(props.status);

    let onChangeStatusText = (e) => {
        changeStatusText(e.currentTarget.value)
    };

    let updateStatus = () => {
        changeEditMode(false);
        props.updateStatus(statusText)
    };

    useEffect(() => {changeStatusText(props.status)}, [props.status]);

    return (
        <div>
            {!editMode
                ? <span onDoubleClick={() => {changeEditMode(true)}}>{statusText || "change status"}</span>
                : <input value={statusText}
                         onBlur={updateStatus}
                         autoFocus={true}
                         onChange={onChangeStatusText}
                />
            }
        </div >
    )
};

export default ProfileStatus;