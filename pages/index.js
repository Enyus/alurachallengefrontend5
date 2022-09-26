import Head from 'next/head'

import styles from '../styles/Home.module.css'

import Header from '../components/Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alura Geek</title>
        <meta name="description" content="Alura Challenge Front-end 5" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <main className={styles.main}>
        
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
