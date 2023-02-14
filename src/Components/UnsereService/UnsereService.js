import React from "react";
import MehrAbs from "../MehrAbs/MehrAbs";
import UnsereImgs from "./UnsereImgs/UnsereImgs";
import UnsereMain from "./UnsereMain/UnsereMain";
import styles from './UnsereService.module.scss';
import vectorLeft from '../../Images/UnsereService/vector_left.png';
import vectorRight from '../../Images/UnsereService/vector_right.png';

const UnsereService = () => (
    <div className={styles.wrapper}>
        <div className={styles.mainWrapper}>
            <img className={styles.vectorLeft} src={vectorLeft} />
            <img className={styles.vectorRight} src={vectorRight} />
            <div className={styles.innerWrapper}>
                <UnsereMain />
                <UnsereImgs />
            </div>
        </div>
    </div>
);

export default UnsereService;