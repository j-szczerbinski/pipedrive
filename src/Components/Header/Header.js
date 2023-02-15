import React from 'react';
import styles from './Header.module.scss';
import NavLink from './NavLink/NavLink';
import Logo from '../Logo/Logo';
import Button from '../Common/Button/Button';

const Header = () => (
    <nav className={styles.wrapper}>
        <Logo />
        <div className={styles.linksWrapper}>
            <NavLink />
        </div>    
        <Button 
            text="Gespräch vereinbaren"
            class={styles.headerBtn}
            onClick={() => alert("pressed the header button")}
        />
    </nav>
);

export default Header;