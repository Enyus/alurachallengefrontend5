import React from 'react';

import styles from '../styles/CardProduto.module.css';

function CardProduto(props) {
    return (
        <div>
            <img
                src={props.imagem}
            />

            <h3>
                {props.nome}
            </h3>

            <p>
                R$ {(props.preco/100).toFixed(2)}
            </p>

            <a>
                Ver produto
            </a>

        </div>
    )
};

export default CardProduto;