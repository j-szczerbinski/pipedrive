import React from 'react';
import styles from './Header.module.scss';
import Button from '../Common/Button/Button';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';

class Header extends React.Component {
    showSettings (event) {
        event.preventDefault();
    }

    render(){
        return(
            <nav className={styles.header}>
                <div className={styles.header__container}>
                    <div className={styles.header__logo}>Pipedrive Masters</div>
                    <div className={styles.header__menu}>
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
                <div className={styles.header__hamburgerContainer}>
                        <Menu 
                            disableOverlayClick
                            isOpen={ false }
                            width={ '100%' } 
                            right 
                            className={styles.header__hamburger}
                            burgerButtonClassName={styles.hamburger__burgerButton}
                            burgerBarClassName={styles.hamburger__burgerBar}
                            crossButtonClassName={styles.hamburger__crossButton}
                            crossClassName={styles.hamburger__cross}
                            itemListClassName={styles.hamburger__itemList}
                        >
                            {/* <BrowserRouter>
                                <Routes>
                                    <Route path="/" element={<UnserService />} />
                                    <Route path="/" element={<Ablauf />} />
                                    <Route path="/" element={<CaseStudies />} />
                                    <Route path="/" element={<Pricing />} />
                                    <Route path="/" element={<FAQs />} />
                                </Routes>
                                <Link className={styles.header__link} to="/UnserService">Unser Service</Link>
                                <Link className={styles.header__link} to="/Ablauf">Ablauf</Link>
                                <Link className={styles.header__link} to="/CaseStudies">Case Studies</Link>
                                <Link className={styles.header__link} to="/Pricing">Pricing</Link>
                                <Link className={styles.header__link} to="/FAQs">FAQs</Link>
                            </BrowserRouter> */}
                            <h1 className={styles.hamburger__logo}>Pipedrive Masters</h1>
                            <a id='unserService' className={styles.hamburger__item} href="/">Unser Service</a>
                            <a id='ablauf' className={styles.hamburger__item} href="/ablauf">Ablauf</a>
                            <a id='caseStudies' className={styles.hamburger__item} href="/case_studies">Case Studies</a>
                            <a id='pricing' className={styles.hamburger__item} href="/pricing">Pricing</a>
                            <a id='faqs' className={styles.hamburger__item} href="/faqs">FAQs</a>
                            <Button 
                                text="Gespräch vereinbaren"
                                class={styles.hamburger__button}
                                onClick={() => alert("pressed the header button")}
                            />
                        </Menu>
                    </div>
            </nav>
        );
    }
}

export default Header;