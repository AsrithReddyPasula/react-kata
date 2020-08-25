import React from 'react';
import './App.css';
import Header from "./Header";
import Game from "./Game";
import AppContext from './AppContext';
import AppBanner from "./AppBanner";

const App: React.FC = () => {
    return (
        <AppContext>
            <div className="App">
                <Header/>
                <AppBanner />
                <Game/>
            </div>
        </AppContext>
    );
};

export default App;
