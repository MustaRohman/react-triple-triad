import React from "react";
import Card from "../Card";

import "./index.css";

function Hand(props) {
    let cards = props.cards.map((value, index) => {    
        return <Card name={value.name} stats={value.stats} selected={props.turn && props.selectedIndex === index} key={index}></Card>
    })

    return (
        <div className="hand">
            {cards}
        </div>
    )
}

export default Hand;