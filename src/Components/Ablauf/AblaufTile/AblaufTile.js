import React from "react";

const AblaufTile = (props) => (
    <div className={props.tileClass}>
        <img className={props.imgClass} src={props.image} />
        <div className={props.sideClass}>
            <div className={props.textContainer}>
                <h1 className={props.numberClass}>{props.number}</h1>
                <p className={props.textClass}>{props.text}</p>
            </div>
            <button className={props.buttonClass}>{props.button}</button>
        </div>    
    </div>
);

export default AblaufTile;