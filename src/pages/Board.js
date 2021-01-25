import React, {Component} from "react";
import Help from "../components/Help";

class Board extends Component {
    constructor(){
        super();
        this.state = {
            score: 0
        }
    }
    render() {
        return (
            <main>
                <div className="board">
                    <div className="food">
                        <img src="./food/1.png" alt="food" />
                    </div>
                </div>
                <Help />
            </main>
        );
    }
}

export default Board;