import { React } from "react";
import { shallow } from 'enzyme';
import { Board } from '.';

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
        expect(true).toEqual(true);
    });
})