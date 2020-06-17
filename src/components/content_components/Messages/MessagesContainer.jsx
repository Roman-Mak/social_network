import React from "react";
import {addMessage} from "../../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
        messageText: state.messagesPage.messageText
    }
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {addMessage})
)(Messages);