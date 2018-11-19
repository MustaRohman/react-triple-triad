import React from "react";

import "./index.css";

export class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <p className="header">Card Title</p>
                <div className="description">
                    <div className="stat-item-top">1</div>
                    <div className="stat-item">1</div>
                    <div className="stat-item">1</div>
                    <div className="stat-item-top ">1</div>
                </div>
                <div className="footer">Fire</div>
            </div>
        )
    }
}