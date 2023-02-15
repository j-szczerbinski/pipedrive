import React from "react";
import styles from './MehrAbs.module.scss';
import magnet from '../../Images/MehrAbs/magnet.png';

const MehrAbs = () => (
    <div className={styles.MehrAbs}>
        <div className={styles.MehrAbs__wrapper}>
            <div className={styles.MehrAbs__wrapper__text}>
            Mehr Abschlüsse und <span>Effizienz mit unseren<br/> maßgeschneiderten</span> Pipedrive Lösungen
            </div>
            <div className={styles.MehrAbs__wrapper__image}>
                <img src={magnet} />
            </div>
        </div>
    </div>
);

export default MehrAbs;