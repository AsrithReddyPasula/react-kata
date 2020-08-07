import React from 'react';
import './App.css';
import Game from "./Game";

const App: React.FC = () => {
    const [gameResult, setGameResult] = React.useState<string>("");

    return (
        <div className="App">
            <h1>Welcome to Rock Paper Scissors</h1>
            <a href="https://en.wikipedia.org/wiki/Rock_paper_scissors"
               target="_blank"
               rel="noreferrer noopener">Rock Paper Scissor Rules</a>
            <div>
                <Game resultCallback={setGameResult} />
                <p>{gameResult}</p>
            </div>
        </div>
    );
}

export default App;
