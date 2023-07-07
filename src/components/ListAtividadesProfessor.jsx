import {
  Dados,
  Header,
  Linha,
  MainContainer,
} from "@/styles/listAtividadesProfessorStyles";
import React, { useState } from "react";

const ListAtividades = (props) => {
  const [show, setShow] = useState(false);
  const [escolhido, setEscolhido] = useState("");

  const escolha = (name) => {
    setShow(!show);
    setEscolhido(name);
  };

  const linhaAtividade = props.atividades.map((atividade) => {
    return (
      <>
        <Linha
          key={atividade.id}
          onClick={() => props.escolheAtividade(atividade.id)}
        >
          <p onClick={() => escolha(atividade.id)}>
            {atividade.name} -{atividade.enunciado}{" "}
          </p>
          <p>
            {atividade.AtividadesdasTurmas.map((turma, i) => {
              return i + 1 === atividade.AtividadesdasTurmas.length
                ? ` ${turma.turma.name}`
                : ` ${turma.turma.name},`;
            })}
          </p>
          <button onClick={() => props.setShowModalQuestao(true)}>
            Add Questão
          </button>
        </Linha>
        {atividade.id === escolhido && show === true ? (
          <Dados>
            {atividade.Questoes.length <= 0 ?
          <p>Nenhuma questão cadastrada</p> 
          :
          (atividade.Questoes.map((questao, i) => {
            return (
              <p key={questao.id}>
                {i + 1}- {questao.conteudo}
              </p>
            );
          }))
          }
          </Dados>
        ) : null}
      </>
    );
  });

  return (
    <MainContainer>
      <Header>
        <p>Atividade:</p>
        <p>Turmas:</p>
      </Header>
      {linhaAtividade}
    </MainContainer>
  );
};

export default ListAtividades;
