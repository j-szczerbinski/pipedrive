import React from 'react';
import styles from './Header.module.scss';
import NavLink from './NavLink/NavLink';
import Logo from '../Logo/Logo';

const Header = () => (
    <nav className={styles.wrapper}>
        <Logo />
        <NavLink />
        <NavLink />
        <NavLink />
        <navLink />
        <NavLink />
    </nav>
);

export default Header;