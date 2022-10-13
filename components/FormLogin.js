import React, { useState, useContext } from "react";
import { UserContext } from "../pages/_app";
import Router from "next/router";
import { validateEmail } from "../utils/validateEmail";
import { validatePassword } from "../utils/validatePassword";

import Botao from "./Botao";
import { FaSpinner } from "react-icons/fa";

import styles from "../styles/FormLogin.module.css";

export default function FormLogin(props) {
  const [validated, setValidated] = useState(false);
  const [emailValidated, setEmailValidated] = useState(false);
  const [passwordValidated, setPasswordValidated] = useState(false);
  const [databaseValidation, setDatabaseValidation] = useState({ error: "" });
  const [loading, setLoading] = useState(false);
  const [mensagemNovoUsuario, setMensagemNovoUsuario] = useState('');
  const { user, setUser } = useContext(UserContext);

  async function handleSubmitLogin(event) {
    event.preventDefault();

    setLoading(true);

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch("/api/login", {
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();

    console.log(result);

    setLoading(false);

    if (result.error) {
      setDatabaseValidation({ error: result.error });
      return;
    }

    setUser(result.data[0].user);

    Router.push("produtos");
  }

  function handleEmailChange(event) {
    let value = event.target.value;

    setEmailValidated(validateEmail(value));
    setValidated(false);
    setDatabaseValidation({ error: "" });
  }

  function handlePasswordChange(event) {
    let value = event.target.value;

    setPasswordValidated(validatePassword(value));
    setValidated(false);
    setDatabaseValidation({ error: "" });
  }

  function checkValidation(event) {
    if (emailValidated && passwordValidated) {
      setValidated(true);
    }
  }

  async function handleCadastrarUsuario(event) {
    setLoading(true);

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch("/api/cadastrarUsuario", {
      body: JSON.stringify({
        email: email,
        user: "Usuário",
        password: password,
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

    document.getElementById("email").value = '';
    document.getElementById("password").value = '';
    setEmailValidated(false);
    setValidated(false);
    setPasswordValidated(false);
    setDatabaseValidation({ error: "" });
    setMensagemNovoUsuario('Bem vindo à AluraGeek, tente acessar novamente');

    setLoading(false);
  }

  return (
    <form
      onSubmit={handleSubmitLogin}
      onClick={checkValidation}
      className={styles.login__container}
    >
      <h2 className={styles.login__titulo}>Iniciar Sessão</h2>

      {mensagemNovoUsuario != '' ? <p>{mensagemNovoUsuario}</p> : ''}

      <input
        type="email"
        name="email"
        id="email"
        placeholder="Escreva seu e-mail"
        className={
          emailValidated
            ? styles.login__input + " " + styles.input__validated
            : styles.login__input
        }
        onChange={handleEmailChange}
      />

      {emailValidated ? (
        " "
      ) : (
        <p className={styles.erro__input}>
          Digite um endereço de E-mail válido (nome@dominio.com)
        </p>
      )}

      <input
        type="password"
        name="password"
        id="password"
        placeholder="Escreva sua senha"
        className={
          passwordValidated
            ? styles.login__input + " " + styles.input__validated
            : styles.login__input
        }
        onChange={handlePasswordChange}
      />

      {passwordValidated ? (
        " "
      ) : (
        <p className={styles.erro__input}>Digite uma senha de 6 caracteres</p>
      )}

      <Botao
        type="submit"
        onClick={() => {}}
        largura="partiallargo"
        disabled={!validated}
      >
        Entrar
      </Botao>

      {validated ? (
        " "
      ) : (
        <p className={styles.erro__input}>
          Clique aqui para validar o formulário.
        </p>
      )}

      {databaseValidation.error != "" ? (
        <>
          <p className={styles.erro__input}>{databaseValidation.error}</p>
          <div className={styles.modal}>
            <p>
              Gostaria de Cadastrar um usuário com as seguintes credenciais:
            </p>
            <p>E-mail: {document.getElementById("email").value}</p>
            <p>Senha: {document.getElementById("password").value}</p>
            <Botao
              type="button"
              onClick={handleCadastrarUsuario}
              largura="partiallargo"
            >
              Sim
            </Botao>
          </div>
        </>
      ) : (
        ""
      )}

      {loading && (
        <p className="loading">
          <FaSpinner size={24} />
        </p>
      )}
    </form>
  );
}
