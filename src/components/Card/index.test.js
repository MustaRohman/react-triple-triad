import React from 'react';
import { shallow } from 'enzyme';
import Card from '.';

describe('Card: ', () => {
    it('renders without crashing', () => {
        shallow(<Card />);
    });

    it('renders props.name', () => {
       const wrapper = shallow(<Card name="Card Name"/>);
       const name = <p className="header">Card Name</p>;
       expect(wrapper.contains(name)).toEqual(true);
    });

    // it('renders props.stats', () => {
    //     const wrapper = shallow(<Card name="Card Name" stats={[1, 2, 3, 4]}/>);
    //     const list = [<div className="stat-item-top">1</div>,
    //     <div className="stat-item">2</div>,
    //     <div className="stat-item">3</div>,
    //     <div className="stat-item-top ">4</div>];
    //     expect(wrapper.contains(list)).toEqual(true);
    //  });
})
