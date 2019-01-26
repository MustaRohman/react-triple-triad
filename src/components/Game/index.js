import React from "react";
import { Board } from "../Board";
import cards from "./cards";

export class Game extends React.Component {    
    constructor(props) {
        super(props);
        const player1Cards = cards.deck1.slice();
        const player2Cards = cards.deck2.slice();

        this.state = {
            totalCardsPlaces: 0,
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
        let totalCardsPlaces = this.state.totalCardsPlaces
        let player1Hand = this.state.player1.hand.slice();
        let player2Hand = this.state.player2.hand.slice();
        let newState = {
            turn: !this.state.turn,
            totalCardsPlaces: totalCardsPlaces + 1,
        }
        
        if (this.state.turn) {
            const card = player1Hand.splice(handIndex, 1)[0];
            let grid = this.state.grid.slice();
            grid[tileIndex] = card;
            const results = this.performCaptureOperation(this.state.player1.score, this.state.player2.score, card, tileIndex, this.state.turn, grid);
            newState.grid = results.grid;
            newState.player1 = {hand:player1Hand, score: results.score};
            newState.player2 = {hand: player2Hand, score: results.opponentScore}
        } else {
            const card = player2Hand.splice(handIndex, 1)[0];
            let grid = this.state.grid.slice();
            grid[tileIndex] = card;
            const results = this.performCaptureOperation(this.state.player2.score, this.state.player1.score, card, tileIndex, this.state.turn, grid);
            newState.grid = results.grid;
            newState.player2 = {hand: player2Hand, score : results.score};
            newState.player1 = {hand: player1Hand, score: results.opponentScore};
        }
        this.setState(newState);
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

    performCaptureOperation(score, opponentScore, card, tileIndex, player, grid) {
        const neighbourTileIndices = this.getNeighbourTileIndices(tileIndex);
        let newScore = score;
        let newOpponentScore = opponentScore;
        let newGrid = grid.slice();
        let neighbourCard;
        console.log(neighbourTileIndices, card);        
        if (neighbourTileIndices[0] !== null) {
            console.log('Tile has top neighbour tile');
            const index = neighbourTileIndices[0];
            neighbourCard = newGrid[index];
            
            if (neighbourCard && card.stats[0] > neighbourCard.stats[3]) {
                console.log('Card has greater value than top neighbour');
                neighbourCard.player = player;
                newScore++;
                newOpponentScore--;                
            }
        }

        if (neighbourTileIndices[1] !== null) {
            console.log('Tile has left neighbour tile');
            const index = neighbourTileIndices[1];
            neighbourCard = newGrid[index];
            if (neighbourCard && card.stats[1] > neighbourCard.stats[2]) {
                console.log('Card has greater value than left neighbour');
                neighbourCard.player = player;
                newScore++;
                newOpponentScore--;
            }
        }

        if (neighbourTileIndices[2] !== null) {
            console.log('Tile has right neighbour tile');
            const index = neighbourTileIndices[2];
            neighbourCard = newGrid[index];
            if (neighbourCard && card.stats[2] > neighbourCard.stats[1]) {
                console.log('Card has greater value than right neighbour');
                neighbourCard.player = player;
                newScore++;
                newOpponentScore--;
            }
        }

        if (neighbourTileIndices[3] !== null) {
            console.log('Tile has down neighbour tile');
            const index = neighbourTileIndices[3];
            neighbourCard = newGrid[index];
            if (neighbourCard && card.stats[3] > neighbourCard.stats[0]) {
                console.log('Card has greater value than down neighbour');
                neighbourCard.player = player;
                newScore++;
                newOpponentScore--;
            }
        }
        
        return {grid: newGrid, score: newScore, opponentScore: newOpponentScore};

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
            totalCardsPlaces={this.state.totalCardsPlaces}
            onTileSelect={(handIndex, tileIndex) => {this.placeCardOnGrid(handIndex, tileIndex)}}
            ></Board>
        )
    }
}
