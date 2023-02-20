import React from "react";
import styles from './UnsereService.module.scss';
import middle from '../../Images/UnsereService/middle.png';
import left from '../../Images/UnsereService/left.png';
import right from '../../Images/UnsereService/right.png';
import vectorLeft from '../../Images/UnsereService/vector_left.png';
import vectorRight from '../../Images/UnsereService/vector_right.png';
import Button from '../Common/Button/Button';

const UnsereService = () => (
    <section className={styles.unsereService}>
            <div className={styles.unsereService__container}>
                <h1 className={styles.unsereService__h1}>On-Boarding, Automation & persönliche Beratung</h1>
                <h2 className={styles.unsereService__h2}>Mehr Abschlüsse und Effizienz mit unseren maßgeschneiderten Pipedrive Lösungen</h2>
                <div className={styles.unsereService__buttonsContainer}>
                    <Button 
                        text="Gespräch vereinbaren"
                        class={styles.unsereService__leftButton}
                        onClick={() => alert("pressed the left button")}
                    />
                    <Button
                        text="30 Tage testen"
                        class={styles.unsereService__rightButton}
                        onClick={() => alert("pressed the right button")}
                    />
                </div>
            </div>
            <img className={styles.unsereService__middleImg} src={middle} />
            <img className={styles.unsereService__leftImg} src={left} />
            <img className={styles.unsereService__rightImg} src={right} />
            <img className={styles.unsereService__vectorLeft} src={vectorLeft} />
            <img className={styles.unsereService__vectorRight} src={vectorRight} />
    </section>
);

export default UnsereService;