import React from "react";
import styles from './MehrKund.module.scss';
import MehrKundTile from "./MehrKundTile/MehrKundTile";
import MehrKundUpper from "./MehrKundUpper/MehrKundUpper";
import leftImage from "../../Images/MehrKund/left.png";
import leftMiddleImage from "../../Images/MehrKund/left_middle.png";
import rightMiddleImage from "../../Images/MehrKund/right_middle.png";
import rightImage from "../../Images/MehrKund/right.png";


const MehrKund = (props) => (
    <div className={styles.wrapper}>
        <MehrKundUpper />
        <div className={styles.tilesWrapper}>
            <MehrKundTile 
            class={styles.tile}
            image={leftImage}
            headText="Mehr Kundenabschlüsse"
            subText="Effizientere Bearbeitung, Kunden individuell Ansprechen, alle relevanten"
            />
            <MehrKundTile 
            class={styles.tile}
            image={leftMiddleImage}
            headText="Vollständige Transparenz"
            subText="Zeit, Leerlauf, Klare Struktur, alle relevanten Informationen zu Leads an einem Ort,"
            />
            <MehrKundTile 
            class={styles.tile}
            image={rightMiddleImage}
            headText="Motivierteres Vertriebsteam"
            subText="Zielsetzung, einfacher Informationsaustausch über Kunden"
            />
            <MehrKundTile 
            class={styles.tile}
            image={rightImage}
            headText="Volle Flexibilität"
            subText="Hält mit deinem Wachstum Schritt, Individualisierte Lösungen"
            />
        </div>
    </div>
);

export default MehrKund;