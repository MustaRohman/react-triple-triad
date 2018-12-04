import React from "react";
import Hand from "../Hand";

export class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 3,            
        }
    }

    render() {
        return (
            <div >
                <Hand cards={this.props.player1Hand}></Hand>
            </div>
        )
    }
}