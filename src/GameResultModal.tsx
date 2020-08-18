import React from "react";
import Modal from "react-modal";
import {toDisplayText} from "./RockPaperHelper";

interface GameResultModalProps {
    gameResult?: string;
    onPlayAgain?: () => void;
    isUpperCase: boolean;
}

const GameResultModal: React.FC<GameResultModalProps> = ({gameResult, onPlayAgain, isUpperCase}) => {
    return (
        <Modal
            testId={"game-modal"}
            isOpen={gameResult !== ""}
        >
            <div>
                <h3>{toDisplayText(`Game Result: ${gameResult}`, isUpperCase)}</h3>
                <button onClick={onPlayAgain}>
                    Play Again
                </button>
            </div>
        </Modal>
    )
};

Modal.setAppElement("body");
export default GameResultModal;
