import React from "react";
import Hand from "../Hand";

export class Board extends React.Component {
    state = {
        selectedIndex: 0,
        cards: [
            {
              name: 'Card1',
              stats: [1, 2, 3, 4],
            },
            {
                name: 'Card2',
                stats: [1, 2, 3, 4],
                selected: true
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

    render() {
        return (
            <div >
                <Hand cards={this.state.cards}></Hand>
            </div>
        )
    }
}