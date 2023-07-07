import baseUrl from "@/constants/BaseURL";
import axios from "axios";
import React, { useEffect, useState } from "react";

const LinhaAcertos = (props) => {
  const [acertos, setAcertos] = useState(0);
  const [registra, setRegistra] = useState(false);

  const calculaAcertos = () => {
    let certo = 0;
    props.atividade.Questoes.map((questao, i) => {
      axios
        .get(`${baseUrl}respostas/${props.idAluno}/${questao.id}`)
        .then((resposta) => {
          const respostaAluno =
            resposta.data[resposta.data.length - 1].respostadoAluno;

          if (respostaAluno === questao.alternativaCorreta) {
            certo = certo + 1;
            setAcertos(certo);
          }
          if (i + 1 === props.atividade.Questoes.length) {
            setRegistra(true);
          }
        })
        .catch((erro) => {
          alert(erro.response.data.message);
        });
    });
  };

  const registraResult = () => {
    const body = {
      alunosId: props.idAluno,
      atividadesId: props.atividade.id,
      resultado: acertos.toString(),
    };

    axios
      .post(`${baseUrl}notas`, body)
      .then((resposta) => {})
      .catch((erro) => {
        erro.response.data.message;
      });
  };

  useEffect(() => {
    calculaAcertos();
  }, []);

  useEffect(() => {
    if (registra === true) {
      registraResult();
    }
  }, [registra]);

  return (
    <h1>
      Você acertou {acertos} de {props.atividade.Questoes.length} perguntas
    </h1>
  );
};

export default LinhaAcertos;
