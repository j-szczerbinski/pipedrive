import React from "react";
import styles from './Buche.module.scss';
import Button from '../Common/Button/Button';


const Buche = () => (
    <section className={styles.buche}>
        <div className={styles.buche__container}>
            <div className={styles.buche__innerContainer}>
                <div className={styles.buche__textContainer}>
                    <h1 className={styles.buche__h1}>Buche dein Kennenlerngespräch</h1>
                    <h2 className={styles.buche__h2}>Du möchtest Pipedrive Hands on erleben? Allgemeine<br/> Fragen zu deiner CRM Software besprechen? Oder mit uns deine Optimierungsstrategie umsetzen?</h2>
                    <ul className={styles.buche__list}>
                        <li className={styles.buche__listItem}>Unsere Zertifizierten Pipedrive Master stehen dir zur Seite</li>
                        <li className={styles.buche__listItem}>Unsere Zertifizierten Pipedrive Master stehen dir zur Seite</li>
                        <li className={styles.buche__listItem}>Unsere Zertifizierten Pipedrive Master stehen dir zur Seite</li>
                    </ul>
                </div>
                <div className={styles.buche__buttonContainer}>
                    <Button 
                        class={styles.buche__buttonLeft}
                        text="Gespräch vereinbaren"
                    />
                    <Button 
                        class={styles.buche__buttonRight}
                        text="30 Tage testen"
                    />
                </div>
            </div>
        </div>
    </section>
);

export default Buche;