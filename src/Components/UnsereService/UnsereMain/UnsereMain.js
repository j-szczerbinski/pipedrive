import React from "react";
import styles from './UnsereMain.module.scss';
import Button from "../../Common/Button/Button";

const UnsereMain = (props) => (
    <div className={styles.wrapper}>
        <div>
            <p className={styles.mainText}>On-Boarding, Automation & persönliche Beratung</p><br />
            <p className={styles.subText}>Mehr Abschlüsse und Effizienz mit unseren maßgeschneiderten Pipedrive Lösungen</p>
            <div className={styles.buttonWrapper}>
                <Button 
                    text="Gespräch vereinbaren"
                    class={styles.leftBtn}
                    onClick={() => alert("pressed the left button")}
                />
                <Button
                    text="30 Tage testen"
                    class={styles.rightBtn}
                    onClick={() => alert("pressed the right button")}
                />
            </div>
        </div>
    </div>
);

export default UnsereMain;