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
          console.log(resposta.data);
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
          console.log(resposta.data);
        })
        .catch((erro) => {
          alert(erro.response.data.message);
        });

      // atividade.Questoes.map((questao) => {
      //   axios
      //     .get(`${baseUrl}respostas/${props.idAluno}/${questao.id}`)
      //     .then((resposta) => {
      //       const respostaAluno =
      //         resposta.data[resposta.data.length - 1].respostadoAluno;
      //       let certo = 0
      //       if (respostaAluno === questao.alternativaCorreta) {
      //         console.log("acerto miseravi");
      //         certo = certo +1
      //       }
      //       props.setAcertos(certo)
      //     })
      //     .catch((erro) => {
      //       alert(erro.response.data.message);
      //     });
      // });
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
  }, []);

  return (
    <MainContainer>
      <h2>Atividade de {atividade.name}</h2>
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
                    <button onClick={() => setEscolha(alternativa)}>
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
                <button onClick={() => props.setIndexQuestao(indexQuestao - 1)}>
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
  );
};

export default Questionario;
