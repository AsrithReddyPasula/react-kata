import React from "react";
import {playGame} from "./RockPaperHelper";

export interface GameProps {
    resultCallback: (arg0: string) => void;
}

interface PlayerInputProps {
    id: string;
    label: string;
    onChangeCallback: (arg0: string) => void;
}

const PlayerInput: React.FC<PlayerInputProps> = ({id, label, onChangeCallback}) => {
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => onChangeCallback(event.target.value)

    return (
        <>
            <label htmlFor="id">{label}</label>
            <input type="text" id="id" onChange={handleOnChange}/>
        </>
    )
}

const Game: React.FC<GameProps> = ({resultCallback}) => {
    const [playerOne, setPlayerOne] = React.useState<string>("");
    const [playerTwo, setPlayerTwo] = React.useState<string>("");

    const handlePlayGame = () => resultCallback(playGame(playerOne, playerTwo));

    return (
        <div data-testid="game-component">
            <div>
                <PlayerInput id="playerOne" label="Player One Input" onChangeCallback={setPlayerOne}/>
                <PlayerInput id="playerTwo" label="Player Two Input" onChangeCallback={setPlayerTwo}/>
            </div>
            <button onClick={handlePlayGame}>Play</button>
        </div>
    )
};

export default Game;