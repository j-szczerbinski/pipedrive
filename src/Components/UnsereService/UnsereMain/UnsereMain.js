import React from "react";
import styles from './UnsereMain.module.scss';
import Button from "../../Common/Button/Button";

const UnsereMain = () => (
    <div className={styles.UnsereMain}>
        <div>
            <p className={styles.UnsereMain__headText}>On-Boarding, Automation & persönliche Beratung</p><br />
            <p className={styles.UnsereMain__subText}>Mehr Abschlüsse und Effizienz mit unseren maßgeschneiderten Pipedrive Lösungen</p>
            <div className={styles.UnsereMain__button}>
                <Button 
                    text="Gespräch vereinbaren"
                    class={styles.UnsereMain__button__left}
                    onClick={() => alert("pressed the left button")}
                />
                <Button
                    text="30 Tage testen"
                    class={styles.UnsereMain__button__right}
                    onClick={() => alert("pressed the right button")}
                />
            </div>
        </div>
    </div>
);

export default UnsereMain;