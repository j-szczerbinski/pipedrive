import React from "react";
import Button from "../Common/Button/Button";
import styles from './Referenzen.module.scss';
import arrowLeft from '../../Images/Referenzen/arrowLeft.png';
import slack from '../../Images/Referenzen/slack.png';
import quotationMark from '../../Images/Referenzen/quotationMark.png';
import arrowRight from '../../Images/Referenzen/arrowRight.png';

const Referenzen = () => (
    <section className={styles.referenzen}>
        <div className={styles.referenzen__container}>
            <h1 className={styles.referenzen__headText}>Referenzen</h1>
            <div className={styles.referenzen__innerContainer}>
                <div className={styles.referenzen__arrowLeft}>
                    <img src={arrowLeft} />
                </div>
                <div className={styles.referenzen__image}>
                    <img src={slack} />
                </div>
                <div className={styles.referenzen__quote}>
                    <img src={quotationMark} />
                </div>
                <div className={styles.referenzen__text}>
                    <h1 className={styles.referenzen__h1}>Lorem ipsum dolor sit amet,</h1>
                    <p className={styles.referenzen__p}>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet dolor condimentum, elementum nisi eu, venenatis est. Nam posuere posuere purus, vitae auctor tortor blandit nec.”</p>
                    <Button 
                        class={styles.referenzen__button}
                        text="Zu case study"
                    />
                </div>
                <div className={styles.referenzen__arrowRight}>
                    <img src={arrowRight} />
                </div>
            </div>
        </div>
    </section>
);

export default Referenzen;