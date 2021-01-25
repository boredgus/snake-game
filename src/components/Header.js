import React from "react";

function Header() {
    return (
        <header>
        <div className="logo">Hungry Bob</div>
            <div className="score">
                <span>Score: {0}</span>
                <span>Best: {0}</span>
            </div>
            <div className="help">
                <img src="./img/help.png" alt="help"/>
            </div>
        </header>
    );
}

export default Header;