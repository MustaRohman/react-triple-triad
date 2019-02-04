import React from "react";
import PropTypes from "prop-types";

import "./index.css";

function Card(props) {
    // let className = (props.selected ? 'selected' : '') + ' card'
    let className = '';
    if (props.selected) {
        className = props.owner ? 'player1' : 'player2';
    }
    className += ' card';
    return (
        <div className={className}>
            <p className="header">{props.name}</p>
            <div className="description">
                <div className="stat-item-top">{props.stats[0]}</div>
                <div className="stat-item-middle">
                    <p>{props.stats[1]}</p>
                    <p>{props.stats[2]}</p>
                </div>
                {/* <div className="stat-item-middle">{props.stats[2]}</div> */}
                <div className="stat-item-top ">{props.stats[3]}</div>
            </div>
            { props.element ? <div className="footer">props.element</div> : null}
        </div>
    )
}

Card.propTypes = {
    selected: PropTypes.bool,
    owner: PropTypes.bool,
    name: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.number),
    element: PropTypes.string
}

export default Card;

