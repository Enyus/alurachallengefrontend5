import React from 'react';
import { useState, useEffect } from 'react';
import produtos from '../fakeDB/produtos';
import Router from 'next/router';

import CardProduto from './CardProduto';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa'
import Button from './Button';

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
    let deviceWidth = useWindowSize().width;

    // Quais produtos serão mostrados:
    let produtosMostrados

    if (props.categoria != '') {

        let maxItens

        if (deviceWidth < 1024) {
            maxItens = 4;
        } else {
            maxItens = 6;
        }

        produtosMostrados = produtos.filter(produto => produto.categoria == props.categoria);

        while (produtosMostrados.length > maxItens) {
            produtosMostrados.pop();
        }

    } else {

        produtosMostrados = produtos;

    }

    // Qual botão será renderizado:
    function handleButtonAddProduto() {
        console.log('clicou em Adicionar Produto');

        Router.push('addProduto')
    }

    let botaoRenderizadoLista

    if (props.categoria != '') {
        botaoRenderizadoLista = (
            <Link href='/produtos'>
                <a className={styles.lista__link}>
                    Ver tudo
                    <FaArrowRight />
                </a>
            </Link>
        )
    } else {
        botaoRenderizadoLista = (
            <Button
                type='button'
                onClick={handleButtonAddProduto}
            >
                Adicionar Produto
            </Button>
        )
    }

    return (
        <section className={styles.lista_containter}>
            <div className={styles.lista__header}>
                <h2>{props.label}</h2>

                {botaoRenderizadoLista}
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