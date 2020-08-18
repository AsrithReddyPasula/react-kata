import React, {useState} from "react";
import {playGame} from "./RockPaperHelper";
import GameResultModal from "./GameResultModal";

const Game: React.FC = () => {
    const [playerOne, setPlayerOne] = useState<string>("");
    const [playerTwo, setPlayerTwo] = useState<string>("");
    const [gameOutcome, setGameOutcome] = useState<string>("");
    const clearGame = () => {
        setPlayerOne("");
        setPlayerTwo("");
        setGameOutcome("");
    };

    return (
        <>
            <div>
                <label htmlFor="player-one-input">Player One Input</label>
                <input type="text" id="player-one-input" value={playerOne}
                       onChange={(e) => setPlayerOne(e.target.value)}/>

                <label htmlFor="player-two-input">Player Two Input</label>
                <input type="text" id="player-two-input" value={playerTwo}
                       onChange={(e) => setPlayerTwo(e.target.value)}/>
            </div>

            <button onClick={() => setGameOutcome(playGame(playerOne, playerTwo))}>Play</button>
            <button onClick={clearGame}>Clear</button>

            {gameOutcome}
            <GameResultModal gameResult={gameOutcome} onPlayAgain={clearGame}/>
        </>
    )
};

export default Game;