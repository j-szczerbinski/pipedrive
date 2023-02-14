import React from "react";
import styles from './MehrAbs.module.scss';
import magnet from '../../Images/MehrAbs/magnet.png';

const MehrAbs = () => (
    <div className={styles.wrapper}>
        <div className={styles.innerWrapper}>
            <div className={styles.text}>
            Mehr Abschlüsse und <span>Effizienz mit unseren<br/> maßgeschneiderten</span> Pipedrive Lösungen
            </div>
            <div className={styles.image}>
                <img src={magnet} />
            </div>
        </div>
    </div>
);

export default MehrAbs;