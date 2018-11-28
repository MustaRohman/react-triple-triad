import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import Hand from './components/Hand';

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
      <div className="App">
      <Hand cards={this.state.cards}></Hand>
        {/* <Card name="Card Name" stats={[1, 2, 3, 4]}/> */}
      </div>
    );
  }
}

export default App;
