import baseUrl from "@/constants/BaseURL";
import { Content, MainContainer, NavButtons } from "@/styles/resultadoStyled";
import axios from "axios";
import React, { useEffect, useState } from "react";
import LinhaAcertos from "./LinhaAcertos";

const Resultado = (props) => {
  const [atividade, setAtividade] = useState({});
  const [nota, setNota] = useState(0);
  const [acertos, setAcertos] = useState(0);

  const id = props.atividadeAtual;

  const recomeçar = () => {
    props.setEmResultado(false);
  };

  const voltarLista = () => {
    props.setEmResultado(false);
    props.setEmAtividade(false);
  };

  function calculaAcertos() {
    if (atividade.name && atividade.Questoes.length > 0) {
      let certo = 0;
      atividade.Questoes.map((questao) => {
        axios
          .get(`${baseUrl}respostas/${props.idAluno}/${questao.id}`)
          .then((resposta) => {
            const respostaAluno =
              resposta.data[resposta.data.length - 1].respostadoAluno;

            if (respostaAluno === questao.alternativaCorreta) {
              certo = certo + 1;
              setAcertos(certo);
            }
          })
          .catch((erro) => {
            alert(erro.response.data.message);
          });
      });
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      async function buscaAtividade() {
        await axios
          .get(`${baseUrl}atividades/atividade/${id}`)
          .then((resposta) => {
            setAtividade(resposta.data);
          })
          .catch((erro) => {
            alert(erro.response.data.message);
          });
      }
      buscaAtividade();
      calculaAcertos();
    }
  }, [id]);
  return (
    <MainContainer>
      <h2>Atividade de {atividade.name}</h2>
      <Content>
        {atividade.name !== undefined ? (
          <>
            <h2>Atividade finalizada!</h2>
            <LinhaAcertos atividade={atividade} idAluno={props.idAluno} />
            <NavButtons>
              <button onClick={() => recomeçar()}>Tentar novamente</button>
              <button onClick={() => voltarLista()}>
                Voltar as atividades
              </button>
            </NavButtons>
          </>
        ) : (
          <h1>Carregando resultados</h1>
        )}
      </Content>
    </MainContainer>
  );
};

export default Resultado;
