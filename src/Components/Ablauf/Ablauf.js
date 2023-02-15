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
    <div className={styles.wrapper}>
        <h1 className={styles.header}>Ablauf</h1>
        <div className={styles.tilesWrapper}>
            <img className={styles.vectorRight} src={vectorRight} />
            <AblaufTile 
                image={image1}
                tileWrapper={styles.tile1}
                text="Wir laden Sie ein, gemeinsam Pipedrive kennenzulernen"
                number="1"
                button="30 Tage testen"
                rightSideDiv={styles.rightSide1}
                numberStyle={styles.number}
                textStyle={styles.text}
                buttonClass={styles.button}
            />
            <img className={styles.arrow1} src={arrow1} />
            <AblaufTile 
                image={image2}
                tileWrapper={styles.tile2}
                text="Gemeinsam das volle Pipedrive Potenzial entdecken"
                number="2"
                button="Gespräch vereinbaren"
                rightSideDiv={styles.rightSide1}
                numberStyle={styles.number}
                textStyle={styles.text}
                buttonClass={styles.button}
            />
            <img className={styles.arrow2} src={arrow2} />
            <AblaufTile 
                image={image3}
                tileWrapper={styles.tile3}
                text="On-Boarding"
                number="3"
                rightSideDiv={styles.rightSide1}
                numberStyle={styles.number}
                textStyle={styles.text}
                buttonClass={styles.noButton}
            />
            <img className={styles.arrow3} src={arrow3} />
            <AblaufTile 
                image={image4}
                tileWrapper={styles.tile4}
                text="Integration und Automatisierung | Mit individuellen Lösungen Pipedrive noch effektiver machen"
                number="4"
                rightSideDiv={styles.rightSide1}
                numberStyle={styles.number}
                textStyle={styles.text}
                buttonClass={styles.noButton}
            />
            <img className={styles.circlesBottom} src={circlesBottom} />
        </div>
    </div>
);

export default Ablauf;