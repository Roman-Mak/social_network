import React from "react";
import style from "./Messages.module.css";
import Dialog from "./Dialog/Dialog";
import Chat from "./Chat/Chat";

const Messages = (props) => {

    let dialogsElement = props.state.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>);

    let chatsElement = props.state.dialogs.map(dialog => dialog.chats.map(chat => <Chat message={chat.message}/>));

    let newMessageEl = React.createRef();
    let addMessage = () => {
        alert(newMessageEl.current.value)
    };

    return (
        <div className={style.messages}>
            <div className={style.dialogs}>
                {dialogsElement}
            </div>
            <div className={style.chats}>
                {chatsElement}
                <input ref={newMessageEl} type="text"/>
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    )
};

export default Messages