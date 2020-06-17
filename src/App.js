import React from 'react';
import './App.css';
import {Route, withRouter} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/content_components/Profile/ProfileContainer";
import MessagesContainer from "./components/content_components/Messages/MessagesContainer";
import Friends from "./components/content_components/Friends/Friends";
import News from "./components/content_components/News/News";
import Music from "./components/content_components/Music/Music";
import Settings from "./components/content_components/Settings/Settings";
import UsersContainer from "./components/content_components/Users/UsersContainer";
import Login from "./components/content_components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import {compose} from "redux";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render = () => {
        if (!this.props.initialized) {
            return <Preloader/>
        }
            return (
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="content">
                        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                        <Route path="/messages" render={() => <MessagesContainer/>}/>
                        <Route path="/friends" render={() => <Friends/>}/>
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/login" render={() => <Login/>}/>
                    </div>
                </div>
            );
    }
}

const mapStateToProps = (state) => ({initialized: state.app.initialized});

export default compose(withRouter, connect(mapStateToProps, {initializeApp})) (App);
