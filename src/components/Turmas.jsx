import baseUrl from "@/constants/BaseURL";
import { Container, MainContainer } from "@/styles/turmasStyled";
import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import ListAlunos from "./ListAlunos";
import useForm from "@/hooks/useForm";
import ListTurmas from "./ListTurmas";

const Turmas = (props) => {
  const [turmas, setTurmas] = useState([]);
  const { formulario, onChange, limpaInputs } = useForm({
    name: "",
  });

  function buscaTurmaPorNome(event) {
    event.preventDefault();

    if (props.infProfessor && props.infProfessor.id !== undefined) {
      if (formulario.name === "") {
        buscaTurmas();
      } else {
        axios
          .get(`${baseUrl}turmas/${props.infProfessor.id}/${formulario.name}`)
          .then((resposta) => {
            setTurmas(resposta.data);
          })
          .catch((erro) => {
            alert(erro.response.data.message);
          });
      }
    }
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
  }, [props.showModalTurma]);

  return (
    <MainContainer>
      <div className="header">
        <h1>Turmas</h1>
        <button onClick={() => props.setShowModalTurma(true)}>Cadastrar turma</button>
      </div>
      <Container>
        <form onSubmit={buscaTurmaPorNome}>
          <p>Turma :</p>
          <input
            placeholder="Nome da Turma"
            name="name"
            type="text"
            value={formulario.name}
            onChange={onChange}
          />
          <button>Pesquisar</button>
        </form>
        <div className="box">
          <ListTurmas turmas={turmas}/>
        </div>
      </Container>
    </MainContainer>
  );
};

export default Turmas;
