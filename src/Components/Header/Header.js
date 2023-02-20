import React from 'react';
import styles from './Header.module.scss';
import Button from '../Common/Button/Button';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Header = () => (
    <nav className={styles.header}>
        <div className={styles.header__container}>
            <div className={styles.header__logo}>Pipedrive Masters</div>
            <div className={styles.header__menu}>
                <div className={styles.header__linksContainer}>
                    <BrowserRouter>
                        <Routes>
                            {/* <Route path="/" element={<UnserService />} />
                            <Route path="/" element={<Ablauf />} />
                            <Route path="/" element={<CaseStudies />} />
                            <Route path="/" element={<Pricing />} />
                            <Route path="/" element={<FAQs />} /> */}
                        </Routes>
                        <Link className={styles.header__link} to="/UnserService">Unser Service</Link>
                        <Link className={styles.header__link} to="/Ablauf">Ablauf</Link>
                        <Link className={styles.header__link} to="/CaseStudies">Case Studies</Link>
                        <Link className={styles.header__link} to="/Pricing">Pricing</Link>
                        <Link className={styles.header__link} to="/FAQs">FAQs</Link>
                    </BrowserRouter>
                </div>
                <Button 
                    text="Gespräch vereinbaren"
                    class={styles.header__button}
                    onClick={() => alert("pressed the header button")}
                />
            </div>    
        </div>
    </nav>
);

export default Header;