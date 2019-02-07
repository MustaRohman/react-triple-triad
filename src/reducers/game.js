import { KEY_PRESS } from "../actions";
import cards from "../components/Game/cards";

const player1Cards = cards.deck1.slice();
const player2Cards = cards.deck2.slice();
let initialState = {
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
    selectedIndex: 3,
    tileIndex: 8,
    tileMode: false,
    selectedCard: null
}   

function game(state = initialState, action) {
    switch(action.type) {
        case KEY_PRESS: {        
            break;
        }
        default: 
            return state;
    }
}

export default game;