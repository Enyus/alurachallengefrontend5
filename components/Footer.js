import React from 'react';

import Button from './Button';
import Link from 'next/link';

import styles from '../styles/Footer.module.css';

function Footer(props) {
    return (
        <footer className={styles.footer__container}>

            <div className={styles.footer__subcontainer}>
                <img src='/alurageek_logo_2x.png' className={styles.footer__logo} />

                <ul className={styles.footer__lista}>

                    <li>
                        <Link href=''>
                            <a>Quem somos nós</a>
                        </Link>
                    </li>

                    <li>
                        <Link href=''>
                            <a>Política de privacidade</a>
                        </Link>
                    </li>

                    <li>
                        <Link href=''>
                            <a>Programa fidelidade</a>
                        </Link>
                    </li>

                    <li>
                        <Link href=''>
                            <a>Nossas lojas</a>
                        </Link>
                    </li>

                    <li>
                        <Link href=''>
                            <a>Quero ser franqueado</a>
                        </Link>
                    </li>

                    <li>
                        <Link href=''>
                            <a>Anuncie aqui</a>
                        </Link>
                    </li>

                </ul>
            </div>

            <form className={styles.footer__formcontato}>

                <h3 className={styles.form__titulo}>Fale Conosco</h3>

                <label htmlFor='formcontato-nome' className={styles.form__label}>Nome</label>
                <input type='text' id='formcontato-nome' name='nome' className={styles.form__input} placeholder='André Lisboa' />

                <textarea name='mensagem' className={styles.form__textarea} placeholder='Escreva sua mensagem' />

                <Button
                    type='submit'
                    onClick={() => { }}
                >
                    Enviar Mensagem
                </Button>
            </form>

        </footer>
    )
}

export default Footer;