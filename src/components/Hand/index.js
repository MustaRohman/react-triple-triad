import React from "react";
import Card from "../Card";

import "./index.css";

function Hand(props) {
    let cards = props.cards.map((value, index) => {
        if (index === props.cards.length - 5) {
            return <Card name={value.name} stats={value.stats} selected={true}></Card>    
        }
        return <Card name={value.name} stats={value.stats}></Card>
    })
    return (
        <div className="hand">
            {cards}
        </div>
    )
}

export default Hand;