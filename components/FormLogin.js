import React from 'react';
import Router from 'next/router';

import styles from '../styles/FormLogin.module.css';
import Button from './Button';

export default function Login(props) {

    function handleSubmitLogin(event) {
        event.preventDefault();
        
        console.log('tentou fazer login')
        
        Router.push('produtos')
    }

    return(
        <form 
            onSubmit={handleSubmitLogin}
            className={styles.login__container}
        >
            <h2 className={styles.login__titulo}>Iniciar Sessão</h2>

            <input type='email' name='email' placeholder='Escreva seu e-mail' className={styles.login__input} />

            <input type='password' name='password' placeholder='Escreva sua senha' className={styles.login__input} />

            <Button 
                type='submit'
                onClick={()=>{}}
                largura='partiallargo'
            >
                Entrar
            </Button>

        </form>
    )
}