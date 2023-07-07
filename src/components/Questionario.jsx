import baseUrl from "@/constants/BaseURL";
import {
  Alternativas,
  MainContainer,
  NavButtons,
  QuestBox,
} from "@/styles/questionarioStyled";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Questionario = (props) => {
  const [atividade, setAtividade] = useState({});
  const [indexQuestao, setIndexQuestao] = useState(0);
  const [escolha, setEscolha] = useState("");
  const id = props.atividadeAtual;

  const avançar = () => {
    if (atividade.name !== undefined) {
      const body = {
        alunosId: props.idAluno,
        questoesId: atividade.Questoes[indexQuestao].id,
        respostadoAluno: escolha,
      };
      axios
        .post(`${baseUrl}respostas`, body)
        .then((resposta) => {
        })
        .catch((erro) => {
          alert(erro.response.data.message);
        });

      setIndexQuestao(indexQuestao + 1);
    }
  };
  const finalizar = () => {
    if (atividade.name !== undefined) {
      const body = {
        alunosId: props.idAluno,
        questoesId: atividade.Questoes[indexQuestao].id,
        respostadoAluno: escolha,
      };
      axios
        .post(`${baseUrl}respostas`, body)
        .then((resposta) => {
        })
        .catch((erro) => {
          alert(erro.response.data.message);
        });
      props.setEmResultado(true);
    }
  };

  useEffect(() => {
    if (id !== undefined) {
      const buscaAtividade = () => {
        axios
          .get(`${baseUrl}atividades/atividade/${id}`)
          .then((resposta) => {
            setAtividade(resposta.data);
          })
          .catch((erro) => {
            erro.response.data.message;
          });
      };
      buscaAtividade();
    }
  }, [id]);

  return (
    <>
      {atividade.name && atividade.Questoes.length > 0 ? (
        <MainContainer>
          <h2>atividade && de {atividade.name}</h2>
          <p>{atividade.enunciado}</p>
          <QuestBox>
            <p id="pergunta">Pergunta {indexQuestao + 1}</p>
            {atividade && atividade.name !== undefined ? (
              <h2>{atividade.Questoes[indexQuestao].conteudo}</h2>
            ) : (
              <p>Carregando Questão</p>
            )}
            <Alternativas>
              {atividade && atividade.name !== undefined
                ? atividade.Questoes[indexQuestao].alternativas.map(
                    (alternativa) => {
                      return (
                        <button
                          key={alternativa}
                          onClick={() => setEscolha(alternativa)}
                        >
                          {alternativa}
                        </button>
                      );
                    }
                  )
                : null}
            </Alternativas>
            <NavButtons>
              {atividade && atividade.name !== undefined ? (
                <>
                  {indexQuestao === 0 ? (
                    <button onClick={() => props.setEmAtividade(false)}>
                      Voltar
                    </button>
                  ) : (
                    <button
                      onClick={() => props.setIndexQuestao(indexQuestao - 1)}
                    >
                      Voltar
                    </button>
                  )}
                  {indexQuestao === atividade.Questoes.length - 1 ? (
                    <button onClick={() => finalizar()}>Avançar</button>
                  ) : (
                    <button onClick={() => avançar()}>Avançar</button>
                  )}
                </>
              ) : null}
            </NavButtons>
          </QuestBox>
        </MainContainer>
      ) : (
        <MainContainer>
          <QuestBox>
            <h1>
              Nenhuma questão cadastrada no momento, fale com seu professor para
              solicitar alguma.
            </h1>
            <NavButtons>
              <button onClick={() => props.setEmAtividade(false)}>
                Voltar
              </button>
            </NavButtons>
          </QuestBox>
        </MainContainer>
      )}
    </>
  );
};

export default Questionario;
