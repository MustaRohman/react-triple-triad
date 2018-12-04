import React from "react";

import "./index.css";

function Card(props) {
    let className = 'card ' + (props.selected ? 'selected' : '');
    return (
        <div className={className}>
            <p className="header">{props.name}</p>
            <div className="description">
                <div className="stat-item-top">{props.stats[0]}</div>
                <div className="stat-item">{props.stats[1]}</div>
                <div className="stat-item">{props.stats[2]}</div>
                <div className="stat-item-top ">{props.stats[3]}</div>
            </div>
            <div className="footer">Fire</div>
        </div>
    )
}

export default Card;

