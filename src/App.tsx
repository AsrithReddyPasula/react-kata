import React, {useState} from 'react';
import './App.css';
import Header from "./Header";
import Game from "./Game";
import {toDisplayText} from "./RockPaperHelper";

function App() {
  const [isUpperCase, setIsUpperCase] = useState<boolean>(false);

  return (
    <div className="App">
        <Header onChangeCase={() => setIsUpperCase(!isUpperCase)}/>
        <div>
            <h2>{toDisplayText("Welcome to Rock Paper Scissors", isUpperCase)}</h2>
            <a href="https://en.wikipedia.org/wiki/Rock_paper_scissors" target="_blank" rel="noreferrer noopener">
                {toDisplayText("Rock Paper Scissor Rules", isUpperCase)}
            </a>
        </div>
        <Game isUpperCase={isUpperCase} />
    </div>
  );
}

export default App;
