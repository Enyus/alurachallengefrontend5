import React, { useContext } from "react";
import { UserContext } from "../pages/_app";

import Link from "next/link";
import { FaPen, FaTrash } from "react-icons/fa";

import styles from "../styles/CardProduto.module.css";

function CardProduto(props) {
  const { user } = useContext(UserContext);

  let mostrarOpcoesAdm = "";

  if (user != "") {
    mostrarOpcoesAdm = (
      <div className={styles.opcoesadm__container}>
        <Link href="#">
          <button className={styles.opcoesadm__botao}>
            <FaPen size={24} color="#FFF" />
          </button>
        </Link>

        <Link href="#">
          <button className={styles.opcoesadm__botao}>
            <FaTrash size={24} color="#FFF" />
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.card__container}>
      {mostrarOpcoesAdm}

      <div>
        <Link href={`/produto/${props.idProduto}`}>
          <img src={props.imagem} className={styles.card__img} />
        </Link>

        <h3 className={styles.card__text}>{props.nome}</h3>

        <p className={styles.card__preco}>
          R$ {(props.preco / 100).toFixed(2)}
        </p>

        <Link href={`/produto/${props.idProduto}`}>
          <a className={styles.card__link}>Ver produto</a>
        </Link>
      </div>
    </div>
  );
}

export default CardProduto;
