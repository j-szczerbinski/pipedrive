import React from 'react';
import styles from './Header.module.scss';
import NavLink from './NavLink/NavLink';
import Logo from '../Logo/Logo';
import Button from './Button/Button';

const Header = () => (
    <nav className={styles.wrapper}>
        <Logo />
        <NavLink />
        <Button />
    </nav>
);

export default Header;