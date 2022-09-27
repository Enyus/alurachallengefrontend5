import React from 'react';

import styles from '../styles/Main.module.css';

function Main(props) {
    return (
        <main
            className={styles.main}
        >
            {props.children}
        </main>
    )
}

export default Main;