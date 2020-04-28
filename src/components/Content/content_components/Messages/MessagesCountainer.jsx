import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
        newMessageText: state.messagesPage.newMessageText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => dispatch(updateNewMessageTextActionCreator(text)),
        addMessage: () => dispatch(addMessageActionCreator())
    }
};

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer