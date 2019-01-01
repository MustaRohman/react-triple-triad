import React from "react";
import PropTypes from "prop-types";

import "./index.css";
import Card from "../Card";

export class Grid extends React.Component {
    static propTypes = {
        tiles: PropTypes.array,
        select: PropTypes.bool
    }

    
    
    render() {
        let split0, split1, split2, row0, row1, row2;
        split0 = this.props.tiles.slice(0, 3);
        split1 = this.props.tiles.slice(3, 6);
        split2 = this.props.tiles.slice(6, 9);

        row0 = split0.map((item, index) => {
            if (item) {
                return (<Card name={item.name} stats={item.stats} key={index}/>)
            } else {
                return (<div className="blank" key={index}></div>)
            }
        })

        row1 = split1.map((item, index) => {
            if (item) {
                return (<Card name={item.name} stats={item.stats} key={index} />)
            } else {
                return (<div className="blank" key={index}></div>)
            }
        })

        row2 = split2.map((item, index) => {
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