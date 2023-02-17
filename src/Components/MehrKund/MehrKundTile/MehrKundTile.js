import React from "react";

const MehrKundTile = (props) => {
    const style = {

    }
    
    return(
    <div 
        className={props.class}
    >
        <img className={props.imgStyle} src={props.image} />
        <h1 className={props.hStyle}>{props.headText}</h1>
        <p className={props.sStyle}>{props.subText}</p>
    </div>
    );
};

export default MehrKundTile;