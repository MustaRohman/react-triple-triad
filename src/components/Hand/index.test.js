import React from 'react';
import { shallow } from 'enzyme';
import Hand from '.';
import { equal } from 'assert';

const testDeck = [
    {
        name: 'Card1',
        stats: [1, 2, 3, 4],
      },
      {
          name: 'Card2',
          stats: [1, 2, 3, 4],
      },
      {
          name: 'Card3',
          stats: [1, 2, 3, 4]
      },
      {
          name: 'Card4',
          stats: [1, 2, 3, 4],
      },
      {
        name: 'Card5',
        stats: [1, 2, 3, 4]
      }
]

describe('Hand: ', () => {
    it('renders without crashing', () => {
        shallow(<Hand cards={testDeck} />);
    });

    it('renders props.name', () => {
       const wrapper = shallow(<Hand cards={testDeck} />);
       let children = wrapper.children();
       expect(children.length).toEqual(5);
    });
})
