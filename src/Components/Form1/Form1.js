import React from "react";
import styles from './Form1.module.scss';

const Form1 = () => (
    <section className={styles.form1}>
        <div className={styles.form1__container}>
            <div className={styles.form1__text}>
                <h1 className={styles.form1__header}>Launch now</h1>
                <p className={styles.form1__paragraph}>Lörem ipsum ade duktiga, så semina dons eurorur. Infraras varad. Deda ultrara anter genuskänslig. Set tenat. Lörem ipsum ade duktiga, så semina dons eurorur. Infraras varad. Deda ultrara anter genuskänslig. Set tenat.</p>
            </div>
            <div className={styles.form1__formContainer}>
                <form>
                    <label className={styles.form1__label}>Lorem ipsum
                        <input className={styles.form1__formItem} type="text" name="lorem" />
                        <input className={styles.form1__formItem} type="text" name="lorem" />
                        <input className={styles.form1__formItem} type="text" name="lorem" />
                        <input className={styles.form1__formItem} type="text" name="lorem" />
                    </label>
                </form>
            </div>
        </div>
    </section>
);

export default Form1;