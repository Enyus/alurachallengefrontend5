import React from 'react';

import { FaSearch } from 'react-icons/fa';
import Botao from './Botao';

import styles from '../styles/Search.module.css';

function Search(props) {

    function handleSubmit(event) {
        event.preventDefault();
        console.log('submit')
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input
                type='text'
                className={styles.input}
                placeholder='O que deseja encontrar?'
            />

            <Botao
                estilo='styleless'
                type='button'
            >
                <div className={styles.botao__busca}>
                    <FaSearch size={24} color='gray' />
                </div>

            </Botao>
        </form>
    )
}

export default Search;