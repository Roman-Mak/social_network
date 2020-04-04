import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import {addPost} from "./redux/state";

const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <Content state={props.state} addPots={addPost} />
            </div>
    );
};

export default App;
