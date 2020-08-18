import React from "react";
import Modal from "react-modal";

interface GameResultModalProps {
    gameResult?: string;
    onPlayAgain?: () => void;
}

const GameResultModal: React.FC<GameResultModalProps> = ({gameResult, onPlayAgain}) => {
    return (
        <Modal
            testId={"game-modal"}
            isOpen={gameResult !== ""}
        >
            <div>
                <h3>{`Game Result: ${gameResult}`}</h3>
                <button onClick={onPlayAgain}>
                    Play Again
                </button>
            </div>
        </Modal>
    )
};

Modal.setAppElement("body");
export default GameResultModal;
