import React from 'react';

import { FaSearch } from 'react-icons/fa';
import Botao from './Botao';

import styles from '../styles/Search.module.css';

function Search(props) {

    function handleSubmit(event) {
        event.preventDefault();
        console.log('submit')
    }

    const handleSearchButton = (event) => {
        const input = document.getElementById('searched-text');
        const submitButton = document.getElementById('submit-search')

        if(input.value == '' && input.style.display != 'block') {
            input.classList.toggle('input__mobile');
            return
        }

        if(input.value != ''){
            submitButton.click();
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input
                type='text'
                id='searched-text'
                className={styles.input}
                placeholder='O que deseja encontrar?'
            />

            <Botao
                estilo='styleless'
                type='button'
                onClick={handleSearchButton}
            >
                <div className={styles.botao__busca}>
                    <FaSearch size={24} color='gray' />
                </div>

            </Botao>

            <button type='submit' hidden id='submit-search'/>
        </form>
    )
}

export default Search;