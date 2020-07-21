import React from "react";
import "./App.css";
import {withRouter} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HeaderContainer from "./components/Header/HeaderContainer";
import Preloader from "./components/common/Preloader/Preloader";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import {compose} from "redux";
import Routes from "./components/Routes/Routes";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render = () => {
        if (!this.props.initialized) {
            return <div className="app-preloader"><Preloader/></div>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <div className="content">
                    <Navbar/>
                    <Routes/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({initialized: state.app.initialized});

export default compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);
