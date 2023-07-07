import useForm from "@/hooks/useForm";
import React, { useEffect, useReducer, useState } from "react";
import * as M from "../styles/modalVinculoStyle";
import Link from "next/link";
import axios from "axios";
import baseUrl from "@/constants/BaseURL";
import { useRouter } from "next/router";

const ModalAddVinculo = (props) => {
  const [turmas, setTurmas] = useState([]);
  const [atividades, setAtividades] = useState([]);
  const { formulario, onChange, limpaInputs } = useForm({
    atividadeId: "",
    turmaId: "",
  });
  const router = useRouter();

  const opcoesTurma = turmas.map((turma) => {
    return (
      <option key={turma.id} value={turma.id}>
        {" "}
        {turma.name}{" "}
      </option>
    );
  });

  const opcoesAtividade = atividades.map((atividade) => {
    return (
      <option key={atividade.id} value={atividade.id}>
        {" "}
        {atividade.name}{" "}
      </option>
    );
  });

  const clickFora = (event) => {
    let modal = document.getElementById("modal");
    if (!modal?.contains(event.target)) {
      props.setShowModalVinculo(false);
    }
  };

  function vincularAtividades(event) {
    event.preventDefault();

    axios
      .post(
        `${baseUrl}atividades/${formulario.atividadeId}/${formulario.turmaId}`
      )
      .then((resposta) => {
        alert(resposta.data);
        limpaInputs();
        props.setShowModalVinculo(false);
      })
      .catch((erro) => {
        limpaInputs(), alert(erro.response.data.message);
        props.setShowModalVinculo(false);
      });
  }

  function buscaTurmas() {
    if (props.infProfessor && props.infProfessor.id !== undefined) {
      axios
        .get(`${baseUrl}turmas/${props.infProfessor.id}`)
        .then((resposta) => {
          setTurmas(resposta.data);
        })
        .catch((erro) => {
          alert(erro.response.data.message);
        });
    }
  }

  function buscaAtividades() {
    if (props.infProfessor && props.infProfessor.id !== undefined) {
      axios
        .get(`${baseUrl}atividades/${props.infProfessor.id}`)
        .then((resposta) => {
          setAtividades(resposta.data);
        })
        .catch((erro) => {
          alert(erro.response.data.message);
        });
    }
  }

  useEffect(() => {
    buscaTurmas();
    buscaAtividades();
  }, [props.setShowModalVinculo]);

  return (
    <M.Background onClick={clickFora}>
      <M.MainContainer id="modal">
        <button
          className="close"
          onClick={() => props.setShowModalVinculo(false)}
        >
          x
        </button>
        <h1>Vincular turmas às atividades</h1>
        <form onSubmit={vincularAtividades}>
          <select
            name="atividadeId"
            value={formulario.atividadeId}
            onChange={onChange}
          >
            <option value={""}> Selecione a atividade</option>
            {}
            {opcoesAtividade}
          </select>
          <select name="turmaId" value={formulario.turmaId} onChange={onChange}>
            <option value={""}> Selecione a turma</option>
            {}
            {opcoesTurma}
          </select>
          <button>Finalizar</button>
        </form>
        <span></span>
      </M.MainContainer>
    </M.Background>
  );
};

export default ModalAddVinculo;
