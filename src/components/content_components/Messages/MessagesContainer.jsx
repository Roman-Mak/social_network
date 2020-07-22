import React from "react";
import {addMessage, getDialogs, getMessages, setCurrentDialog, startDialog} from "../../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

class MessagesContainer extends React.Component {
    componentDidMount() {
        if (this.props.userId) {
            let userId = Number(this.props.userId);
            this.props.startDialog(userId);
            this.props.getMessages(userId);
            this.props.setCurrentDialog(userId);
        }
        this.props.getDialogs();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.userId) {
            let userId = Number(this.props.userId);
            this.props.getMessages(userId);
            this.props.setCurrentDialog(userId);
        }
    }

    render = () => {
        return <Messages dialogs={this.props.dialogs}
                         messages={this.props.messages}
                         messageText={this.props.messageText}
                         addMessage={this.props.messageText}
                         selectedDialogId={this.props.selectedDialogId}/>
    }
}

const mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        messageText: state.messagesPage.messageText,
        selectedDialogId: state.messagesPage.selectedDialogId
    }
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {getDialogs, startDialog, getMessages, setCurrentDialog, addMessage})
)(MessagesContainer);