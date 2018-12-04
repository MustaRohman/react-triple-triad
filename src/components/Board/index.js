import React from "react";
import Hand from "../Hand";

export class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 3,
            cards: [
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
                    selected: true
                },
                {
                  name: 'Card5',
                  stats: [1, 2, 3, 4]
                }
              ]
        }
        document.onkeydown = (key) => {
            console.log(key);
            let currentIndex = this.state.selectedIndex;
            let cards = this.state.cards.slice();

            switch(key.keyCode) {
                case 38: {
                    cards[currentIndex].selected = false;
                    currentIndex--;
                    if (currentIndex < 0) {
                        currentIndex = 4;
                    }
                    cards[currentIndex].selected = true;
                    this.setState({
                        cards: cards,
                        selectedIndex: currentIndex
                    });
                    break;
                }
                case 40: {
                    cards[currentIndex].selected = false;
                    currentIndex++;
                    if (currentIndex > 4) {
                        currentIndex = 0;
                    }
                    cards[currentIndex].selected = true;
                    this.setState({
                        cards: cards,
                        selectedIndex: currentIndex
                    });
                    break;
                }
                default: {
                    console.log(key.keyCode);
                }
            }
            
            // if (key.keyCode === 38) {
            //     cards[currentIndex].selected = false;
            //     currentIndex = currentIndex - 1;
            //     if (currentIndex < 0) {
            //         currentIndex = 4;
            //     }
            //     cards[currentIndex].selected = true;
            //     this.setState({
            //         cards: cards,
            //         selectedIndex: currentIndex
            //     });
            //     return
            // }

        }
    }

    render() {
        return (
            <div >
                <Hand cards={this.state.cards}></Hand>
            </div>
        )
    }
}