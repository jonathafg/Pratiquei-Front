import baseUrl from "@/constants/BaseURL";
import useForm from "@/hooks/useForm";
import { Container, MainContainer } from "@/styles/alunosStyled";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ListAlunos from "./ListAlunos";

const Alunos = (props) => {
  const [infProfessor, seInfProfessor] = useState();
  const [turmas, setTurmas] = useState([]);
  const [alunos, setAlunos] = useState([]);
  const { formulario, onChange, limpaInputs } = useForm({
    name: "",
  });

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

  function buscaAluno(event) {
    event.preventDefault()
    if (props.infProfessor && props.infProfessor.id !== undefined) {
      if(formulario.name !== ""){
        const aluno = turmas.filter((turma) => {
          const find =  turma.Alunos.filter((aluno) => {
            return aluno.nickname === formulario.name;
          });
          console.log(find);
          return find.length > 0
        });
        setTurmas(aluno)
        console.log(aluno);
      } else {
        buscaTurmas();
      }
    }
  }

  useEffect(() => {
    seInfProfessor(props.infProfessor);
    buscaTurmas();
  }, []);

  return (
    <MainContainer>
      <div className="header">
        <p onClick={() => props.setShowModalAluno(true)}>Cadastrar aluno</p>
      </div>
      <Container>
        <div className="nome">
          <p>Turma:</p>
          <input type="text" />
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
          <ListAlunos turmas={turmas} />
        </div>
      </Container>
    </MainContainer>
  );
};

export default Alunos;
