import React from "react";
import { useRouter } from "next/router";

import Head from "next/head";
import Header from "../../components/Header";
import Main from "../../components/Main";
import ListaProdutos from "../../components/ListaProdutos";
import Footer from "../../components/Footer";
import Dev from "../../components/Dev";

import styles from "../../styles/Produto.module.css";

export default function Produto(props) {
  const router = useRouter();
  const { busca } = router.query;

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
            categoria="" 
            busca={busca}
            label="Resultado da Busca" 
            />
      </Main>

      <Footer />

      <Dev />
    </div>
  );
}
