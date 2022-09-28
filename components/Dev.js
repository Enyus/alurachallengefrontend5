import React from 'react';

import Link from 'next/link';

import styles from '../styles/Dev.module.css';

function Dev(props) {
    return (
        <div className={styles.dev__container}>
            <Link href='https://github.com/Enyus' target='_blank'>
                <a className={styles.dev__link}>Desenvolvido por Cássio S. Santini</a>
            </Link>
            <p className={styles.dev__text}>2022</p>
        </div>
    )
};

export default Dev;