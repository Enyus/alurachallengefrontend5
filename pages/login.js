import React from 'react';
import { useState } from 'react'

import Head from 'next/head';
import Header from '../components/Header';
import Main from '../components/Main';
import FormLogin from '../components/FormLogin';
import Footer from '../components/Footer';
import Dev from '../components/Dev';

import styles from '../styles/Home.module.css';

export default function Login() {
    let [loggedIn, setLoggedIn] = useState(true);

    return (
        <div className={styles.container}>
            <Head>
                <title>Login</title>
                <meta name="description" content="Login na Alurageek" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Header
                logged={loggedIn}
            />

            <Main>

                <FormLogin />

            </Main>

            <Footer />

            <Dev />
        </div>
    )
}