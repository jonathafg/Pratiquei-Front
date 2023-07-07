import useForm from "@/hooks/useForm";
import React, { useEffect, useReducer, useState } from "react";
import * as M from "../styles/modalQuestaoStyle";
import Link from "next/link";
import axios from "axios";
import baseUrl from "@/constants/BaseURL";
import { useRouter } from "next/router";

const ModalAddQuestao = (props) => {
  const [atividade, setAtividade] = useState({});
  const [turmas, setTurmas] = useState([]);
  const [alternativas, setAlternativas] = useState([]);
  const [pergunta, setPergunta] = useState("");
  const [alternativaCorreta, setAlternativaCorreta] = useState("");
  const { formulario, onChange, limpaInputs } = useForm({
    conteudo: "",
    alternativas: "",
  });
  const id = props.atividadeAtual;
  const router = useRouter();
  console.log(id);

  const onchangePergunta = (event) => {
    const pergunta = event.target.value;
    setPergunta(pergunta);
  };
  console.log(pergunta);

  const onchangeCorreta = (event) => {
    const opcao = event.target.value;
    console.log(opcao);
    setAlternativaCorreta(opcao);
  };

  function opcoesAlternativas() {
    const opcoes = alternativas.map((alternativa) => {
      return (
        <option key={alternativa} value={alternativa}>
          {" "}
          {alternativa}{" "}
        </option>
      );
    });
    return opcoes;
  }

  const clickFora = (event) => {
    let modal = document.getElementById("modal");
    if (!modal?.contains(event.target)) {
      props.setShowModalQuestao(false);
    }
  };

  function addAlternativa(event) {
    event.preventDefault();
    let opcoes = alternativas;
    opcoes.push(formulario.alternativas);
    setAlternativas(opcoes);
    limpaInputs();
  }

  function addQuestao() {

    const body = {
      atividadesId: atividade.id,
      conteudo: pergunta,
      alternativas: alternativas,
      alternativaCorreta: alternativaCorreta,
    };

    axios
      .post(`${baseUrl}questoes`, body)
      .then((resposta) => {
        alert(resposta.data);
        limpaInputs();
        props.setShowModalQuestao(false);
      })
      .catch((erro) => {
        limpaInputs(),
          alert(erro.response.data.message),
          props.setShowModalQuestao(false);
      });
  }

  function buscaTurmas() {
    if (props.infProfessor && props.infProfessor.id !== undefined) {
      axios
        .get(`${baseUrl}turmas/${props.infProfessor.id}`)
        .then((resposta) => {
          setTurmas(resposta.data);
        })
        .catch((erro) => {
          alert(erro.response.data.message);
        });
    }
  }

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
    opcoesAlternativas();
    buscaTurmas();
  }, [props.setShowModalQuestao, alternativas]);

  return (
    <M.Background onClick={clickFora}>
      <M.MainContainer id="modal">
        <button
          className="close"
          onClick={() => props.setShowModalQuestao(false)}
        >
          x
        </button>
        <h1>Adicionar questão à {atividade.name}</h1>
        <textarea
          placeholder="Pergunta da questão"
          type="text"
          value={pergunta}
          onChange={onchangePergunta}
          required
        />
        <form onSubmit={addAlternativa}>
          <input
            placeholder="Alternativas"
            name="alternativas"
            type="text"
            value={formulario.alternativas}
            onChange={onChange}
            required
          />
          <button>Adicionar</button>
        </form>
        <div id="finalizaForm">
          <select
            value={alternativaCorreta}
            onChange={onchangeCorreta}
          >
            <option value={""}>Alternativa correta</option>
            {}
            {opcoesAlternativas()}
          </select>
          <button id="final" onClick={() => addQuestao()}>
            Finalizar
          </button>
        </div>
        <span></span>
      </M.MainContainer>
    </M.Background>
  );
};

export default ModalAddQuestao;
