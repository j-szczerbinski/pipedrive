import React from "react";
import MehrAbs from "./MehrAbs/MehrAbs";
import UnsereImgs from "./UnsereImgs/UnsereImgs";
import UnsereMain from "./UnsereMain/UnsereMain";
import styles from './UnsereService.module.scss';

const UnsereService = () => (
    <div className={styles.wrapper}>
        <div className={styles.innerWrapper}>
            <UnsereMain />
            <UnsereImgs />
            <MehrAbs />
        </div>
    </div>
);

export default UnsereService;