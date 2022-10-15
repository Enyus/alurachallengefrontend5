import React, { useState } from "react";
import Router from "next/router";

import Botao from "./Botao";
import { FaSpinner } from "react-icons/fa";

import styles from "../styles/FormAddProduto.module.css";
import { validateProduto } from "../utils/validateProduto";
import { validateDescricao } from "../utils/validateProduto copy";

export default function FormAddProduto(props) {
  const [loading, setLoading] = useState(false);
  const [checkingImage, setCheckingImage] = useState(false);
  const [urlValidated, setUrlValidated] = useState(null);
  const [categoriaValidated, setCategoriaValidated] = useState(null);
  const [produtoValidated, setProdutoValidated] = useState(null);
  const [precoValidated, setPrecoValidated] = useState(null);
  const [descricaoValidated, setDescricaoValidated] = useState(null);
  const [formValidated, setFormValidated] = useState(false);

  async function handleSubmitProduto(event) {
    event.preventDefault();
    setLoading(true);

    const urlImagem = document.getElementById("urlimagem").value;
    const categoria = document.getElementById("categoria").value;
    const produto = document.getElementById("nome-produto").value;
    const preco = document
      .getElementById("preco")
      .value.replace("R$", "")
      .replace(",", "")
      .replace(".", "")
      .replace(/\s/g, "");
    const descricao = document.getElementById("descricao").value;

    // console.log(urlImagem);
    // console.log(categoria);
    // console.log(produto);
    // console.log(preco);
    // console.log(descricao);

    // Enviando para o Banco de Dados:
    const res = await fetch("/api/cadastrarProduto", {
      body: JSON.stringify({
        urlImagem,
        categoria,
        produto,
        preco,
        descricao,
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

    setLoading(false);
    Router.push("produtos");
  }

  const checkImage = (event) => {
    if (document.getElementById("urlimagem").value != "") {
      setCheckingImage(true);
    } else {
      setCheckingImage(false);
      setUrlValidated(false);
    }
  };

  const validarCategoria = (event) => {
    if (document.getElementById("categoria").value != "") {
      setCategoriaValidated(true);
    } else {
      setCategoriaValidated(false);
    }
  };

  const checkProdutoValidation = (event) => {
    if (event.target.value != "") {
      setProdutoValidated(validateProduto(event.target.value));
    } else {
      setProdutoValidated(null);
    }
  };

  const checkDescricaoValidation = (event) => {
    if (event.target.value != "") {
      setDescricaoValidated(validateDescricao(event.target.value));
    } else {
      setDescricaoValidated(null);
    }
  };

  var formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  const formatPreco = (event) => {
    const key = event.key;
    let value = event.target.value.replace(",", ".");
    if (isNaN(value)) {
      setPrecoValidated(false);
      return;
    }
    if (value != "") {
      event.target.value = formatter.format(
        parseFloat(value)
      );
    } else {
      setPrecoValidated(null);
      return;
    }
    setPrecoValidated(true);
  };

  const checkFormValidation = (event) => {
    if (
      urlValidated &&
      categoriaValidated &&
      produtoValidated &&
      precoValidated &&
      descricaoValidated
    ) {
      setFormValidated(true);
    } else {
      setFormValidated(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmitProduto}
      className={styles.form__container}
      onClick={checkFormValidation}
    >
      <h2 className={styles.form__titulo}>Adicionar novo produto</h2>

      <label
        htmlFor="urlimagem"
        className={
          urlValidated && urlValidated != null
            ? styles.form__label + " " + styles.checked
            : styles.form__label
        }
      >
        URL da imagem
      </label>
      <input
        type="text"
        name="urlimagem"
        id="urlimagem"
        className={styles.form__input}
        onBlur={checkImage}
      />
      {checkingImage ? (
        <>
          <img
            src={document.getElementById("urlimagem").value}
            alt="preview de imagem. Se esta mensagem estiver aparecendo, a imagem não foi encontrada"
            className={styles.imagem__checada}
          />
          <p>Esta é a imagem que você gostaria de carregar?</p>
          <Botao
            type="button"
            onClick={() => {
              setUrlValidated(true);
              setCheckingImage(false);
            }}
            largura="fulllargo"
          >
            Sim
          </Botao>
          <Botao
            type="button"
            onClick={() => {
              setUrlValidated(false);
              setCheckingImage(false);
              document.getElementById("urlimagem").value = "";
            }}
            largura="fulllargo"
            estilo="vermelho"
          >
            Não
          </Botao>
        </>
      ) : (
        ""
      )}

      <label
        htmlFor="categoria"
        className={
          categoriaValidated
            ? styles.form__label + " " + styles.checked
            : styles.form__label
        }
      >
        Categoria
      </label>
      <select
        type="text"
        name="categoria"
        id="categoria"
        className={styles.form__input}
        placeholder="Consoles"
        onBlur={validarCategoria}
      >
        <option selected disabled value="">
          Escolha uma categoria
        </option>
        <option value="starwars"> Star Wars </option>
        <option value="consoles"> Consoles </option>
        <option value="diversos"> Diversos </option>
      </select>

      <label
        htmlFor="nome-produto"
        className={
          produtoValidated
            ? styles.form__label + " " + styles.checked
            : styles.form__label
        }
      >
        Nome do produto
      </label>
      <input
        type="text"
        name="nome-produto"
        id="nome-produto"
        className={styles.form__input}
        placeholder="Produto XYZ"
        onChange={checkProdutoValidation}
      />
      {produtoValidated || produtoValidated == null ? (
        ""
      ) : (
        <p className={styles.erro}>
          O nome do produto deve ter entre 2 e 20 caracteres
        </p>
      )}

      <label
        htmlFor="preco"
        className={
          precoValidated
            ? styles.form__label + " " + styles.checked
            : styles.form__label
        }
      >
        Preço do produto
      </label>
      <input
        type="text"
        name="preco"
        id="preco"
        className={styles.form__input}
        placeholder="R$ 60,00"
        onBlur={formatPreco}
        onClick={(e) => (e.target.value = "")}
      />
      {precoValidated || precoValidated == null ? (
        ""
      ) : (
        <p className={styles.erro}>Digite um número para o preço do produto.</p>
      )}

      <textarea
        className={styles.form__descricao}
        name="descricao"
        id="descricao"
        placeholder="Descricao do produto"
        onChange={checkDescricaoValidation}
      />
      {descricaoValidated || descricaoValidated == null ? (
        ""
      ) : (
        <p className={styles.erro}>
          A descrição do produto deve ter entre 2 e 150 caracteres
        </p>
      )}

      <Botao
        type="submit"
        onClick={() => {}}
        largura="fulllargo"
        disabled={!formValidated}
      >
        {loading ? (
          <div className="loading">
            <FaSpinner size={24} />
          </div>
        ) : (
          "Adicionar Produto"
        )}
      </Botao>

      {formValidated ? (
        ""
      ) : (
        <p className={styles.erro}>Clique aqui para validar o formulário.</p>
      )}
    </form>
  );
}
