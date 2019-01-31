import React from 'react';
import { shallow } from 'enzyme';
import { Game } from '.';

const strongCard = {
    name: 'Card2',
    stats: [3, 3, 3, 3],
    player: true
};

const weakCard = {
    name: 'Card2',
    stats: [1, 1, 1, 1],
    player: false
};

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

    it('placeCardOnGrid return updated grid with card in defined index', () => {
        const wrapper = shallow(<Game />);
        expect(wrapper.instance().placeCardOnGrid(strongCard, 7)).toEqual([null, null, null, null, null, null, null, strongCard, null]);
        expect(wrapper.instance().placeCardOnGrid(strongCard, 2)).toEqual([null, null, strongCard, null, null, null, null, null, null]);
    })

    it('performCaptureOperation captures no cards when there are no cards in neighbouring tiles', () => {
        const grid = [strongCard,null, null, null, weakCard, null, null, null, null]
        const wrapper = shallow(<Game />);  
        const resultsObj =  wrapper.instance().performCaptureOperation(5, 5, 0, true, grid);
        expect(resultsObj.score).toEqual(5);
        expect(resultsObj.grid[4].player).toEqual(false);
    });

    it('performCaptureOperation returns null if supplied with a grid tile index that has no card placement', () => {
        const grid = [null,null, null, strongCard, weakCard, null, null, null, null]
        const wrapper = shallow(<Game />);  
        const resultsObj =  wrapper.instance().performCaptureOperation(5, 5, 0, true, grid);
        expect(resultsObj).toEqual(null);
    })

    it('performCaptureOperation captures top card that has lower score', () => {
        const grid = [weakCard,null, null, strongCard, null, null, null, null, null]
        const wrapper = shallow(<Game />);  
        const resultsObj =  wrapper.instance().performCaptureOperation(5, 5, 3, true, grid);
        expect(resultsObj.score).toEqual(6);
        expect(grid[0].player).toEqual(true);
    });

    it('performCaptureOperation captures left card that has lower score', () => {
        const grid = [weakCard, strongCard, null, null, null, null, null, null, null]
        const wrapper = shallow(<Game />);  
        const resultsObj =  wrapper.instance().performCaptureOperation(5, 5, 1, true, grid);
        expect(resultsObj.score).toEqual(6);
        expect(grid[0].player).toEqual(true);
    });

    it('performCaptureOperation captures right card that has lower score', () => {
        const grid = [strongCard, weakCard, null, null, null, null, null, null, null]
        const wrapper = shallow(<Game />);  
        const resultsObj =  wrapper.instance().performCaptureOperation(5, 5, 0, true, grid);
        expect(resultsObj.score).toEqual(6);
        expect(grid[1].player).toEqual(true);
    });

    it('performCaptureOperation captures down card that has lower score', () => {
        const grid = [strongCard, null, null, weakCard, null, null, null, null, null]
        const wrapper = shallow(<Game />);  
        const resultsObj =  wrapper.instance().performCaptureOperation(5, 5, 0, true, grid);
        expect(resultsObj.score).toEqual(6);
        expect(grid[3].player).toEqual(true);
    });

    it('performCaptureOperation does not capture neighbour that has a higher stat', () => {
        const grid = [strongCard, weakCard, null, null, null, null, null, null, null]
        const wrapper = shallow(<Game />);  
        const resultsObj =  wrapper.instance().performCaptureOperation(5, 5, 1, true, grid);
        expect(resultsObj.score).toEqual(5);
        expect(grid[0].player).toEqual(true);
    });

    it('performCaptureOperation captures no cards when there are no cards in neighbouring tiles', () => {
        const grid = [strongCard, null, null, null, null, null, null, null, null]
        const wrapper = shallow(<Game />);  
        const resultsObj =  wrapper.instance().performCaptureOperation(5, 5, 0, true, grid);
        expect(resultsObj.score).toEqual(5);
    });


})