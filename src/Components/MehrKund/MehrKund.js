import React from "react";
import styles from './MehrKund.module.scss';
import MehrKundTile from "./MehrKundTile/MehrKundTile";
import leftImage from "../../Images/MehrKund/left.png";
import leftMiddleImage from "../../Images/MehrKund/left_middle.png";
import rightMiddleImage from "../../Images/MehrKund/right_middle.png";
import rightImage from "../../Images/MehrKund/right.png";


const MehrKund = (props) => (
    <section className={styles.mehrKund}>
        <div className={styles.mehrKund__textContainer}>
            <h1 className={styles.mehrKund__h1}>Mehr Kundenabschlüss</h1>
            <h2 className={styles.mehrKund__h2}>Mehr Abschlüsse und Effizienz mit unseren maßgeschneiderten Pipedrive Lösungen.</h2>
        </div>
        <div className={styles.mehrKund__tilesContainer}>
            <MehrKundTile 
                class={styles.mehrKund__tile}
                image={leftImage}
                headText="Mehr Kundenabschlüsse"
                subText="Effizientere Bearbeitung, Kunden individuell Ansprechen, alle relevanten"
            />
            <MehrKundTile 
                class={styles.mehrKund__tile}
                image={leftMiddleImage}
                headText="Vollständige Transparenz"
                subText="Zeit, Leerlauf, Klare Struktur, alle relevanten Informationen zu Leads an einem Ort,"
            />
            <MehrKundTile 
                class={styles.mehrKund__tile}
                image={rightMiddleImage}
                headText="Motivierteres Vertriebsteam"
                subText="Zielsetzung, einfacher Informationsaustausch über Kunden"
            />
            <MehrKundTile 
                class={styles.mehrKund__tile}
                image={rightImage}
                headText="Volle Flexibilität"
                subText="Hält mit deinem Wachstum Schritt, Individualisierte Lösungen"
            />
        </div>
    </section>
);

export default MehrKund;