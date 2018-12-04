import React, { Component } from 'react';
import './App.css';
import { Game } from './components/Game';

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
      <Game></Game>
      // <Board></Board>
    );
  }
}

export default App;
