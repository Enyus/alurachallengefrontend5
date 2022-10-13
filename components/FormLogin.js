import React from 'react';
import { useState } from 'react'
import Router from 'next/router';
import { validateEmail } from '../utils/validateEmail';
import { validatePassword } from '../utils/validatePassword';

import Botao from './Botao';

import styles from '../styles/FormLogin.module.css';

export default function FormLogin(props) {
    const [validated, setValidated] = useState(false);
    const [emailValidated, setEmailValidated] = useState(false);
    const [passwordValidated, setPasswordValidated] = useState(false);
    const [databaseValidation, setDatabaseValidation] = useState({ error: '' })
    const [loading, setLoading] = useState(false)

    function handleSubmitLogin(event) {
        event.preventDefault();

        console.log('tentou fazer login')

        Router.push('produtos')
    }

    function handleEmailChange(event) {
        let value = event.target.value;

        setEmailValidated(validateEmail(value))
    }

    function handlePasswordChange(event) {
        let value = event.target.value;

        setPasswordValidated(validatePassword(value))
    }

    function checkValidation(event) {
        if (emailValidated && passwordValidated) {
            setValidated(true)
        }
    }

    return (
        <form
            onSubmit={handleSubmitLogin}
            onClick={checkValidation}
            className={styles.login__container}
        >
            <h2 className={styles.login__titulo}>Iniciar Sessão</h2>

            <input
                type='email'
                name='email'
                placeholder='Escreva seu e-mail'
                className={emailValidated ? styles.login__input + ' ' + styles.input__validated : styles.login__input}
                onChange={handleEmailChange}
            />

            {emailValidated ? ' ' : <p className={styles.erro__input}>Digite um endereço de E-mail válido (nome@dominio.com)</p>}

            <input
                type='password'
                name='password'
                placeholder='Escreva sua senha'
                className={passwordValidated ? styles.login__input + ' ' + styles.input__validated : styles.login__input}
                onChange={handlePasswordChange}
            />

            {passwordValidated ? ' ' : <p className={styles.erro__input}>Digite uma senha de 6 caracteres</p>}

            <Botao
                type='submit'
                onClick={() => { }}
                largura='partiallargo'
                disabled={!validated}
            >
                Entrar
            </Botao>

            {validated ? ' ' : <p className={styles.erro__input}>Clique aqui para validar o formulário.</p>}
        </form>
    )
}