import baseUrl from "@/constants/BaseURL";
import axios from "axios";
import React, { useEffect, useState } from "react";

const LinhaTentativa = (props) => {
  const [resp, setResp] = useState([]);
  const [resultados, setResultados] = useState([]);
  const [maior, setMaior] = useState(0);
  const [menor, setMenor] = useState(1000000)

  const tentativas = () => {
    axios
      .get(`${baseUrl}tentativas/${props.idAluno}/${props.idAtividade}`)
      .then((resposta) => {
        setResp(resposta.data);
      })
      .catch((erro) => {
        alert(erro.response.data.message);
      });
  };

  const buscaResultados = () => {
    axios
      .get(`${baseUrl}notas/${props.idAluno}/${props.idAtividade}`)
      .then((resposta) => {
        setResultados(resposta.data);
      })
      .catch((erro) => {
        alert(erro.response.data.message);
      });
  };

  const maiorMenor = resultados.map((acerto)=>{
    if(acerto.resultado > maior){
      setMaior(acerto.resultado)
    }
    if(acerto.resultado < menor){
      setMenor(acerto.resultado)
    }
  })

  useEffect(() => {
    tentativas();
    buscaResultados();
  }, []);

  return (
    <>
      <p>{resp.length}</p>
      <p>{maior}</p>
      {menor !== 1000000 ?
      <p>{menor}</p>:
      <p>0</p>
      }
    </>
  );
};

export default LinhaTentativa;
