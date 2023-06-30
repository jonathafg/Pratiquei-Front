import useForm from "@/hooks/useForm";
import React from "react";
import * as M from "../styles/modalTurmaStyle";
import Link from "next/link";
import axios from "axios";
import baseUrl from "@/constants/BaseURL";
import { useRouter } from "next/router";

const ModalAddTurma = (props) => {
  const { formulario, onChange, limpaInputs } = useForm({
    name: "",
  });
  const router = useRouter();

  const clickFora = (event) => {
    let modal = document.getElementById("modal");
    if (!modal?.contains(event.target)) {
      props.setShowModalTurma(false);
    }
  };

  function addTurma(event) {
    const body = {
      name: formulario.name,
      professorId: props.infProfessor.id,
    };
    event.preventDefault(),
      axios
        .post(`${baseUrl}turmas`, body)
        .then((resposta) => {
          alert(resposta.data);
          limpaInputs();
          props.setShowModalTurma(false);
        })
        .catch((erro) => {
          limpaInputs(),
            alert(erro.response.data.message),
            props.setShowModalTurma(false);
        });
  }

  return (
    <M.Background onClick={clickFora}>
      <M.MainContainer id="modal">
        <button className="close" onClick={() => props.setShowModal(false)}>
          x
        </button>
        <h1>Cadastro de turma</h1>
        <form onSubmit={addTurma}>
          <input
            placeholder="Nome da Turma"
            name="name"
            type="text"
            value={formulario.name}
            onChange={onChange}
            required
          />
          <button>Finalizar</button>
        </form>
        <span>
          É facil assim, mais informações podem ser adicionadas depois.
        </span>
      </M.MainContainer>
    </M.Background>
  );
};

export default ModalAddTurma;
