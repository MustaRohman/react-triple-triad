export const MOVE_CURSOR = 'MOVE_CURSOR';
export const SELECT_CARD = 'SELECT_CARD';
export const SELECT_TILE = 'SELECT_TILE';

export const CursorDirection = {
    UP, DOWN
}

export function moveCursor(direction) {
    return { type: MOVE_CURSOR, direction: direction };
}

export function selectCard(index, player) {
    return { type: SELECT_CARD, data: { index, player } }
}

export function selectTile(index, card) {
    return { type: SELECT_TILE, data: { index, card } }
}

