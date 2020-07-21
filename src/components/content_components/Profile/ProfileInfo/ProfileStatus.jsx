import React, {useEffect, useState} from "react";

const ProfileStatus = ({status, updateStatus}) => {
    const [editMode, setEditMode] = useState(false);
    const [statusText, changeStatusText] = useState(status);

    const onChangeStatusText = (e) => {
        changeStatusText(e.currentTarget.value)
    };

    const onUpdateStatusBlur = () => {
        setEditMode(false);
        updateStatus(statusText);
    };

    useEffect(() => {changeStatusText(status)}, [status]);

    return (
        <div>
            {!editMode
                ? <span onDoubleClick={() => {setEditMode(true)}}>{statusText || "no status"}</span>
                : <input value={statusText}
                         onBlur={onUpdateStatusBlur}
                         autoFocus={true}
                         onChange={onChangeStatusText}
                />
            }
        </div >
    )
};

export default ProfileStatus;