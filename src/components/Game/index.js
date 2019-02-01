import React from "react";
import { Board } from "../Board";
import cards from "./cards";

export class Game extends React.Component {    
    constructor(props) {
        super(props);
        const player1Cards = cards.deck1.slice();
        const player2Cards = cards.deck2.slice();

        this.state = {
            totalCardsPlaced: 0,
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

    onTileSelect(handIndex, tileIndex) {
        let totalCardsPlaced = this.state.totalCardsPlaced
        let player1Hand = this.state.player1.hand.slice();
        let player2Hand = this.state.player2.hand.slice();
        let newState = {
            turn: !this.state.turn,
            totalCardsPlaced: totalCardsPlaced + 1,
        }
        const card = this.state.turn ? player1Hand.splice(handIndex, 1)[0] : player2Hand.splice(handIndex, 1)[0];
        let grid = this.placeCardOnGrid(card, tileIndex);

        if (this.state.turn) {
            const results = this.performCaptureOperation(this.state.player1.score, this.state.player2.score, tileIndex, this.state.turn, grid);
            newState.grid = results.grid;
            newState.player1 = {hand:player1Hand, score: results.score};
            newState.player2 = {hand: player2Hand, score: results.opponentScore}
        } else {
            const results = this.performCaptureOperation(this.state.player2.score, this.state.player1.score, tileIndex, this.state.turn, grid);
            newState.grid = results.grid;
            newState.player2 = {hand: player2Hand, score : results.score};
            newState.player1 = {hand: player1Hand, score: results.opponentScore};
        }
        this.setState(newState);
    }

    /**
     * Places card in tile index within grid
     * @param {*} card 
     * @param {number} tileIndex Index within grid (0-8)
     * @returns {any[]} Returns updated grid
     */
    placeCardOnGrid(card, tileIndex) {
        let grid = this.state.grid.slice();
        grid[tileIndex] = card;
        console.log(grid);
        return grid;
    }

    /**
     * Performs the card capture process of opponent cards after placing, 
     * which is performed after placing a card on a tile.
     * Attempts to capture neighbouring cards from top, left, right and down of the newly placed card. 
     * To 'capture' is to change of the owner of the neighbouring card to the player performing the card placement.
     * @param {number} score Player's current score/hand total
     * @param {number} opponentScore Opponent's current score/hand total
     * @param {number} tileIndex Index of tile that the card was placed on
     * @param {boolean} player Player that is currently performing the card placement (Player 1: true, Player 2: false)
     * @param {card[]} grid Current grid of card placements
     * @returns {{grid: any[], score: number, opponentScore: number}} Object containing updated grid
     */
    performCaptureOperation(score, opponentScore, tileIndex, player, grid) {
        const card = grid[tileIndex];
        if (!card) {return null;}
        const neighbourTileIndices = this.getNeighbourTileIndices(tileIndex);
        let newScore = score;
        let newOpponentScore = opponentScore;
        let newGrid = grid.slice();
        let neighbourCard;

        function capture() {
            neighbourCard.player = player;
            newScore++;
            newOpponentScore--;         
        }

        if (neighbourTileIndices[0] !== null) {
            console.log('Tile has top neighbour tile');
            const index = neighbourTileIndices[0];
            neighbourCard = newGrid[index];
            
            if (neighbourCard && card.stats[0] > neighbourCard.stats[3]) {
                console.log('Card has greater value than top neighbour');
                capture();
            }
        }

        if (neighbourTileIndices[1] !== null) {
            console.log('Tile has left neighbour tile');
            const index = neighbourTileIndices[1];
            neighbourCard = newGrid[index];
            if (neighbourCard && card.stats[1] > neighbourCard.stats[2]) {
                console.log('Card has greater value than left neighbour');
                capture();
            }
        }

        if (neighbourTileIndices[2] !== null) {
            console.log('Tile has right neighbour tile');
            const index = neighbourTileIndices[2];
            neighbourCard = newGrid[index];
            if (neighbourCard && card.stats[2] > neighbourCard.stats[1]) {
                console.log('Card has greater value than right neighbour');
                capture();
            }
        }

        if (neighbourTileIndices[3] !== null) {
            console.log('Tile has down neighbour tile');
            const index = neighbourTileIndices[3];
            neighbourCard = newGrid[index];
            if (neighbourCard && card.stats[3] > neighbourCard.stats[0]) {
                console.log('Card has greater value than down neighbour');
                capture();
            }
        }
        
        return {grid: newGrid, score: newScore, opponentScore: newOpponentScore};
    }

    /**
     * Takes in as input a grid tile index and returns an array of [ up, left, right, down ]
     * A value in the array is null if that neighbour 
     * doesn't exist in the grid (e.g. 0th index has no 'up' or 'left' neighbour)
     * @param {number} tileIndex
     */
    getNeighbourTileIndices(tileIndex) {
        let returnArray = []
        if (tileIndex >= 3) {
            // Up	
            returnArray.push(tileIndex-3)
        } else {
            returnArray.push(null)
        }
        
        if (tileIndex % 3 > 0) {
            // Left
            returnArray.push(tileIndex-1)
        } else {
            returnArray.push(null)
        }

        if (tileIndex % 3 !== 2) {
            // Right
            returnArray.push(tileIndex+1)
        } else {
            returnArray.push(null)
        }
    
        if (tileIndex < 6) {
            // Down
            returnArray.push(tileIndex+3)
        } else {
            returnArray.push(null)
        }

        return returnArray;
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
            totalCardsPlaced={this.state.totalCardsPlaced}
            onTileSelect={(handIndex, tileIndex) => {this.onTileSelect(handIndex, tileIndex)}}
            ></Board>
        )
    }
}
