import React from 'react';

import Button from './Button';
import Search from './Search'
import Link from 'next/link';

import styles from '../styles/Header.module.css';

function Header(props) {

    let loginButton = '';

    if (!props.logged) {
        loginButton = (
            <Link href='/login'>
                <Button
                    estilo='transparent'
                    type='button'
                    onClick={handleLogin}
                >
                    Login
                </Button>
            </Link>
        )
    }

    function handleLogin(event) {
        console.log('login')
    }

    return (
        <header className={styles.header}>
            <Link href='/'>
                <a className={styles.logo}>
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
            </Link>

            {loginButton}

            <Search />

        </header>
    );
}

export default Header;