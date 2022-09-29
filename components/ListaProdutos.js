import React from 'react';
import { useState, useEffect } from 'react';
import produtos from '../fakeDB/produtos';

import CardProduto from './CardProduto';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa'

import styles from '../styles/ListaProdutos.module.css';

function ListaProdutos(props) {

    function useWindowSize() {
        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined,
        });

        useEffect(() => {
            if (typeof window !== 'undefined') {
                function handleResize() {
                    setWindowSize({
                        width: window.innerWidth,
                        height: window.innerHeight,
                    });
                }

                window.addEventListener("resize", handleResize);

                handleResize();

                return () => window.removeEventListener("resize", handleResize);
            }
        }, []);
        return windowSize;
    }

    let deviceWidth
    let maxItens

    deviceWidth = useWindowSize().width;

    if (deviceWidth < 1024) {
        maxItens = 4;
    } else {
        maxItens = 6;
    }

    let produtosMostrados = produtos.filter(produto => produto.categoria == props.categoria);

    while (produtosMostrados.length > maxItens) {
        produtosMostrados.pop();
    }


    return (
        <section className={styles.lista_containter}>
            <div className={styles.lista__header}>
                <h2>{props.label}</h2>

                <Link href=''>
                    <a className={styles.lista__link}>
                        Ver tudo
                        <FaArrowRight />
                    </a>
                </Link>
            </div>

            <div className={styles.lista__produtos}>
                {
                    produtosMostrados.map(produto => {
                        return (
                            <CardProduto
                                imagem={produto.imagens[0]}
                                nome={produto.produto}
                                preco={produto.preco}
                                key={produto.id}
                            />
                        )
                    })
                }
            </div>

        </section>
    )
};

export default ListaProdutos;