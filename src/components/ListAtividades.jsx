import baseUrl from "@/constants/BaseURL";
import { Header, Linha, MainContainer } from "@/styles/listAtividadesStyles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import LinhaTentativa from "./LinhaTentativa";
import LinhaTentativaAluno from "./LinhaTentativaAluno";

const ListAtividades = (props) => {
  const linhaAtividade = props.atividades.map((atividade) => {
    return (
      <>
        {props.user === "Aluno" ? (
          <Linha
            key={atividade.atividadesId}
            onClick={() => props.escolheAtividade(atividade.atividadesId)}
          >
            <p>
              {atividade.atividade.name} - {atividade.atividade.enunciado}
            </p>
            <LinhaTentativaAluno
              idAluno={props.idAluno}
              idAtividade={atividade.atividade.id}
            />
          </Linha>
        ) : (
          <Linha
            key={atividade.atividadesId}
            onClick={() => props.escolheAtividade(atividade.atividadesId)}
          >
            <p>
              {atividade.atividade.name} - {atividade.atividade.enunciado}
            </p>
            <LinhaTentativa
              idAluno={props.idAluno}
              idAtividade={atividade.atividade.id}
            />
          </Linha>
        )}
      </>
    );
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
