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
            <a href='/' className={styles.logo}>
                <picture>
                    <source
                        srcSet='/alurageek_logo_2x.png'
                        media="(min-width: 769px)"
                    />
                    <img
                        src='/alurageek_logo_1x.png'
                    />
                </picture>
            </a>

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