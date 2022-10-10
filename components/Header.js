import React from 'react';

import Botao from './Botao';
import Search from './Search'
import Link from 'next/link';

import styles from '../styles/Header.module.css';

function Header(props) {

    let loginButton = '';

    if (!props.logged) {
        loginButton = (
            <Link href='/login'>
                <Botao
                    estilo='transparent'
                    type='button'
                    onClick={()=>{}}
                >
                    Login
                </Botao>
            </Link>
        )
    }

    if (props.adm) {
        loginButton = (
            <Link href='/produtos'>
                <Botao
                    estilo='transparent'
                    type='button'
                    onClick={()=>{}}
                >
                    Menu administrador
                </Botao>
            </Link>
        )
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