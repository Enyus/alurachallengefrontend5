import React from 'react';
import { useState } from 'react'
import { useRouter } from 'next/router'
import produtos from '../../fakeDB/produtos';

import Head from 'next/head';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Footer from '../../components/Footer';
import Dev from '../../components/Dev';

import styles from '../../styles/Produto.module.css'
import ListaProdutos from '../../components/ListaProdutos';

export default function Produto() {
    let [loggedIn, setLoggedIn] = useState(true);

    const router = useRouter()
    const { id } = router.query

    let produtoDB = produtos.filter(produto => produto.id == id)
    let produtoMostrado
    let produtosSimilares

    //Testando se o produto foi encontrado no Banco de dados
    if (produtoDB.length > 0) {
        // Para o caso de não ter sido encontrado
        produtoMostrado = (
            <section className={styles.produto__container}>

                <img
                    src={produtoDB[0].imagens[1]}
                    className={styles.imagem__produto}
                />

                <div className={styles.produto__subcontainer}>
                    <h2 className={styles.produto__titulo}>
                        {produtoDB[0].produto}
                    </h2>

                    <p className={styles.produto__preco}>
                        R$ {(produtoDB[0].preco / 100).toFixed(2)}
                    </p>

                    <p className={styles.produto__descricao}>
                        {produtoDB[0].descricao}
                    </p>
                </div>
            </section>
        );
        produtosSimilares = (
            <ListaProdutos
                label='Produtos Similares'
                categoria={produtoDB[0].categoria}
                opcoesAdm={false}
                filtrar={produtoDB[0].id}
            />
        )
    } else {
        // Para o caso de ter sido encontrado
        produtoMostrado = (
            <p>O produto procurado não está cadastrado.</p>
        );
        produtosSimilares = ''
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Produtos</title>
                <meta name="description" content="Produtos da Alurageek" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Header
                logged={loggedIn}
            />

            <Main>

                {produtoMostrado}

                {produtosSimilares}

            </Main>

            <Footer />

            <Dev />
        </div>
    )
}