import React from 'react';
import styles from './Header.module.scss';
import Link from './Link/Link';
import Logo from '../Logo/Logo';

const Header = () => (
    <nav className={styles.wrapper}>
        <Logo />
        <Link />
        <Link />
        <Link />
        <Link />
        <Link />
    </nav>
);

export default Header;