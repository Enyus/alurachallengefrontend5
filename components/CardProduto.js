import React from 'react';

import Link from 'next/link';

import styles from '../styles/CardProduto.module.css';

function CardProduto(props) {
    return (
        <div className={styles.card__container}>
            <img
                src={props.imagem}
                className={styles.card__img}
            />

            <h3 className={styles.card__text}>
                {props.nome}
            </h3>

            <p className={styles.card__preco}>
                R$ {(props.preco/100).toFixed(2)}
            </p>

            <Link href=''>
                <a className={styles.card__link}>
                    Ver produto
                </a>
            </Link>

        </div>
    )
};

export default CardProduto;