import React from 'react';
import styles from './Header.module.scss';
import NavLink from './NavLinks/NavLinks';
import Logo from '../Logo/Logo';
import Button from '../Common/Button/Button';

const Header = () => (
    <nav className={styles.header}>
        <Logo />
        <div className={styles.header__links}>
            <NavLink />
        </div>    
        <Button 
            text="Gespräch vereinbaren"
            class={styles.header__button}
            onClick={() => alert("pressed the header button")}
        />
    </nav>
);

export default Header;