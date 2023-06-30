import axios from "axios";
import { useEffect, useState } from "react";
import baseUrl from "../constants/BaseURL";

export const BuscaAtividades = (idTurma) => {
  const [atividades, setAtividades] = useState([]);
  useEffect(() => {
    axios
      .get(`${baseUrl}atividades/turma/${idTurma}`)
      .then((resposta) => {
        console.log(resposta.data);
      })
      .catch((erro) => {
        erro.response.data.message;
      });
  }, []);
  return atividades;
};
