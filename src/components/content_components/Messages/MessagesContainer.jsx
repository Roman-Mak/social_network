import React from "react";
import {initDialogs, sendMessage, updateDialog} from "../../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {reset} from 'redux-form';

class MessagesContainer extends React.Component {
    componentDidMount() {
        this.props.initDialogs(Number(this.props.userId));
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.userId !== this.props.userId) {
            this.props.updateDialog(Number(this.props.userId));
        }
    }

    render = () => {
        return <Messages dialogs={this.props.dialogs}
                         messages={this.props.messages}
                         sendMessage={this.props.sendMessage}
                         selectedDialogId={this.props.selectedDialogId}
                         resetForm={this.props.reset}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        selectedDialogId: state.messagesPage.selectedDialogId
    }
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {initDialogs, updateDialog, sendMessage, reset})
)(MessagesContainer);