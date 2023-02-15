import React from "react";
import styles from './UnsereImgs.module.scss';
import right from '../../../Images/UnsereService/right.png';
import middle from '../../../Images/UnsereService/middle.png';
import left from '../../../Images/UnsereService/left.png';

const UnsereImgs = () => (
    <div className={styles.UnsereImgs}>
        <div className={styles.UnsereImgs__3}> 
             <img src={right} />
        </div>
        <div className={styles.UnsereImgs__2}> 
             <img src={left} />
        </div>
        <div className={styles.UnsereImgs__1}> 
             <img src={middle} />
        </div>
    </div>
);

export default UnsereImgs;