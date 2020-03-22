import React from "react";
import style from "./Messages.module.css";
import Dialog from "./Dialog/Dialog";
import Chat from "./Chat/Chat";

const Messages = (props) => {

    let dialogsElement = props.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>);

    let chatsElement = props.chats.map(chat => <Chat message={chat.message}/>);

    return (
        <div className={style.messages}>
            <div className={style.dialogs}>
                {dialogsElement}
            </div>
            <div className={style.chats}>
                {chatsElement}
            </div>
        </div>
    )
};

export default Messages