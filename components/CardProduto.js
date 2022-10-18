import React, { useContext, useState } from "react";
import { UserContext } from "../pages/_app";
import { useRouter } from "next/router";

import Link from "next/link";
import { FaPen, FaTrash } from "react-icons/fa";

import styles from "../styles/CardProduto.module.css";

function CardProduto(props) {
  const { user } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);

  const router = useRouter()

  let mostrarOpcoesAdm = "";

  const handleDeletarProduto = async (event) => {
    setShowModal(false)
    console.log("clicou em deletar produto" + props.idProduto);

    const res = await fetch("/api/deletarProduto", {
      body: JSON.stringify({
        id: props.idProduto,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();

    // console.log(result);

    if (result.error) {
      console.log(result.error);
      return;
    }

    router.push('/')
  };

  if (user != "") {
    mostrarOpcoesAdm = (
      <div className={styles.opcoesadm__container}>
        <Link href="#">
          <button className={styles.opcoesadm__botao}>
            <FaPen size={24} color="#FFF" />
          </button>
        </Link>

        <button
          className={styles.opcoesadm__botao}
          onClick={() => {
            setShowModal(true);
          }}
        >
          <FaTrash size={24} color="#FFF" />
        </button>
      </div>
    );
  }

  var formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  return (
    <div className={styles.card__container}>
      {mostrarOpcoesAdm}

      <div>
        <Link href={`/produto/${props.idProduto}`}>
          <img src={props.imagem} className={styles.card__img} />
        </Link>

        <h3 className={styles.card__text}>{props.nome}</h3>

        <p className={styles.card__preco}>
          {formatter.format(props.preco / 100)}
        </p>

        <Link href={`/produto/${props.idProduto}`}>
          <a className={styles.card__link}>Ver produto</a>
        </Link>
      </div>

      {showModal ? (
        <div className={styles.modal__container}>
          <h3 className={styles.modal__titulo}>Cuidado</h3>
          <p>Tem certeza que quer deletar o produto: <span className={styles.modal__produto}>{props.nome}</span>?</p>
          <button className={styles.modal__confirmar} onClick={handleDeletarProduto}>Sim</button>
          <button
            className={styles.modal__cancelar}
            onClick={() => {
              setShowModal(false);
            }}
          >
            Não
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default CardProduto;
