import useForm from "@/hooks/useForm";
import React, { useEffect, useState } from "react";
import * as M from "../styles/modalAlunoStyle";
import Link from "next/link";
import axios from "axios";
import baseUrl from "@/constants/BaseURL";
import { useRouter } from "next/router";

const ModalAddAluno = (props) => {
  const [infProfessor, seInfProfessor] = useState();
  const [turmas, setTurmas] = useState([]);
  const { formulario, onChange, limpaInputs } = useForm({
    username: "",
    password: "",
    nickname: "",
    turmaId: ""
  });
  const router = useRouter();

  const opcoesTurma = turmas.map((turma) => {
    return (
          <option value={turma.id}> {turma.name} </option>
    );
  });

  const clickFora = (event) => {
    let modal = document.getElementById("modal");
    if (!modal?.contains(event.target)) {
      props.setShowModalAluno(false);
    }
  };

  function addAluno(event) {
    event.preventDefault()

    const body = {
      username: formulario.username,
      password: formulario.password,
      nickname: formulario.nickname,
      turmaId: formulario.turmaId,
    };
    axios
        .post(`${baseUrl}alunos`, body)
        .then((resposta) => {
          alert(resposta.data);
          limpaInputs();
          props.setShowModalAluno(false);
        })
        .catch((erro) => {
          limpaInputs(),
            alert(erro.response.data.message),
            props.setShowModalAluno(false);
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
    seInfProfessor(props.infProfessor);
    buscaTurmas();
  }, [props.setShowModalAluno]);

  return (
    <M.Background onClick={clickFora}>
      <M.MainContainer id="modal">
        <button className="close" onClick={() => props.setShowModal(false)}>
          x
        </button>
        <h1>Cadastro de Aluno</h1>
        <form onSubmit={addAluno}>
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
            placeholder="Como o aluno se chama "
            name="nickname"
            type="text"
            value={formulario.nickname}
            onChange={onChange}
            required
          />
          <select name="turmaId" 
          value={formulario.turmaId} 
          onChange={onChange}>
            <option value={""}> Selecione a turma</option>
            {}
            {opcoesTurma}
          </select>
          <button>Finalizar</button>
        </form>
        <span>
        </span>
      </M.MainContainer>
    </M.Background>
  );
};

export default ModalAddAluno;
