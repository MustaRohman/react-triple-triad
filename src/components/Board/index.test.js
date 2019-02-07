import  React  from "react";
import { shallow } from 'enzyme';
import { Board } from '.';
const cards = [{
    name: 'Card1',
    stats: [1, 2, 3, 4],
    player: true
  },
  {
      name: 'Card2',
      stats: [1, 2, 3, 4],
      player: true
  },
  {
      name: 'Card3',
      stats: [1, 2, 3, 4],
      player: true
  },
  {
      name: 'Card4',
      stats: [1, 2, 3, 4],
      player: true
  },
  {
    name: 'Card5',
    stats: [5, 5, 5, 5],
    player: true
  }
]
const grid = [null, null, null, null, null, null, null, null, null,]

// on key press down, selectedIndex should be incremented
// on key press up, selectedIndex should be decremented
// on key press down, if selectedIndex=hand.length - 1 (reached end of hand), selectedIndex should return to standing index (0)
// on key press up, if selectedIndex=0 (reached start of hand), selectedIndex should return to end index (hand.length - 1)
// on key press enter, should go into select tile mode
// on key press enter, should go into select tile mode and select a tile
// on key press enter in select tile mode, should place card in selected tile position
// if turn=true, only player1's card should be selected=true
// end of turn should switch turn to !turn

describe('Board: ', () => {
    it('renders without crashing', () => {
        shallow(
            <Board 
            player1Hand={cards} 
            player2Hand={cards}
            player1Score={5}
            player2Score={5}
            turn={true}
            grid={grid}
            totalCardsPlaced={0}
            onTileSelect={(handIndex, tileIndex) => {this.onTileSelect(handIndex, tileIndex)}}
            ></Board>
        );
    });

    it ('up key selects card above current selection', () => {
        const wrapper = shallow(
            <Board 
            player1Hand={cards} 
            player2Hand={cards}
            player1Score={5}
            player2Score={5}
            turn={true}
            grid={grid}
            totalCardsPlaced={0}
            onTileSelect={(handIndex, tileIndex) => {this.onTileSelect(handIndex, tileIndex)}}
            ></Board>
        );
    })
})