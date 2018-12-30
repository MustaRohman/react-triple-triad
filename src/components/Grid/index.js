import React from "react";
import PropTypes from "prop-types";

import "./index.css";
import Card from "../Card";

export class Grid extends React.Component {
    static propTypes = {
        tiles: PropTypes.array,
        select: PropTypes.bool
    }

    state = {
        tiles: [
            [
                {
                    name: 'Name',
                    stats: [0, 0, 0, 0]
                },
                {
                    name: 'Name',
                    stats: [0, 0, 0, 0]
                },
                null
            ],
            [
                {
                    name: 'Name',
                    stats: [0, 0, 0, 0]
                },
                {
                    name: 'Name',
                    stats: [0, 0, 0, 0]
                },
                null
            ],
            [
                null, null, null
            ]
        ]
    }
    
    render() {
        const row0 = this.state.tiles[0].map((item, index) => {
            if (item) {
                return (<Card name={item.name} stats={item.stats} key={index}/>)
            } else {
                return (<div className="blank" key={index}></div>)
            }
        })

        const row1 = this.state.tiles[1].map((item, index) => {
            if (item) {
                return (<Card name={item.name} stats={item.stats} key={index} />)
            } else {
                return (<div className="blank" key={index}></div>)
            }
        })

        const row2 = this.state.tiles[2].map((item, index) => {
            if (item) {
                return (<Card name={item.name} stats={item.stats} key={index} />)
            } else {
                return (<div className="blank" key={index}></div>)
            }
        })

        return (
            <div className="grid">
                <div className="row">
                    {row0}
                </div>
                <div className="row">
                    {row1}
                </div>
                <div className="row">
                    {row2}
                </div>
            </div>
        )
    }


}