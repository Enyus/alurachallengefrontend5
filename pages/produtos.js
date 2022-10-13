import React from 'react';

import Head from 'next/head';
import Header from '../components/Header';
import Main from '../components/Main';
import ListaProdutos from '../components/ListaProdutos';
import Footer from '../components/Footer';
import Dev from '../components/Dev';

import styles from '../styles/Home.module.css';

export default function Produtos() {

    return (
        <div className={styles.container}>
            <Head>
                <title>Produtos</title>
                <meta name="description" content="Produtos da Alurageek" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Header />

            <Main>

                <ListaProdutos
                    categoria=''
                    label='Todos os produtos'
                />

            </Main>

            <Footer />

            <Dev />
        </div>
    )
}