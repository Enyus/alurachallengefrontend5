import React from 'react';
import produtos from '../fakeDB/produtos';

import CardProduto from './CardProduto';

import styles from '../styles/ListaProdutos.module.css';

function ListaProdutos(props) {

    return (
        <section className={styles.lista_containter}>
            <div className={styles.lista__header}>
                <h2>{props.label}</h2>

                <a>Ver tudo</a>
            </div>

            <div className={styles.lista__produtos}>
                {produtos.map(produto => {
                    if (produto.categoria == props.categoria) {
                        return (
                            <CardProduto
                                imagem={produto.imagens[0]}
                                nome={produto.produto}
                                preco={produto.preco}
                            />
                        )
                    }
                })}
            </div>

        </section>
    )
};

export default ListaProdutos;