import React from "react";
import { Board } from "../Board";
import cards from "./cards";

export class Game extends React.Component {    
    constructor(props) {
        super(props);
        const player1Cards = cards.deck1.slice();
        const player2Cards = cards.deck2.slice();

        this.state = {
            settings: {
                combo: false
            },
            player1: {
                score: 5,
                hand: player1Cards
            },
            player2: {
                score: 5,
                hand: player2Cards
            },
            gridCardTotal: 0,
            grid: [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null, 
                    null, 
                    null
            ],
            turn: true,
        }        
    }

    placeCardOnGrid(handIndex, tileIndex) {
        let gridCardTotal = this.state.gridCardTotal;
        if (this.state.turn) {
            let player1Hand = this.state.player1.hand.slice();
            const card = player1Hand.splice(handIndex, 1)[0];
            let grid = this.state.grid.slice();
            let gridCardTotal = this.state.gridCardTotal;
            grid[tileIndex] = card;
            console.log(this.getNeighbourTileIndices(tileIndex));
            this.setState({
                player1: {
                    hand: player1Hand,
                    score: this.state.player1.score
                },
                grid: grid,
                gridCardTotal: gridCardTotal++,
                turn: !this.state.turn
            })
        } else {
            let player2Hand = this.state.player2.hand.slice();
            const card = player2Hand.splice(handIndex, 1)[0];
            let grid = this.state.grid.slice();
            grid[tileIndex] = card;
            this.setState({
                player2: {
                    hand: player2Hand,
                    score : this.state.player2.score
                },
                grid: grid,
                gridCardTotal : gridCardTotal++,
                turn: !this.state.turn
            })
        }
    }

    /**
     * PURE FUNCTION
     * Places Card on Grid
     * Get Neighbouring tile indices
     * Loops through neighbours in Grid object
     * if neighbour != null then
     *      if Card.stat[position] > neighbour.stat[oppPosition]
     *          neighbour.player = true | false
     * return new grid
     */

    performCaptureOperation(card, tileIndex, player, grid) {
        
    }

    /**
     * Takes in as input a grid tile index and returns an array of [ up, left, right, down ]
     * A value in the array is null if that neighbour 
     * doesn't exist in the grid (e.g. 0th index has no 'up' or 'left' neighbour)
     * @param {Tile index} i 
     */
    getNeighbourTileIndices(i) {
        let returnArray = []
        if (i >= 3) {
            // Up	
            returnArray.push(i-3)
        } else {
            returnArray.push(null)
        }
        
        if (i % 3 > 0) {
            // Left
            returnArray.push(i-1)
        } else {
            returnArray.push(null)
        }

        if (i % 3 !== 2) {
            // Right
            returnArray.push(i+1)
        } else {
            returnArray.push(null)
        }
    
        if (i < 6) {
            // Down
            returnArray.push(i+3)
        } else {
            returnArray.push(null)
        }

        return returnArray;
    }

    /**
     * Get Stat
     */
    getStatIndex() {

    }

    
    render() {
        return (
            <Board 
            player1Hand={this.state.player1.hand} 
            player2Hand={this.state.player2.hand}
            player1Score={this.state.player1.score}
            player2Score={this.state.player2.score}
            turn={this.state.turn}
            grid={this.state.grid}
            onTileSelect={(handIndex, tileIndex) => {this.placeCardOnGrid(handIndex, tileIndex)}}
            ></Board>
        )
    }
}
