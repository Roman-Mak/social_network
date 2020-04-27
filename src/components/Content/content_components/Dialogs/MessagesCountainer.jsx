import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../redux/messagesReducer";
import Messages from "./Messages";

const MessagesContainer = (props) => {
    let state = props.store.getState();

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    let updateNewMessageText = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    };

    return (
        <Messages updateNewMessageText={updateNewMessageText} addMessage={addMessage}
                  dialogs={state.messagesPage.dialogs} newMessageText={state.messagesPage.newMessageText}/>
    )
};

export default MessagesContainer