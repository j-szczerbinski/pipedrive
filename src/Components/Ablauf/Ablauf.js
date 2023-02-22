import React from "react";
import styles from './Ablauf.module.scss';
import AblaufTile from "./AblaufTile/AblaufTile";
import image1 from "../../Images/Ablauf/1.png";
import image2 from "../../Images/Ablauf/2.png";
import image3 from "../../Images/Ablauf/3.png";
import image4 from "../../Images/Ablauf/4.png";
import arrow1 from "../../Images/Ablauf/arrow1.png";
import arrow2 from "../../Images/Ablauf/arrow2.png";
import arrow3 from "../../Images/Ablauf/arrow3.png";
import vectorRight from "../../Images/Ablauf/vectorRight.png";
import circlesBottom from "../../Images/Ablauf/circlesBottom.png";

const Ablauf = () => (
    <section className={styles.ablauf}>
        <h1 className={styles.ablauf__header}>Ablauf</h1>
        <div className={styles.ablauf__container}>
            <div className={styles.ablauf__tilesContainer}>
                <AblaufTile 
                    image={image1}
                    tileClass={styles.ablauf__tile}
                    text="Wir laden Sie ein, gemeinsam Pipedrive kennenzulernen"
                    number="1"
                    button="30 Tage testen"
                    sideClass={styles.ablauf__side}
                    textContainer={styles.ablauf__textContainer}
                    numberClass={styles.ablauf__number}
                    textClass={styles.ablauf__text}
                    buttonClass={styles.ablauf__button}
                />
                <AblaufTile 
                    image={image2}
                    tileClass={styles.ablauf__tile}
                    text="Gemeinsam das volle Pipedrive Potenzial entdecken"
                    number="2"
                    button="Gespräch vereinbaren"
                    sideClass={styles.ablauf__side}
                    numberClass={styles.ablauf__number}
                    textClass={styles.ablauf__text}
                    buttonClass={styles.ablauf__button}
                />
                <AblaufTile 
                    image={image3}
                    tileClass={styles.ablauf__tile}
                    text="On-Boarding"
                    number="3"
                    sideClass={styles.ablauf__side}
                    numberClass={styles.ablauf__number}
                    textClass={styles.ablauf__text}
                    buttonClass={styles.ablauf__noButton}
                />
                <AblaufTile 
                    image={image4}
                    tileClass={styles.ablauf__tile}
                    text="Integration und Automatisierung | Mit individuellen Lösungen Pipedrive noch effektiver machen"
                    number="4"
                    sideClass={styles.ablauf__side}
                    numberClass={styles.ablauf__number}
                    textClass={styles.ablauf__text}
                    buttonClass={styles.ablauf__noButton}
                />
            </div>
            <img className={styles.ablauf__arrow1} src={arrow1} />
            <img className={styles.ablauf__arrow2} src={arrow2} />
            <img className={styles.ablauf__arrow3} src={arrow3} />
            <img className={styles.ablauf__vectorRight} src={vectorRight} />
            <img className={styles.ablauf__circlesImg} src={circlesBottom} />
        </div>
    </section>
);

export default Ablauf;