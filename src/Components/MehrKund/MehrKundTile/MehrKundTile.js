import React from "react";

const MehrKundTile = (props) => {
    const style = {

    }
    
    return(
    <div 
        className={props.class}
    >
        <img src={props.image} />
        <h1>{props.headText}</h1>
        <p>{props.subText}</p>
    </div>
    );
};

export default MehrKundTile;