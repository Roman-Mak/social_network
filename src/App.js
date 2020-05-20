import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
    return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                <Content />
            </div>
    );
};

export default App;
