import Link from "next/link";
import React from "react";

import styles from "../styles/Banner.module.css";
import Botao from "./Botao";

function Banner(props) {
  return (
    <div className={styles.container}>
      <h2 className={styles.banner__titulo}>Dezembro Promocional</h2>

      <p className={styles.banner__texto}>
        Produtos selecionados com 33% de desconto
      </p>

      <Link href='/busca/cat:consoles'>
        <Botao>Ver Consoles</Botao>
      </Link>
    </div>
  );
}

export default Banner;
