import React from "react";
import Hand from "../Hand";

import "./index.css";
import { Grid } from "../Grid";

export class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 3,            
        }
        document.onkeydown = (key) => {
            let currentIndex = this.state.selectedIndex;
            console.log(this.props.turn);

            switch(key.keyCode) {
                case 38: {
                    currentIndex--;
                    if (currentIndex < 0) {
                        currentIndex = 4;
                    }
                    this.setState({
                        selectedIndex: currentIndex,
                    });
                    break;
                }
                case 40: {
                    currentIndex++;
                    if (currentIndex > 4) {
                        currentIndex = 0;
                    }
                    this.setState({
                        selectedIndex: currentIndex,
                    });
                    break;
                }
                default: {
                    console.log(key.keyCode);
                }
            }                
        }
    }

    render() {
        return (
            <div className="board">         
                <div className="board-hand">
                    <Hand cards={this.props.player1Hand} selectedIndex={this.state.selectedIndex} turn={this.props.turn} side="left"></Hand></div>
                <Grid />
                <div className="board-hand">
                    <Hand cards={this.props.player2Hand} selectedIndex={this.state.selectedIndex} turn={!this.props.turn} side="right"></Hand>
                </div>                
            </div>
        )
    }
}