import React from "react";
import styles from './MehrAbs.module.scss';
import magnet from '../../Images/MehrAbs/magnet.png';

const MehrAbs = () => (
    <section className={styles.mehrAbs}>
        <div className={styles.mehrAbs__container}>
            <div className={styles.mehrAbs__text}>
                Mehr Abschlüsse und <span>Effizienz mit unseren maßgeschneiderten</span> Pipedrive Lösungen
            </div>
            <div className={styles.mehrAbs__imageContainer}>
                <img className={styles.mehrAbs__image} src={magnet} />
            </div>
        </div>
    </section>
);

export default MehrAbs;