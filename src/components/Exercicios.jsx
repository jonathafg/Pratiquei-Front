import { Container, MainContainer } from "@/styles/exerciciosStyled";
import React, { useEffect, useReducer, useState } from "react";
import ListAlunos from "./ListAlunos";
import axios from "axios";
import baseUrl from "@/constants/BaseURL";
import useForm from "@/hooks/useForm";
import ListAtividades from "./ListAtividadesProfessor";

const Exercicios = (props) => {
  const [atividades, setAtividades] = useState([]);
  const { formulario, onChange, limpaInputs } = useForm({
    name: "",
  });

  function buscaAtividade(event) {
    event.preventDefault();
    if (props.infProfessor && props.infProfessor.id !== undefined) {
      console.log(formulario.name);
      if (formulario.name === "") {
        buscaAtividades();
        console.log(atividades);
      } else {
        const atividade = atividades.filter((atividade) => {
          return atividade.name === formulario.name;
        });
        console.log(atividade);
        setAtividades(atividade);
      }
    }
  }

  function buscaAtividades() {
    if (props.infProfessor && props.infProfessor.id !== undefined) {
      axios
        .get(`${baseUrl}atividades/${props.infProfessor.id}`)
        .then((resposta) => {
          setAtividades(resposta.data);
          console.log(resposta.data);
        })
        .catch((erro) => {
          alert(erro.response.data.message);
        });
    }
  }

  function escolheAtividade(id) {
    props.setAtividadeAtual(id);
  }

  useEffect(() => {
    buscaAtividades();
  }, [
    props.showModalAtividade,
    props.showModalVinculo,
    props.setShowModalQuestao,
  ]);
  return (
    <MainContainer>
      <div className="header">
        <h1>Exercícios</h1>
        <button id="atividades" onClick={() => props.setShowModalAtividade(true)}>
          Cadastrar Atividade
        </button>
        <button id="turmas" onClick={() => props.setShowModalVinculo(true)}>Vincular Turmas</button>
      </div>
      <Container>
        <div className="busca">
          <p>Atividade :</p>
          <form onSubmit={buscaAtividade} >
            <input
              placeholder="Nome da Atividade"
              name="name"
              type="text"
              value={formulario.name}
              onChange={onChange}
            />
            <button className="pesquisar">Pesquisar</button>
          </form>
        </div>
        <div className="box">
          <ListAtividades
            atividades={atividades}
            escolheAtividade={escolheAtividade}
            setShowModalQuestao={props.setShowModalQuestao}
          />
        </div>
      </Container>
    </MainContainer>
  );
};

export default Exercicios;
