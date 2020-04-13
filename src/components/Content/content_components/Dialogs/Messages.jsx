import React from "react";
import style from "./Messages.module.css";
import Dialog from "./Dialog/Dialog";
import Chat from "./Chat/Chat";
import {Route} from "react-router-dom";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../redux/state";

const Messages = (props) => {

    let dialogsElement = props.messagePage.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>);

    let chatsElement = props.messagePage.dialogs.map(dialog => dialog.chats.map(chat => <Chat message={chat.message}/>));

    let chatsElementRoute = chatsElement.map((el, i) => {
        return <Route path={`/dialogs/${i + 1}`} render={() => chatsElement[i]}/>
    });

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

    let onChangeText = (e) => {
        let text = e.currentTarget.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    };

    return (
        <div className={style.messages}>
            <div className={style.dialogs}>
                {dialogsElement}
            </div>
            <div className={style.chats}>
                {chatsElementRoute}
                <textarea
                    value={props.messagePage.newMessageText}
                    onChange={onChangeText}
                />
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    )
};

export default Messages