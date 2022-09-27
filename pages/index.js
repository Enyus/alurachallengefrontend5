import Head from 'next/head'

import styles from '../styles/Home.module.css'

import Header from '../components/Header'
import Banner from '../components/Banner'
import Main from '../components/Main'
import ListaProdutos from '../components/ListaProdutos'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alura Geek</title>
        <meta name="description" content="Alura Challenge Front-end 5" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <Banner />

      <Main>

        <ListaProdutos
          categoria='starwars'
          label='Star Wars'
        />

        <ListaProdutos
          categoria='consoles'
          label='Consoles'
        />

        <ListaProdutos
          categoria='diversos'
          label='Diversos'
        />

      </Main>

      <div>
        FormContato
      </div>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
