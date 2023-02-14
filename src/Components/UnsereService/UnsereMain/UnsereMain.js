import React from "react";
import styles from './UnsereMain.module.scss';
import Button from "../../Common/Button/Button";

const UnsereMain = () => (
    <div className={styles.wrapper}>
        <div>
            <p className={styles.mainText}>On-Boarding, Automation & persönliche Beratung</p><br />
            <p className={styles.subText}>Mehr Abschlüsse und Effizienz mit unseren maßgeschneiderten Pipedrive Lösungen</p>
            <Button />
            <Button />
        </div>
    </div>
);

export default UnsereMain;