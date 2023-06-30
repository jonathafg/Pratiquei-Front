import { Header, Linha, MainContainer } from "@/styles/listAtividadesStyles";
import React from "react";

const ListAtividades = (props) => {

  const linhaAtividade = props.atividades.map((atividade) => {
    return (
    <Linha onClick={() => props.escolheAtividade(atividade.atividadesId)}>
        <p>{atividade.atividade.name}</p>
        <p>{atividade.atividade.Tentativas.length}</p>
    </Linha>);
  });

  return (
    <MainContainer>
      <Header>
        <p>Atividade:</p>
        <p>Tentativas realizadas:</p>
      </Header>
      {linhaAtividade}
      
    </MainContainer>
  );
};

export default ListAtividades;
