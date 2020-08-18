import React, {useContext} from "react";
import Modal from "react-modal";
import {toDisplayText} from "./RockPaperHelper";
import {UpperCaseContext} from "./AppContext";

interface GameResultModalProps {
    gameResult?: string;
    onPlayAgain?: () => void;
}

const GameResultModal: React.FC<GameResultModalProps> = ({gameResult, onPlayAgain}) => {
    const {isUpperCase} = useContext(UpperCaseContext)

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
