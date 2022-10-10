import React from 'react';

import styles from '../styles/Banner.module.css';
import Botao from './Botao';

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

            <Botao>
                Ver Consoles
            </Botao>

        </div>
    );
}

export default Banner;