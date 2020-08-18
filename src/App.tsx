import React from 'react';
import './App.css';
import Header from "./Header";
import Game from "./Game";
import AppBanner from "./AppBanner";

const App: React.FC = () => {
    return <div className="App">
            <Header/>
            <AppBanner/>
            <Game/>
        </div>;
};

export default App;
