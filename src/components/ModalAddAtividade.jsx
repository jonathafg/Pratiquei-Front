import useForm from "@/hooks/useForm";
import React, { useEffect, useReducer, useState } from "react";
import * as M from "../styles/modalAtividadeStyle";
import Link from "next/link";
import axios from "axios";
import baseUrl from "@/constants/BaseURL";
import { useRouter } from "next/router";

const ModalAddAtividade = (props) => {
  const [turmas, setTurmas] = useState([]);
  const { formulario, onChange, limpaInputs } = useForm({
    name: "",
    enunciado: "",
  });
  const router = useRouter();

  const opcoesTurma = turmas.map((turma) => {
    return (
          <option key={turma.id} value={turma.id}> {turma.name} </option>
    );
  });

  const clickFora = (event) => {
    let modal = document.getElementById("modal");
    if (!modal?.contains(event.target)) {
      props.setShowModalAtividade(false);
    }
  };

  function addAtividade(event) {
    event.preventDefault()

    const body = {
      name: formulario.name,
      professorId: props.infProfessor.id,
      enunciado: formulario.enunciado,
    };
    axios
        .post(`${baseUrl}atividades`, body)
        .then((resposta) => {
          alert(resposta.data);
          limpaInputs();
          props.setShowModalAtividade(false);
        })
        .catch((erro) => {
          limpaInputs(),
            alert(erro.response.data.message),
            props.setShowModalAtividade(false);
        });
  }

  function buscaTurmas() {
    if (props.infProfessor && props.infProfessor.id !== undefined) {
      axios
        .get(`${baseUrl}turmas/${props.infProfessor.id}`)
        .then((resposta) => {
          setTurmas(resposta.data);
          console.log(resposta.data);
        })
        .catch((erro) => {
          alert(erro.response.data.message);
        });
    }
  }

  useEffect(() => {
    buscaTurmas();
  }, [props.setShowModalAluno]);

  return (
    <M.Background onClick={clickFora}>
      <M.MainContainer id="modal">
        <button className="close" onClick={() => props.setShowModalAtividade(false)}>
          x
        </button>
        <h1>Cadastro de Atividades</h1>
        <form onSubmit={addAtividade}>
          <input
            placeholder="Nome da atividade"
            name="name"
            type="text"
            value={formulario.name}
            onChange={onChange}
            required
          />
          <input
            placeholder="Enunciado"
            name="enunciado"
            type="text"
            value={formulario.enunciado}
            onChange={onChange}
            required
          />
          <button>Finalizar</button>
        </form>
        <span>
          As questões podem ser adicionadas mais tarde
        </span>
      </M.MainContainer>
    </M.Background>
  );
};

export default ModalAddAtividade;
