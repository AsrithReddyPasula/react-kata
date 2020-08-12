import React from "react";
import Modal from "react-modal";

interface GameResultModalProps {
    gameResult?: string;
}

const GameResultModal: React.FC<GameResultModalProps> = ({gameResult}) => {
    return (
        <Modal
            testId={"game-modal"}
            isOpen={gameResult !== ""}
        >
            <div>
                <h3>Game Result: {gameResult}</h3>
            </div>
        </Modal>
    )
};

Modal.setAppElement("body");
export default GameResultModal;
