import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";

const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <Content state={props.state}
                         addPots={props.addPost}
                         updateNewPostText={props.updateNewPostText}
                         addMessage={props.addMessage}
                         updateNewMessageText={props.updateNewMessageText}
                />
            </div>
    );
};

export default App;
