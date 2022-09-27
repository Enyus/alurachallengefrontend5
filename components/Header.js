import React from 'react';

import Button from './Button';
import Search from './Search'

import styles from '../styles/Header.module.css';

function Header(props) {

    function handleLogin(event) {
        console.log('login')
    }

    return (
        <header className={styles.header}>
            <picture className={styles.logo}>
                <source 
                    srcSet='/alurageek_logo_2x.png' 
                    media="(min-width: 769px)"
                />
                <img
                    src='/alurageek_logo_1x.png'
                />
            </picture>

            <Button
                estilo='transparent'
                type='button'
                onClick={handleLogin}
            >
                Login
            </Button>

            <Search />

        </header>
    );
}

export default Header;