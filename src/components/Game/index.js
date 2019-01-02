import React from "react";
import { Board } from "../Board";
import cards from "./cards";

export class Game extends React.Component {    
    constructor(props) {
        super(props);
        const player1Cards = cards.deck1.slice();
        const player2Cards = cards.deck2.slice();

        this.state = {
            player1: {
                score: 5,
                hand: player1Cards
            },
            player2: {
                score: 5,
                hand: player2Cards
            },
            grid: [
                    null,
                    null,
                    {
                        name: 'Name',
                        stats: [0, 0, 0, 0]
                    },
                    null,
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

    placeCardOnGrid(handIndex, tileIndex) {
        if (this.state.turn) {
            let player1Hand = this.state.player1.hand.slice();
            const card = player1Hand.splice(handIndex, 1)[0];
            let grid = this.state.grid.slice();
            grid[tileIndex] = card;
            this.setState({
                player1: {
                    hand: player1Hand
                },
                grid: grid,
                turn: !this.state.turn
            })
        } else {
            let player2Hand = this.state.player2.hand.slice();
            const card = player2Hand.splice(handIndex, 1)[0];
            let grid = this.state.grid.slice();
            grid[tileIndex] = card;
            this.setState({
                player2: {
                    hand: player2Hand
                },
                grid: grid,
                turn: !this.state.turn
            })
        }
    }
    
    render() {
        return (
            <Board 
            player1Hand={this.state.player1.hand} 
            player2Hand={this.state.player2.hand} 
            turn={this.state.turn}
            grid={this.state.grid}
            onTileSelect={(handIndex, tileIndex) => {this.placeCardOnGrid(handIndex, tileIndex)}}
            ></Board>
        )
    }
}
