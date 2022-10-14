import React from 'react';
import { useRouter } from 'next/router'
import { supabase } from "../../utils/supaBaseClient";
import produtos from "../../fakeDB/produtos"

import Head from 'next/head';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Footer from '../../components/Footer';
import Dev from '../../components/Dev';

import styles from '../../styles/Produto.module.css'
import ListaProdutos from '../../components/ListaProdutos';

export default function Produto(props) {
    const router = useRouter();
    const { id } = router.query;

    let produtosSimilares = '';

    function handleMostrarProduto() {

        let produtoMostrado

        // console.log(props.data)

        let produtos = props.data.filter( item => item.id == id)

        // console.log(produtos)

        //Testando se o produto foi encontrado no Banco de dados
        if (produtos.length > 0) {
            // Para o caso de ter sido encontrado
            produtosSimilares = (
                <ListaProdutos
                    label='Produtos Similares'
                    categoria={produtos[0].categoria}
                    opcoesAdm={false}
                    filtrar={produtos[0].id}
                />
            )

            return produtoMostrado = (
                <section className={styles.produto__container}>

                    <img
                        src={produtos[0].imagens[1].url}
                        className={styles.imagem__produto}
                    />

                    <div className={styles.produto__subcontainer}>
                        <h2 className={styles.produto__titulo}>
                            {produtos[0].produto}
                        </h2>

                        <p className={styles.produto__preco}>
                            R$ {(produtos[0].preco / 100).toFixed(2)}
                        </p>

                        <p className={styles.produto__descricao}>
                            {produtos[0].descricao}
                        </p>
                    </div>
                </section>
            );
        } else {
            // Para o caso de não ter sido encontrado
            return produtoMostrado = (
                <p>O produto procurado não está cadastrado.</p>
            );
        }

    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Produtos</title>
                <meta name="description" content="Produtos da Alurageek" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Header />

            <Main>

                {handleMostrarProduto()}

                {produtosSimilares}

            </Main>

            <Footer />

            <Dev />
        </div>
    )
}

export async function getServerSideProps() {

    let { data, error } = await supabase
        .from('produtos')
        .select('*, imagens(url)')

    if (error) {
        console.log(error);
        data = produtos;
        return { props: {data} };
    }

    return { props: { data } }
}