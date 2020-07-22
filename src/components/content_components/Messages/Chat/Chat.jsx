import React from "react";
import style from "./Chat.module.css"

const Chat = ({message, sender}) => {
    return (
        <div className={style.chat}>{sender}: {message}</div>
    );
};

export default Chat