import React, { useState } from "react";
import { validateNomeFormContato } from "../utils/validateNomeFormContato";
import { validateTextoFormContato } from "../utils/validateTextoFormContato";

import Botao from "./Botao";
import Link from "next/link";
import { FaSpinner } from "react-icons/fa"

import styles from "../styles/Footer.module.css";

function Footer(props) {
  const [nomeValidated, setNomeValidated] = useState(null);
  const [mensagemValidated, setMensagemValidated] = useState(null);
  const [formValidated, setFormValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState('')

  const handleSubmitMensagem = async (event) => {
    event.preventDefault();
    setLoading(true)

    console.log("mandou uma mensagem");

    const nome = document.getElementById("formcontato-nome").value;
    const texto = document.getElementById("formcontato-texto").value;

    const res = await fetch("/api/cadastrarMensagem", {
        body: JSON.stringify({
          nome: nome,
          message: texto,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
  
      const result = await res.json();
  
      console.log(result);
  
      if (result.error) {
        console.log(result.error);
        return;
      }

    document.getElementById("formcontato-nome").value = ''
    document.getElementById("formcontato-texto").value = ''
    setFormValidated(false);
    setNomeValidated(null);
    setMensagemValidated(null);
    setMensagem('Mensagem enviada com sucesso');
    setLoading(false)
  };

  const handleChangeNome = (event) => {
    setNomeValidated(validateNomeFormContato(event.target.value));
    setFormValidated(false);
    setMensagem('');
  };

  const handleChangeText = (event) => {
    setMensagemValidated(validateTextoFormContato(event.target.value));
    setFormValidated(false);
    setMensagem('');
  };

  const checkValidation = (event) => {
    setMensagem('');
    if (nomeValidated && mensagemValidated) {
      setFormValidated(true);
    } else {
      setFormValidated(false);
    }
  };

  return (
    <footer className={styles.footer__container} onClick={checkValidation}>
      <div className={styles.footer__subcontainer}>
        <Link href="/">
          <a className={styles.footer__logo}>
            <img src="/alurageek_logo_2x.png" />
          </a>
        </Link>

        <ul className={styles.footer__lista}>
          <li>
            <Link href="/faleConosco">
              <a>Mensagens</a>
            </Link>
          </li>

          <li>
            <Link href="">
              <a>Política de privacidade</a>
            </Link>
          </li>

          <li>
            <Link href="">
              <a>Programa fidelidade</a>
            </Link>
          </li>

          <li>
            <Link href="">
              <a>Nossas lojas</a>
            </Link>
          </li>

          <li>
            <Link href="">
              <a>Quero ser franqueado</a>
            </Link>
          </li>

          <li>
            <Link href="">
              <a>Anuncie aqui</a>
            </Link>
          </li>
        </ul>
      </div>

      <form
        className={styles.footer__formcontato}
        onSubmit={handleSubmitMensagem}
      >
        { mensagem }

        <h3 className={styles.form__titulo}>Fale Conosco</h3>

        <label htmlFor="formcontato-nome" className={styles.form__label}>
          Nome
        </label>
        <input
          type="text"
          id="formcontato-nome"
          name="nome"
          className={styles.form__input}
          placeholder="André Lisboa"
          onChange={handleChangeNome}
        />

        {nomeValidated || nomeValidated == null ? (
          ""
        ) : (
          <p className={styles.error}>
            O nome deve conter entre 2 e 40 caracteres.
          </p>
        )}

        <textarea
          name="mensagem"
          id="formcontato-texto"
          className={styles.form__textarea}
          placeholder="Escreva sua mensagem"
          onChange={handleChangeText}
        />

        {mensagemValidated || mensagemValidated == null ? (
          ""
        ) : (
          <p className={styles.error}>
            A mensagem deve conter entre 2 e 120 caracteres.
          </p>
        )}

        <Botao type="submit" onClick={() => {}} disabled={!formValidated}>
          {loading ? <div className="loading"><FaSpinner size={24} /></div> : 'Enviar Mensagem'}
        </Botao>
      </form>
    </footer>
  );
}

export default Footer;