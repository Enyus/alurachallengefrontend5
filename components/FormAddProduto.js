import React from 'react';
import Router from 'next/router';

import Botao from './Botao';

import styles from '../styles/FormAddProduto.module.css';

export default function FormAddProduto(props) {

    function handleSubmitProduto(event) {
        event.preventDefault();

        console.log('Clicou em adicionar produto')

        Router.push('produtos')
    }

    return (
        <form
            onSubmit={handleSubmitProduto}
            className={styles.form__container}
        >

            <h2 className={styles.form__titulo}>Adicionar novo produto</h2>

            <label htmlFor='urlimagem' className={styles.form__label}>URL da imagem</label>
            <input type='text' name='urlimagem' id='urlimagem' className={styles.form__input} />

            <label htmlFor='categoria' className={styles.form__label}>Categoria</label>
            <input type='text' name='categoria' id='categoria' className={styles.form__input} placeholder='Consoles' />

            <label htmlFor='nome-produto' className={styles.form__label}>Nome do produto</label>
            <input type='text' name='nome-produto' id='nome-produto' className={styles.form__input} placeholder='Produto XYZ' />

            <label htmlFor='preco' className={styles.form__label}>Preço do produto</label>
            <input type='text' name='preco' id='preco' className={styles.form__input} placeholder='R$ 60,00' />

            <textarea className={styles.form__descricao} name='descricao' id='descricao' placeholder='Descricao do produto' />

            <Botao
                type='submit'
                onClick={() => { }}
                largura='fulllargo'
            >
                Adicionar Produto
            </Botao>

        </form>
    )
}