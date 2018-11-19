import React from "react";

import "./index.css";

export class Card extends React.Component {
    render() {
        return (
            <div class="card">
                <p class="title">Card Title</p>
                <div class="description">
                <p>Description</p>
                <ul>
                    <li>Stat 1 </li>
                    <li>Stat 2</li>
                    <li>Stat 3</li>
                </ul>
                </div>
            </div>
        )
    }
}