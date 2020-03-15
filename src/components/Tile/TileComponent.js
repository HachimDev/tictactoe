import React from 'react';
import './TileStyle.css';

function Tile(props){
    return (
    <button className="tileStyle" onClick={props.onClick} >{props.value}</button>
    )
}

export default Tile;