import Head from 'next/head'
import { useState } from 'react'

import Header from '../components/Header'
import Banner from '../components/Banner'
import Main from '../components/Main'
import ListaProdutos from '../components/ListaProdutos'
import Footer from '../components/Footer'
import Dev from '../components/Dev'

import styles from '../styles/Home.module.css'

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Alura Geek</title>
        <meta name="description" content="Alura Challenge Front-end 5" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header 
        logged = {loggedIn}
      />

      <Banner />

      <Main>

        <ListaProdutos
          categoria='starwars'
          label='Star Wars'
          opcoesAdm={false}
        />

        <ListaProdutos
          categoria='consoles'
          label='Consoles'
          opcoesAdm={false}
        />

        <ListaProdutos
          categoria='diversos'
          label='Diversos'
          opcoesAdm={false}
        />

      </Main>

      <Footer />

      <Dev />
      
    </div>
  )
}
