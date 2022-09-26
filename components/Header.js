import React from 'react';

import { FaSearch } from 'react-icons/fa';

import styles from '../styles/Header.module.css';
import Button from './Button';

function Header(props) {
    return (
        <header className={styles.header}>
            <img src='/alurageek_logo_1x.png'/>

            <Button 
                type='transparent'
            >
                Login
            </Button>

            <Button
                type='styleless'
            >
                <FaSearch size={24} />
            </Button>

        </header>
    );
}

export default Header;