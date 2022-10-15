import React, { useState, useEffect, useContext } from 'react';
import Router from 'next/router';
import { UserContext } from '../pages/_app';

import CardProduto from './CardProduto';
import Link from 'next/link';
import { FaArrowRight, FaSpinner } from 'react-icons/fa'
import Botao from './Botao';

import styles from '../styles/ListaProdutos.module.css';

function ListaProdutos(props) {
    const { user } = useContext(UserContext)
    const [produtos, setProdutos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const res = async () => {
            const data = await fetch("/api/carregarProdutos", {
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

    let botaoRenderizadoLista = ''

    if (props.categoria != '') {
        botaoRenderizadoLista = (
            <Link href='/produtos'>
                <a className={styles.lista__link}>
                    Ver tudo
                    <FaArrowRight />
                </a>
            </Link>
        )
    } 
    
    if (user != '') {
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
    function handleMostrarProdutos() {
        let produtosMostrados
        let categoria = props.categoria

        if (props.busca && props.busca.indexOf('cat:') == 0) {
            categoria = props.busca.slice(4)
        } 

        if (categoria != '') {
            produtosMostrados = produtos.filter(produto => produto.categoria == categoria);

            if (props.filtrar) {
                let indiceFiltrado = produtosMostrados.findIndex(produto => produto.id == props.filtrar);
                produtosMostrados.splice(indiceFiltrado, 1)
            }
        } else if( props.busca) {
            produtosMostrados = produtos.filter(produto => produto.produto.toLowerCase().indexOf(props.busca) != -1)
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

            <div
                className={props.categoria != '' ? styles.lista__produtos : styles.lista__produtos + ' ' + styles.show__all}
            >

                {!isLoading ? handleMostrarProdutos() : <div className='loading'><FaSpinner size={24} /></div>}

            </div>

        </section>
    )
};

export default ListaProdutos;