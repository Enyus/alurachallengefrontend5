import React from 'react';

import styles from '../styles/Buttons.module.css';

function Botao(props) {

    let estiloBotao

    switch (props.estilo) {
        case 'transparent':
            estiloBotao = styles.botao__transparente;
            break;
        case 'styleless':
            estiloBotao = styles.botao__zero;
            break;
        default:
            estiloBotao = styles.botao__opaco;
    }

    switch(props.largura) {
        case 'fulllargo':
            estiloBotao += ' ' + styles.botao__largo;
            break
        case 'partiallargo':
            estiloBotao += ' ' + styles.botao__parciallargo
        default:
            estiloBotao
    }

    return (
        <button 
            className={estiloBotao}
            type={props.type}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}

export default Botao;