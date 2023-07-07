import baseUrl from "@/constants/BaseURL";
import useForm from "@/hooks/useForm";
import { Container, MainContainer } from "@/styles/alunosStyled";
import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import ListAlunos from "./ListAlunos";

const Alunos = (props) => {
  // const [infProfessor, seInfProfessor] = useState();
  const [turmas, setTurmas] = useState([]);
  const [alunoBusca, setAlunoBusca] = useState("");
  // const [nameTurma, setNameTurma] = useState("")
  const { formulario, onChange, limpaInputs } = useForm({
    name: "",
    nameTurma: "",
  });

  function buscaTurmas(event) {
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

  const onchangeTurma = () => {
    const value = event.target.value;
    console.log(value);
    findTurma(value);
  };

  const findTurma = (value) => {
    if (props.infProfessor && props.infProfessor.id !== undefined) {
      if (value !== "") {
        axios
          .get(`${baseUrl}turmas/${props.infProfessor.id}/${value}`)
          .then((resposta) => {
            setTurmas(resposta.data);
            console.log(resposta.data);
          })
          .catch((erro) => {
            alert(erro.response.data.message);
          });
      } else {
        buscaTurmas();
      }
    }
  };

  const opcoesTurma = turmas.map((turma) => {
    return (
      <option key={turma.id} value={turma.name}>
        {" "}
        {turma.name}{" "}
      </option>
    );
  });

  function buscaAluno(event) {
    event.preventDefault();
    if (props.infProfessor && props.infProfessor.id !== undefined) {
      console.log(formulario.name);
      if (formulario.name === "") {
        setAlunoBusca(formulario.name);
        buscaTurmas();
        console.log(turmas);
      } else {
        const aluno = turmas.filter((turma) => {
          const find = turma.Alunos.filter((aluno) => {
            return aluno.nickname === formulario.name;
          });
          console.log(find);
          return find.length > 0;
        });
        setTurmas(aluno);
        setAlunoBusca(formulario.name);
        console.log(aluno);
      }
    }
  }

  useEffect(() => {
    buscaTurmas();
  }, [props.showModalAluno, alunoBusca]);

  return (
    <MainContainer>
      <div className="header">
        <h1>Alunos</h1>
        <button onClick={() => props.setShowModalAluno(true)}>Cadastrar aluno</button>
      </div>
      <Container>
        <div className="nome">
          <p>Turma:</p>
          <select
            name="nameTurma"
            value={formulario.nameTurma}
            onChange={onchangeTurma}
          >
            <option value={""}> Selecione a turma</option>
            <option value={""}> Todas</option>
            {opcoesTurma}
          </select>
        </div>
        <form onSubmit={buscaAluno}>
          <p>Nome :</p>
          <input
            placeholder="Nome do Aluno"
            name="name"
            type="text"
            value={formulario.name}
            onChange={onChange}
          />
          <button className="pesquisar">Pesquisar</button>
        </form>
        <div className="box">
          <ListAlunos turmas={turmas} alunoBusca={alunoBusca} />
        </div>
      </Container>
    </MainContainer>
  );
};

export default Alunos;
