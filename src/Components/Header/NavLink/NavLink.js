import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styles from './NavLink.module.scss';

const NavLink = () => (
    <BrowserRouter>
        <Routes>
            {/* <Route path="/" element={<UnserService />} />
            <Route path="/" element={<Ablauf />} />
            <Route path="/" element={<CaseStudies />} />
            <Route path="/" element={<Pricing />} />
            <Route path="/" element={<FAQs />} /> */}
        </Routes>
        <Link className={styles.link} to="/UnserService">Unser Service</Link>
        <Link className={styles.link} to="/Ablauf">Ablauf</Link>
        <Link className={styles.link} to="/CaseStudies">Case Studies</Link>
        <Link className={styles.link} to="/Pricing">Pricing</Link>
        <Link className={styles.link} to="/FAQs">FAQs</Link>
    </BrowserRouter>
);

export default NavLink;