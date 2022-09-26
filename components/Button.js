import React, { Children } from 'react';

import styles from '../styles/Buttons.module.css';

function Button(props) {

    let estiloBotao

    switch (props.type) {
        case 'transparent':
            estiloBotao = styles.botao__transparente;
            break;
        case 'styleless':
            estiloBotao = styles.botao__zero;
            break;
        default:
            estiloBotao = styles.botao__opaco;
    }

    return (
        <button className={estiloBotao}>
            {props.children}
        </button>
    );
}

export default Button;