import React from "react";
import Card from "../Card";

import "./index.css";

function Hand(props) {
    let cards = props.cards.map(value => {
        return <Card name={value.name} stats={value.stats}></Card>
    })
    return (
        <div className="hand">
            {cards}
        </div>
    )
}

export default Hand;