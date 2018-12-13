import React from "react";
import Hand from "../Hand";

import "./index.css";

export class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 3,            
        }
    }

    render() {
        return (
            <div className="board">         
                <div className="board-hand">
                    <Hand cards={this.props.player2Hand} side="right"></Hand></div>
                <div className="center"></div>
                <div className="board-hand">
                    <Hand  cards={this.props.player2Hand} side="right"></Hand>
                </div>                
            </div>
        )
    }
}