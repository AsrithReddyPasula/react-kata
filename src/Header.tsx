import React from "react";
import {toDisplayText} from "./RockPaperHelper";

interface HeaderProps {
    onChangeCase: () => void;
}


const Header: React.FC<HeaderProps> = ({onChangeCase}) => {
    const [isUpperCase, setIsUpperCase] = React.useState<boolean>(false);

    return (
        <header  style={{background: "#003e7e", color: "#ffffff"}} data-testid="app-header">
            <h2>
                {toDisplayText("Rock Paper Scissor Game", isUpperCase)}
            </h2>
            <button onClick={() => {setIsUpperCase(!isUpperCase); onChangeCase();}}>Change Case</button>
        </header>
    )
};

export default Header;