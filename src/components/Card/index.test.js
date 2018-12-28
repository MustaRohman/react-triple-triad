import React from 'react';
import { shallow } from 'enzyme';
import Card from '.';

describe('Card: ', () => {
    const stats = [0, 1, 2, 3];
    it('renders without crashing', () => {
        shallow(<Card stats={stats} name="Card Name" />);
    });

    it('renders props.name', () => {
       const wrapper = shallow(<Card stats={stats} name="Card Name"/>);
       const name = <p className="header">Card Name</p>;
       expect(wrapper.contains(name)).toEqual(true);
    });
})
