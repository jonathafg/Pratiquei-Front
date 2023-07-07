import baseUrl from "@/constants/BaseURL";
import axios from "axios";
import React, { useEffect, useState } from "react";

const LinhaTentativaAluno = (props) => {
  const [resp, setResp] = useState([]);
  const [resultados, setResultados] = useState([]);
  const [maior, setMaior] = useState(0);
  const [menor, setMenor] = useState(1000000);

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

  useEffect(() => {
    tentativas();
  }, []);

  return <p>{resp.length}</p>;
};

export default LinhaTentativaAluno;
