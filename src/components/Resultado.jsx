import baseUrl from "@/constants/BaseURL";
import { Content, MainContainer, NavButtons } from "@/styles/resultadoStyled";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Resultado = (props) => {
  const [atividade, setAtividade] = useState({});
  const [nota, setNota] = useState(0);
  const [acertos, setAcertos] = useState(0);
  // const acertos = props.acertos;
  const id = props.atividadeAtual;

  const recomeçar = () => {
    const body = {
      alunosId: props.idAluno,
      atividadesId: atividade.id,
      resultado: nota.toString(),
    };

    axios
      .post(`${baseUrl}notas`, body)
      .then((resposta) => {
        console.log(resposta.data);
      })
      .catch((erro) => {
        erro.response.data.message;
      });

    props.setEmResultado(false);
  };

  const voltarLista = () => {
    const body = {
      alunosId: props.idAluno,
      atividadesId: atividade.id,
      resultado: nota.toString(),
    };

    axios
      .post(`${baseUrl}notas`, body)
      .then((resposta) => {
        console.log(resposta.data);
      })
      .catch((erro) => {
        erro.response.data.message;
      });

    props.setEmResultado(false);
    props.setEmAtividade(false);
  };

  function calculaAcertos () {
    let certo = 0
    if(atividade.name && atividade.Questoes.length >0){
      atividade.Questoes.map((questao) => {
        axios
          .get(`${baseUrl}respostas/${props.idAluno}/${questao.id}`)
          .then((resposta) => {
            const respostaAluno =
              resposta.data[resposta.data.length - 1].respostadoAluno;
              console.log(respostaAluno);
            if (respostaAluno === questao.alternativaCorreta) {
              console.log("acerto miseravi");
              certo = certo +1
            }
            // setAcertos(certo)
          })
          .catch((erro) => {
            alert(erro.response.data.message);
          });
      });
      console.log(certo);
    }
    return certo
  }

  function calculaNota () {
    if(atividade.name && atividade.Questoes.length >0){
      setNota((acertos / atividade.Questoes.length) * 10);
    }
  };

  // console.log(props.acertos);
  console.log(acertos);
  console.log(nota);

  useEffect(() => {
    if (id !== undefined) {
     async function buscaAtividade ()  {
       await axios
          .get(`${baseUrl}atividades/atividade/${id}`)
          .then((resposta) => {
            setAtividade(resposta.data);
            // setNota((acertos/resposta.data.Questoes.length)*10);
          })
          .catch((erro) => {
            alert(erro.response.data.message);
          });
      };
      console.log(nota);
      console.log(acertos);
      buscaAtividade();
    }
    console.log(calculaAcertos());
    // setAcertos(calculaAcertos())
    calculaNota();
  }, []);
  return (
    <MainContainer>
      <h2>Atividade de {atividade.name}</h2>
      <Content>
        {atividade.name !== undefined ? (
          <>
            <h2>Atividade finalizada!</h2>
            <h2>
              Você acertou {acertos} de {atividade.Questoes.length} perguntas
            </h2>
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
