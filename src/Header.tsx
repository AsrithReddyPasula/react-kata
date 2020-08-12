import React from "react";

const Header: React.FC = () => {
    return (
        <header  style={{background: "#003e7e", color: "#ffffff"}} data-testid="app-header">
            <h2>
                Rock Paper Scissor Game
            </h2>
        </header>
    )
};

export default Header;