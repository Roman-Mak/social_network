import React from "react";
import style from "./Messages.module.css";
import Dialog from "./Dialog/Dialog";
import Chat from "./Chat/Chat";
import {Route} from "react-router-dom";

const Messages = (props) => {

    let dialogsElement = props.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>);

    let chatsElement = props.dialogs.map(dialog => dialog.chats.map(chat => <Chat message={chat.message}/>));

    let chatsElementRoute = chatsElement.map((el, i) => {
        return <Route path={`/messages/${i + 1}`} render={() => chatsElement[i]}/>
    });

    let onAddMessage = () => {
        props.addMessage();
    };

    let onChangeText = (e) => {
        let text = e.currentTarget.value;
        props.updateNewMessageText(text);
    };

    return (
        <div className={style.messages}>
            <div className={style.dialogs}>
                {dialogsElement}
            </div>
            <div className={style.chats}>
                {chatsElementRoute}
                <textarea
                    value={props.newMessageText}
                    onChange={onChangeText}
                />
                <button onClick={onAddMessage}>Send</button>
            </div>
        </div>
    )
};

export default Messages