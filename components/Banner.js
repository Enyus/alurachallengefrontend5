import React from 'react';

import styles from '../styles/Banner.module.css';
import Button from './Button';

function Banner(props) {

    return (
        <div className={styles.container}>
            
            <h2
                className={styles.banner__titulo}
            >
                Dezembro Promocional
            </h2>

            <p
                className={styles.banner__texto}
            >
                Produtos selecionados com 33% de desconto
            </p>

            <Button>
                Ver Consoles
            </Button>

        </div>
    );
}

export default Banner;