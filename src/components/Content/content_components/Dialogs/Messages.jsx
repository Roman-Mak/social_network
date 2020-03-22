import React from "react";
import style from "./Messages.module.css";
import Dialog from "./Dialog/Dialog";
import Chat from "./Chat/Chat";

const Messages = () => {

    let dialogs = [
        {name: "Saha", id: "1"},
        {name: "Dima", id: "2"},
        {name: "Kovalsky", id: "3"},
        {name: "Dusya", id: "4"},
        {name: "Anton", id: "5"},
        {name: "Nick", id: "6"},
    ];

    let chats = [
        {message: "Zdarova", id: "1"},
        {message: "Jaba", id: "2"},
        {message: "Go v dotu", id: "3"}
    ];

    let dialogsElement = dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>);

    let chatsElement = chats.map(chat => <Chat message={chat.message}/>);

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
}

export default Messages