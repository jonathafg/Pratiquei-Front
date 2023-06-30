import { Header, Linha, MainContainer } from "@/styles/listAtividadesStyles";
import React from "react";

const ListAlunos = (props) => {
  const linhaAtividade = props.turmas.map((turma) => {
    return (
      <>
        {turma.Alunos.map((aluno) => {
          return (
            <Linha>
              <p>{aluno.nickname}</p>
              <p>{turma.name}</p>
              <p>{aluno.username}</p>
            </Linha>
          );
        })}
      </>
    );
  });

  return (
    <MainContainer>
      <Header>
        <p>Aluno :</p>
        <p>Turma :</p>
        <p>Usuário :</p>
      </Header>
      {linhaAtividade}
    </MainContainer>
  );
};

export default ListAlunos;
