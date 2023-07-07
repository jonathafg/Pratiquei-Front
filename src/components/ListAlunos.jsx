import { Header, Linha, MainContainer } from "@/styles/listAtividadesStyles";
import React from "react";

const ListAlunos = (props) => {
  const linhaAtividade = props.turmas.map((turma) => {
    return (
      <div key={turma.id}>
        {props.alunoBusca !== ""
          ? turma.Alunos.map((aluno) => {
              return props.alunoBusca === aluno.nickname ? (
                <Linha key={aluno.id}>
                  <p>{aluno.nickname}</p>
                  <p>{turma.name}</p>
                  <p>{aluno.username}</p>
                </Linha>
              ) : null;
            })
          : turma.Alunos.map((aluno) => {
              return (
                <Linha key={aluno.id}>
                  <p>{aluno.nickname}</p>
                  <p>{turma.name}</p>
                  <p>{aluno.username}</p>
                </Linha>
              );
            })}
      </div>
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
