import React from 'react';
import { shallow } from 'enzyme';
import { Game } from '.';
import { equal } from 'assert';


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
       expect(wrapper.instance().getNeighbourTileIndices(0).sort()).toEqual([1, 3].sort());
       expect(wrapper.instance().getNeighbourTileIndices(1).sort()).toEqual([0, 4, 2].sort());
       expect(wrapper.instance().getNeighbourTileIndices(2).sort()).toEqual([1, 5].sort());
       expect(wrapper.instance().getNeighbourTileIndices(3).sort()).toEqual([0, 4, 6].sort());
       expect(wrapper.instance().getNeighbourTileIndices(4).sort()).toEqual([1, 3, 5, 7].sort());
       expect(wrapper.instance().getNeighbourTileIndices(5).sort()).toEqual([2, 4, 8].sort());
       expect(wrapper.instance().getNeighbourTileIndices(6).sort()).toEqual([3, 7].sort());
       expect(wrapper.instance().getNeighbourTileIndices(7).sort()).toEqual([6, 4, 8].sort());
       expect(wrapper.instance().getNeighbourTileIndices(8).sort()).toEqual([5, 7].sort());
    });
})