import React from "react";
import styles from './Uber.module.scss';
import leftIcons from '../../Images/Uber/leftIcons.png';
import rightIcons from '../../Images/Uber/rightIcons.png';

const Uber = () => (
    <section className={styles.uber}>
        <div className={styles.uber__container}>
            <div className={styles.uber__leftIcons}>
                <img src={leftIcons} />
            </div>
            <div className={styles.uber__textContainer}>
                <div className={styles.uber__text}>
                    <h1 className={styles.uber__h1}>Über 300+ Integrationen</h1>
                    <p className={styles.uber__p}>Expand the capabilities of Pipedrive with hundreds of apps and integrations</p>
                </div>
            </div>
            <div className={styles.uber__rightIcons}>
                <img src={rightIcons} />
            </div>
        </div>
    </section>
);

export default Uber;