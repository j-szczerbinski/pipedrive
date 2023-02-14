import React from "react";
import styles from './MehrKund.module.scss';
import MehrKundTile from "./MehrKundTile/MehrKundTile";
import MehrKundUpper from "./MehrKundUpper/MehrKundUpper";

const MehrKund = (props) => (
    <div className={styles.wrapper}>
        <MehrKundUpper />
        <div className={styles.tiles}>
            <MehrKundTile 
            
            />
            <MehrKundTile 
            
            />
            <MehrKundTile 
            
            />
            <MehrKundTile 
            
            />
        </div>
    </div>
);

export default MehrKund;