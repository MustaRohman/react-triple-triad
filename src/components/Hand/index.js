import React from "react";
import Card from "../Card";

function Hand(props) {
    let cards = props.cards.map(value => {
        return <Card name={value.name} stats={value.stats}></Card>
    })
    return (
        <div>
            {cards}
        </div>
    )
}

export default Hand;