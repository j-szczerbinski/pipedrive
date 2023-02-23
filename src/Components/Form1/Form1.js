import React from "react";
import styles from './Form1.module.scss';
import vectorLeft from '../../Images/Form1/vectorLeft.png';
import vectorRight from '../../Images/Form1/vectorRight.png';

const Form1 = () => (
    <section className={styles.form1}>
        <div className={styles.form1__container}>
            <div className={styles.form1__text}>
                <h1 className={styles.form1__header}>Launch now</h1>
                <p className={styles.form1__paragraph}>Lörem ipsum ade duktiga, så semina dons eurorur. Infraras varad. Deda ultrara anter genuskänslig. Set tenat. Lörem ipsum ade duktiga, så semina dons eurorur. Infraras varad. Deda ultrara anter genuskänslig. Set tenat.</p>
            </div>
            <form className={styles.form1__formContainer}>
                <label className={styles.form1__label}>Lorem ipsum
                    <input placeholder="lorem" className={styles.form1__formItem} type="text" name="lorem" />
                    <input placeholder="lorem" className={styles.form1__formItem} type="text" name="lorem" />
                    <input placeholder="lorem" className={styles.form1__formItem} type="text" name="lorem" />
                    <input placeholder="lorem"className={styles.form1__formItem} type="text" name="lorem" />
                </label>
            </form>
        <img src={vectorLeft} className={styles.form1__vectorLeft} />
        <img src={vectorRight} className={styles.form1__vectorRight} />
        </div>
    </section>
);

export default Form1;