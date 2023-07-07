import useForm from "@/hooks/useForm";
import React from "react";
import * as M from "../styles/modalSignupStyle";
import Link from "next/link";
import axios from "axios";
import baseUrl from "@/constants/BaseURL";

const ModalSignup = (props) => {
  const { formulario, onChange, limpaInputs } = useForm({
    username: "",
    password: "",
    nickname: "",
  });

  const clickFora = (event) => {
    let modal = document.getElementById("modal");
    if (!modal?.contains(event.target)) {
      props.setShowModal(false);
    }
  };

  function signup(event) {
    event.preventDefault(),
      axios
        .post(`${baseUrl}professores`, formulario)
        .then((resposta) => {
          limpaInputs();
          alert(resposta.data)
          props.setShowModal(false)
        })
        .catch((erro) => {
          limpaInputs(), alert(erro.response.data.message);
        });
  }

  return (
    <M.Background onClick={clickFora}>
      <M.MainContainer id="modal">
        <button className="close" onClick={() => props.setShowModal(false)}>
          x
        </button>
        <h1>Cadastro de professor</h1>
        <form onSubmit={signup}>
          <input
            placeholder="Nome de usuário(a)"
            name="username"
            type="text"
            value={formulario.username}
            onChange={onChange}
            required
          />
          <input
            placeholder="Senha"
            name="password"
            type="password"
            value={formulario.password}
            onChange={onChange}
            required
          />
          <input
            placeholder="Como quer ser chamado "
            name="nickname"
            type="text"
            value={formulario.nickname}
            onChange={onChange}
            required
          />
          <button>Finalizar</button>
        </form>
        <span>Se você é aluno, peça cadastro ao seu professor</span>
      </M.MainContainer>
    </M.Background>
  );
};

export default ModalSignup;
