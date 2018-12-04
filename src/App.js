import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import Hand from './components/Hand';
import { Board } from './components/Board';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [
        {
          name: 'Card1',
          stats: [1, 2, 3, 4]
        },
        {
          name: 'Card2',
          stats: [1, 2, 3, 4]
        },
        {
          name: 'Card3',
          stats: [1, 2, 3, 4]
        },
        {
          name: 'Card4',
          stats: [1, 2, 3, 4]
        },
        {
          name: 'Card5',
          stats: [1, 2, 3, 4]
        }
      ]
    }
  }
  render() {
    return (
      <Board></Board>
    );
  }
}

export default App;
