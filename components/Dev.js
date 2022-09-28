import React from 'react';

import Link from 'next/link';

import styles from '../styles/Dev.module.css';

function Dev(props) {
    return (
        <div className={styles.dev__container}>
            <a className={styles.dev__link} href='https://github.com/Enyus' target='_blank'>Desenvolvido por Cássio S. Santini</a>
            <p className={styles.dev__text}>2022</p>
        </div>
    )
};

export default Dev;