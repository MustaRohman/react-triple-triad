import React from "react";
import PropTypes from "prop-types";

import "./index.css";
import Card from "../Card";

export class Grid extends React.Component {
    static propTypes = {
        tiles: PropTypes.array,
        tileMode: PropTypes.bool,
        selectedIndex: PropTypes.number
    }

    
    
    render() {
        let row0 = [], row1 = [], row2 = [];

        this.props.tiles.forEach((item, index) => {
            if (index < 3) {
                
                row0.push(
                    item ? <Card name={item.name} owner={item.player} selected={true} stats={item.stats} key={index}/> 
                    : <div className={index === this.props.selectedIndex && this.props.tileMode ? 'blank-selected' : 'blank'} key={index}></div>
                );
            } else if (index < 6) {
                row1.push(
                    item ? <Card name={item.name} owner={item.player} selected={true} stats={item.stats} key={index}/> 
                    : <div className={index === this.props.selectedIndex && this.props.tileMode  ? 'blank-selected' : 'blank'} key={index}></div>
                );
            } else {
                row2.push(
                    item ? <Card name={item.name} owner={item.player} selected={true} stats={item.stats} key={index}/> 
                    : <div className={index === this.props.selectedIndex && this.props.tileMode ? 'blank-selected' : 'blank'} key={index}></div>
                );
            }
        });       

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