import React from "react";
import { Board } from "../Board";
import cards from "./cards";

export class Game extends React.Component {    
    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: 3,
            turn: true,
            player1: {
                score: 5,
                hand: cards
            },
            player2: {
                score: 5,
                hand: cards
            },
            board: [
                [null, null, null],
                [null, null, null],
                [null, null, null]
            ]
        }

        document.onkeydown = (key) => {
            console.log(key);
            let currentIndex = this.state.selectedIndex;
            let cards = this.state ? this.state.player1.hand.slice() : this.state.player2.hand.slice();

            switch(key.keyCode) {
                case 38: {
                    cards[currentIndex].selected = false;
                    currentIndex--;
                    if (currentIndex < 0) {
                        currentIndex = 4;
                    }
                    cards[currentIndex].selected = true;
                    this.setState({
                        cards: cards,
                        selectedIndex: currentIndex
                    });
                    break;
                }
                case 40: {
                    cards[currentIndex].selected = false;
                    currentIndex++;
                    if (currentIndex > 4) {
                        currentIndex = 0;
                    }
                    cards[currentIndex].selected = true;
                    this.setState({
                        cards: cards,
                        selectedIndex: currentIndex
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
            <Board player1Hand={this.state.player1.hand} player2Hand={this.state.player2.hand} turn={this.state.turn}></Board>
        )
    }
}
