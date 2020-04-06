import React from "react";
import style from "./Messages.module.css";
import Dialog from "./Dialog/Dialog";
import Chat from "./Chat/Chat";
import Friends from "../Friends/Friends";
import {Route} from "react-router-dom";

const Messages = (props) => {

    let dialogsElement = props.messagePage.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>);

    let chatsElement = props.messagePage.dialogs.map(dialog => dialog.chats.map(chat => <Chat message={chat.message}/>));

    let chatsElementRoute = chatsElement.map((el, i) => {
        return <Route path={`/dialogs/${i + 1}`} render={() => chatsElement[i]}/>
    });

    // let newMessageEl = React.createRef();

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
                    // ref={newMessageEl}
                    value={props.messagePage.newMessageText}
                    onChange={onChangeText}
                />
                <button onClick={props.addMessage}>Send</button>
            </div>
        </div>
    )
};

export default Messages