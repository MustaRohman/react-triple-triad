import React from 'react';
import { shallow } from 'enzyme';
import { Game } from '.';


// on key press down, selectedIndex should be incremented
// on key press up, selectedIndex should be decremented
// on key press down, if selectedIndex=hand.length - 1 (reached end of hand), selectedIndex should return to standing index (0)
// on key press up, if selectedIndex=0 (reached start of hand), selectedIndex should return to end index (hand.length - 1)
// on key press enter, should go into select tile mode
// on key press enter, should go into select tile mode and select a tile
// on key press enter in select tile mode, should place card in selected tile position
// if turn=true, only player1's card should be selected=true
// end of turn should switch turn to !turn

describe('Game: ', () => {
    it('renders without crashing', () => {
        shallow(<Game />);
    });

    it('getNeighbourTileIndices returns the correct neighbour indices', () => {
       const wrapper = shallow(<Game />);
       expect(wrapper.instance().getNeighbourTileIndices(0)).toEqual([null, null, 1, 3]);
       expect(wrapper.instance().getNeighbourTileIndices(1)).toEqual([null, 0, 2, 4]);
       expect(wrapper.instance().getNeighbourTileIndices(2)).toEqual([null, 1, null, 5]);
       expect(wrapper.instance().getNeighbourTileIndices(3)).toEqual([0, null, 4, 6]);
       expect(wrapper.instance().getNeighbourTileIndices(4)).toEqual([1, 3, 5, 7]);
       expect(wrapper.instance().getNeighbourTileIndices(5)).toEqual([2, 4, null, 8]);
       expect(wrapper.instance().getNeighbourTileIndices(6)).toEqual([3, null, 7, null]);
       expect(wrapper.instance().getNeighbourTileIndices(7)).toEqual([4, 6, 8, null]);
       expect(wrapper.instance().getNeighbourTileIndices(8)).toEqual([5, 7, null, null]);
    });
})