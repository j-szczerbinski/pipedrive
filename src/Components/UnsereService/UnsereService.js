import React from "react";
import MehrAbs from "../MehrAbs/MehrAbs";
import UnsereImgs from "./UnsereImgs/UnsereImgs";
import UnsereMain from "./UnsereMain/UnsereMain";
import styles from './UnsereService.module.scss';
import vectorLeft from '../../Images/UnsereService/vector_left.png';
import vectorRight from '../../Images/UnsereService/vector_right.png';

const UnsereService = () => (
    <div className={styles.UnsereService}>
        <div className={styles.UnsereService__wrapper}>
            <img className={styles.UnsereService__wrapper__vectorLeft} src={vectorLeft} />
            <img className={styles.UnsereService__wrapper__vectorRight} src={vectorRight} />
            <div className={styles.UnsereService__wrapper__main}>
                <UnsereMain />
                <UnsereImgs />
            </div>
        </div>
    </div>
);

export default UnsereService;