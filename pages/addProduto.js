import React from 'react';
import { useState } from 'react'

import Head from 'next/head';
import Header from '../components/Header';
import Main from '../components/Main';
import FormAddProduto from '../components/FormAddProduto';
import Footer from '../components/Footer';
import Dev from '../components/Dev';

import styles from '../styles/Home.module.css';

export default function Produtos() {
    let [loggedIn, setLoggedIn] = useState(true);

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

                <FormAddProduto />

            </Main>

            <Footer />

            <Dev />
        </div>
    )
}