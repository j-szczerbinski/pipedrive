import React from "react";
import styles from './MehrKundTile.scss';

const MehrKundTile = (props) => (
    <div 
        className={`${props.class}`}
    >
        {props.image}
        {props.hText}
        {props.text}
    </div>
);

export default MehrKundTile;