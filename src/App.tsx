import React, {useState} from 'react';
import './App.css';
import {playGame} from "./RockPaperHelper";
import Header from "./Header";
import GameResultModal from "./GameResultModal";

function App() {
  const [playerOne, setPlayerOne] = useState<string>("");
  const [playerTwo, setPlayerTwo] = useState<string>("");
  const [gameOutcome, setGameOutcome] = useState<string>("");

  return (
    <div className="App">
        <div>
            <h2>Welcome to Rock Paper Scissors</h2>
            <a href="https://en.wikipedia.org/wiki/Rock_paper_scissors" target="_blank" rel="noreferrer noopener">
                Rock Paper Scissor Rules
            </a>
        </div>

        <div>
            <label htmlFor="player-one-input">Player One Input</label>
            <input type="text" id="player-one-input" value={playerOne} onChange={(e) => setPlayerOne(e.target.value)}/>

            <label htmlFor="player-two-input">Player Two Input</label>
            <input type="text" id="player-two-input" value={playerTwo} onChange={(e) => setPlayerTwo(e.target.value)}/>
        </div>

        <button onClick={() => setGameOutcome(playGame(playerOne, playerTwo))}>Play</button>

        {gameOutcome}

    </div>
  );
}

export default App;
