import React, {useContext} from "react";
import {toDisplayText} from "./RockPaperHelper";
import {UpperCaseContext} from "./AppContext";

const AppBanner: React.FC = () => {
    const {isUpperCase} = useContext(UpperCaseContext);

    return <div>
        <h2>{toDisplayText("Welcome to Rock Paper Scissors", isUpperCase)}</h2>
        <a href="https://en.wikipedia.org/wiki/Rock_paper_scissors" target="_blank"
           rel="noreferrer noopener">
            {toDisplayText("Rock Paper Scissor Rules", isUpperCase)}
        </a>
    </div>
};

export default AppBanner;