import React from "react";

const AblaufTile = (props) => (
    <div className={props.tileWrapper}>
        <img src={props.image} />
        <div className={props.rightSideDiv}>
            <h1 className={props.numberStyle}>{props.number}</h1>
            <p className={props.textStyle}>{props.text}</p>
            <button className={props.buttonClass}>{props.button}</button>
        </div>    
    </div>
);

export default AblaufTile;