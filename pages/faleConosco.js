import React from "react";
import { supabase } from "../utils/supaBaseClient";

import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Dev from "../components/Dev";

import styles from "../styles/FaleConosco.module.css";

export default function FaleConosco(props) {
  const mensagens = props.data;

  return (
    <div className={styles.container}>
      <Head>
        <title>Mensagens</title>
        <meta
          name="description"
          content="Mensagens do Fale Conosco da Alurageek"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <Main>
        {mensagens.map((mensagem) => {
          return (
            <article key={mensagem.id} className={styles.message__container}>
              <p><b>Mensagem de:</b> {mensagem.nome}</p>
              <p><b>Mensagem:</b> {mensagem.message}</p>
            </article>
          );
        })}
      </Main>

      <Footer />

      <Dev />
    </div>
  );
}

export async function getServerSideProps() {
  let { data, error } = await supabase.from("mensagens").select("*");

  if (error) {
    console.log(error);
  }

  return { props: { data } };
}
