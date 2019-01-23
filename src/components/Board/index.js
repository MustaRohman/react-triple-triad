import React from "react";
import Hand from "../Hand";

import "./index.css";
import { Grid } from "../Grid";

export class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 3,
            tileIndex: 8,
            tileMode: false,
            selectedCard: null
        }        
        this.initKeyDownHandler();
    }

    initKeyDownHandler() {
        document.onkeydown = (key) => {
            let currentIndex = this.state.selectedIndex;

            switch(key.keyCode) {
                case 37: {
                    if (this.state.tileMode) {
                        let index = this.state.tileIndex;
                        do {
                            index = (index - 1) % 9;
                        }
                        while (this.props.grid[index]);
                        if (index < 0) index = index + 9;
                        this.setState({
                            tileIndex: index
                        });
                    }
                    break;
                }
                case 38: {
                    if (!this.state.tileMode) {
                        currentIndex--;
                        if (currentIndex < 0) {
                            currentIndex = 4;
                        }
                        
                        this.setState({
                            selectedIndex: currentIndex
                        });
                    } else {
                        let index = this.state.tileIndex;
                        do {
                            index = (index - 3) % 9;
                            if (index < 0) index = index + 9;
                        }
                        while (this.props.grid[index]);
                        this.setState({
                            tileIndex: index
                        });
                    }
                    break;
                }
                case 39: {
                    if (this.state.tileMode) {
                        let index = this.state.tileIndex;
                        do {
                            index = (index + 1) % 9;
                        }
                        while (this.props.grid[index]) ;
                        this.setState({
                            tileIndex: index
                        });
                    }
                    break;
                }
                case 40: {
                    if (!this.state.tileMode) {
                        currentIndex++;
                        if (currentIndex > 4) {
                            currentIndex = 0;
                        }
                        this.setState({
                            selectedIndex: currentIndex,
                        });
                    } else {
                        let index = this.state.tileIndex;
                        do {
                            index = (index + 3) % 9;
                        }
                        while (this.props.grid[index]);
                        this.setState({
                            tileIndex: index
                        });
                    }
                    break;
                }
                case 27: {
                    if (this.state.tileMode) {
                        this.setState({tileMode: false});
                    }
                    break;
                }
                case 13: {
                    if (!this.state.tileMode) {
                        let index = this.props.grid.indexOf(null);
                        this.setState({
                            tileIndex: index,
                            tileMode: true
                        });
                    } else {
                        const selectedIndex = this.state.selectedIndex;
                        const tileIndex = this.state.tileIndex;                    
                        this.props.onTileSelect(selectedIndex, tileIndex )
                        this.setState({
                            tileMode: false,
                            selectedIndex: 0
                        })
                    }
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
                    <p>{this.props.player1Score}</p>
                    <Hand cards={this.props.player1Hand} selectedIndex={this.state.selectedIndex} turn={this.props.turn} side="left"></Hand>
                </div>
                <Grid tiles={this.props.grid} tileMode={this.state.tileMode} selectedIndex={this.state.tileIndex}/>
                <div className="board-hand">
                    <p>{this.props.player2Score}</p>
                    <Hand cards={this.props.player2Hand} selectedIndex={this.state.selectedIndex} turn={!this.props.turn} side="right"></Hand>
                </div>                
            </div>
        )
    }
}