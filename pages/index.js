import Head from 'next/head'

import styles from '../styles/Home.module.css'

import Header from '../components/Header'
import Banner from '../components/Banner'

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

      <main className={styles.main}>
        <section>StarWars</section>
        <section>Consoles</section>
        <section>Diversos</section>
      </main>

      <div>
        FormContato
      </div>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
