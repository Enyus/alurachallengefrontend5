import React from 'react';
import { useState, useEffect } from 'react';
import Router from 'next/router';

import CardProduto from './CardProduto';
import Link from 'next/link';
import { FaArrowRight, FaSpinner } from 'react-icons/fa'
import Botao from './Botao';

import styles from '../styles/ListaProdutos.module.css';

function ListaProdutos(props) {
    const [produtos, setProdutos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const res = async () => {
            const data = await fetch("/api/carregarProdutos", {
                body: JSON.stringify({
                    categoria: props.categoria
                }),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
            });

            const json = await data.json()

            setProdutos(json.data)
        }

        res()
            .catch(console.error);

        setIsLoading(false);

    }, [])

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
            <Botao
                type='button'
                onClick={handleButtonAddProduto}
            >
                Adicionar Produto
            </Botao>
        )
    }

    if (props.label == 'Produtos Similares') {
        botaoRenderizadoLista = ''
    }

    // Função para filtrar os produtos por categoria, se necessário
    function handleMostraProduto() {
        let produtosMostrados

        if (props.categoria != '') {
            produtosMostrados = produtos.filter(produto => produto.categoria == props.categoria);

            if (props.filtrar) {
                let indiceFiltrado = produtosMostrados.findIndex(produto => produto.id == props.filtrar);
                produtosMostrados.splice(indiceFiltrado, 1)
            }
        } else {
            produtosMostrados = produtos;
        }

        return produtosMostrados.map(produto => {
            return (
                <CardProduto
                    imagem={produto.imagens[0].url}
                    nome={produto.produto}
                    preco={produto.preco}
                    key={produto.id}
                    idProduto={produto.id}
                    opcoesAdm={props.opcoesAdm}
                />

            )
        })
    }

    return (
        <section className={styles.lista_containter}>
            <div className={styles.lista__header}>
                <h2>{props.label}</h2>

                {botaoRenderizadoLista}
            </div>

            <div className={styles.lista__produtos}>
                { !isLoading ? handleMostraProduto() : <div className='loading'><FaSpinner size={24} /></div> }
            </div>

        </section>
    )
};

export default ListaProdutos;