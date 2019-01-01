import React from "react";
import { Board } from "../Board";
import cards from "./cards";

export class Game extends React.Component {    
    constructor(props) {
        super(props);
        const player1Cards = cards.deck1.slice();
        const player2Cards = cards.deck2.slice();

        this.state = {
            selectedIndex: 3,
            player1: {
                score: 5,
                hand: player1Cards
            },
            player2: {
                score: 5,
                hand: player2Cards
            },
            grid: [
                    {
                        name: 'Name',
                        stats: [0, 0, 0, 0]
                    },
                    {
                        name: 'Name',
                        stats: [0, 0, 0, 0]
                    },
                    null,
                    {
                        name: 'Name',
                        stats: [0, 0, 0, 0]
                    },
                    {
                        name: 'Name',
                        stats: [0, 0, 0, 0]
                    },
                    null,
                    null, null, null
            ],
            turn: true,
        }        
    }

    placeCardOnGrid(coord, turn) {
        if (turn) {
            
        }
    }
    
    render() {
        return (
            <Board 
            player1Hand={this.state.player1.hand} 
            player2Hand={this.state.player2.hand} 
            turn={this.state.turn}
            grid={this.state.grid}
            ></Board>
        )
    }
}
