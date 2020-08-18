import React, {useContext} from "react";
import {toDisplayText} from "./RockPaperHelper";
import {UpperCaseContext} from "./AppContext";

const Header: React.FC = () => {
    const {isUpperCase, toggleUpperCase} = useContext(UpperCaseContext)

    return (
        <header style={{background: "#003e7e", color: "#ffffff"}} data-testid="app-header">
            <h2>
                {toDisplayText("Rock Paper Scissor Game", isUpperCase)}
            </h2>
            <button onClick={toggleUpperCase}>Change Case</button>
        </header>
    )
};

export default Header;