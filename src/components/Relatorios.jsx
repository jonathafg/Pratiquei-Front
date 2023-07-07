import {
  Container,
  ListRelatorios,
  MainContainer,
} from "@/styles/relatoriosStyled";
import React, { useEffect, useState } from "react";
import useForm from "@/hooks/useForm";
import axios from "axios";
import baseUrl from "@/constants/BaseURL";
import ListAlunosRelatorio from "./ListAlunosRelatorio";

const Relatorios = (props) => {
  const [turmas, setTurmas] = useState([]);
  const [alunoBusca, setAlunoBusca] = useState("");
  const [showRelatorio, setShowRelatorio] = useState(false);
  const { formulario, onChange, limpaInputs } = useForm({
    name: "",
  });

  function buscaTurmas(event) {
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

  function buscaAluno(event) {
    event.preventDefault();
    if (props.infProfessor && props.infProfessor.id !== undefined) {
      if (formulario.name === "") {
        setAlunoBusca(formulario.name);
        buscaTurmas();
      } else {
        const aluno = turmas.filter((turma) => {
          const find = turma.Alunos.filter((aluno) => {
            return aluno.nickname === formulario.name;
          });
          return find.length > 0;
        });
        setTurmas(aluno);
        setAlunoBusca(formulario.name);
      }
    }
  }

  useEffect(() => {
    buscaTurmas();
  }, [props.showModalAluno, alunoBusca]);

  return (
    <MainContainer>
      <div>
        <h1>Relatórios</h1>
      </div>
      <Container>
        <form onSubmit={buscaAluno}>
          <p>Nome :</p>
          <input
            placeholder="Nome do Aluno"
            name="name"
            type="text"
            value={formulario.name}
            onChange={onChange}
          />
          <button>Pesquisar</button>
        </form>
        <ListRelatorios>
          <div id="header">
            <p>Aluno :</p>
            <p>Turma :</p>
            <p>Usuário :</p>
          </div>
          {turmas.map((turma) => {
            return (
              <ListAlunosRelatorio
                user={props.user}
                key={turma.id}
                turma={turma}
                alunoBusca={alunoBusca}
                showRelatorio={showRelatorio}
                setShowRelatorio={setShowRelatorio}
              />
            );
          })}
        </ListRelatorios>
      </Container>
    </MainContainer>
  );
};

export default Relatorios;
