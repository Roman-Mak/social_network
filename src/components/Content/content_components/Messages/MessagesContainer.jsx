import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";
import {compose} from "redux";

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

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Messages);