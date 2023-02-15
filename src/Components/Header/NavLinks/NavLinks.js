import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styles from './NavLinks.module.scss';

const NavLinks = () => (
    <div className={styles.NavLinks}>
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<UnserService />} />
                <Route path="/" element={<Ablauf />} />
                <Route path="/" element={<CaseStudies />} />
                <Route path="/" element={<Pricing />} />
                <Route path="/" element={<FAQs />} /> */}
            </Routes>
            <Link className={styles.NavLinks__link} to="/UnserService">Unser Service</Link>
            <Link className={styles.NavLinks__link} to="/Ablauf">Ablauf</Link>
            <Link className={styles.NavLinks__link} to="/CaseStudies">Case Studies</Link>
            <Link className={styles.NavLinks__link} to="/Pricing">Pricing</Link>
            <Link className={styles.NavLinks__link} to="/FAQs">FAQs</Link>
        </BrowserRouter>
    </div>
);

export default NavLinks;