export const KEY_PRESS = 'KEY_PRESS';
// export const SELECT_CARD = 'SELECT_CARD';
// export const SELECT_TILE = 'SELECT_TILE';

export const KEY = {
    LEFT: 38, RIGHT: 39,
    UP: 38, DOWN: 40, ENTER: 13
}

export function keyPress(key) {
    return { type: KEY_PRESS, key };
}

// export function selectCard(index, player) {
//     return { type: SELECT_CARD, data: { index, player } }
// }

// export function selectTile(index, card) {
//     return { type: SELECT_TILE, data: { index, card } }
// }

/**
 * ACTIONS are defined by, well, user actions. 
 * At the moment, only one user action: KEY_PRESS. 
 * Several keys can be pressed, but all are categorised as a key press action
 */

