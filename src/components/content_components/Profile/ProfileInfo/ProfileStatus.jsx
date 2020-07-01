import React, {useEffect, useState} from "react";

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [statusText, changeStatusText] = useState(props.status);

    const onChangeStatusText = (e) => {
        changeStatusText(e.currentTarget.value)
    };

    const updateStatus = () => {
        setEditMode(false);
        props.updateStatus(statusText)
    };

    useEffect(() => {changeStatusText(props.status)}, [props.status]);

    return (
        <div>
            {!editMode
                ? <span onDoubleClick={() => {setEditMode(true)}}>{statusText || "change status"}</span>
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