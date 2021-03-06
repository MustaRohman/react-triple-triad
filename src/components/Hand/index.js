import React from "react";
import Card from "../Card";
import PropTypes from "prop-types";

import "./index.css";

function Hand(props) {
    let cards = props.cards.map((value, index) => {    
        return <Card name={value.name} stats={value.stats} owner={value.player} selected={props.turn && props.selectedIndex === index} key={index}></Card>
    })

    return (
        <div className="hand">
            {cards}
        </div>
    )
}

Hand.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object),
    selectedIndex: PropTypes.number
}

export default Hand;