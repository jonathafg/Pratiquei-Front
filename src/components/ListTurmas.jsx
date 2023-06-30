import { Header, Linha, MainContainer } from "@/styles/listAtividadesStyles";
import React from "react";

const ListTurmas = (props) => {
  const linhaAtividade = props.turmas.map((turma) => {
    return (
      <Linha>
        <p>{turma.name}</p>
        <p>{turma.Alunos.length}</p>
      </Linha>
    );
  });

  return (
    <MainContainer>
      <Header>
        <p>Turma :</p>
        <p>Alunos :</p>
      </Header>
      {linhaAtividade}
    </MainContainer>
  );
};

export default ListTurmas;