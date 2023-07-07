import ListAtividades from "@/components/ListAtividades";
import Questionario from "@/components/Questionario";
import Resultado from "@/components/Resultado";
import baseUrl from "@/constants/BaseURL";

import { Content, List, MainContainer } from "@/styles/estudantesStyled";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Estudante = () => {
  const [infAluno, setInfAluno] = useState();
  const [atividades, setAtividades] = useState([]);
  const [emAtividade, setEmAtividade] = useState(false);
  const [emResultado, setEmResultado] = useState(false);
  const [acertos, setAcertos] = useState(0);
  const [atividadeAtual, setAtividadeAtual] = useState("");
  const router = useRouter();

  function logout() {
    localStorage.removeItem("userInf");
    router.push("/");
  }

  function escolheAtividade(id) {
    setEmAtividade(true);
    setAtividadeAtual(id);
    const body = {
      alunoId: infAluno.infs.id,
      atividadeId: id,
    };
    axios
      .post(`${baseUrl}tentativas`, body)
      .then((resposta) => {
      })
      .catch((erro) => {
        erro.response.data.message;
      });
  }

  useEffect(() => {
    const jsonInfs = localStorage.getItem("userInf");
    const infs = JSON.parse(jsonInfs);
    if (infs !== null) {
      setInfAluno(infs);
    }

    const buscaAtividades = () => {
      axios
        .get(`${baseUrl}atividades/turma/${infs.infs.turmaId}`)
        .then((resposta) => {
          setAtividades(resposta.data);
        })
        .catch((erro) => {
          alert(erro.response.data.message);
        });
    };

    buscaAtividades();
  }, [emAtividade]);

  return (
    <MainContainer>
      <Content>
        {emAtividade === false ? (
          <>
            {infAluno && infAluno.infs !== undefined ? (
              <div>
                <h2>
                  Bem vindo {infAluno.infs.nickname} da turma{" "}
                  {infAluno.infs.turma.name}
                </h2>
                <h2>Escolha a atividade que deseja realizar</h2>
              </div>
            ) : (
              <p>Vazio</p>
            )}
            {infAluno && infAluno.infs !== undefined ? (
              <List>
                <ListAtividades
                  user={infAluno.user}
                  idAluno={infAluno.infs.id}
                  atividades={atividades}
                  escolheAtividade={escolheAtividade}
                />
              </List>
            ) : null}
          </>
        ) : emResultado === false ? (
          <Questionario
            atividadeAtual={atividadeAtual}
            setEmAtividade={setEmAtividade}
            setEmResultado={setEmResultado}
            setAcertos={setAcertos}
            idAluno={infAluno.infs.id}
          />
        ) : (
          <Resultado
            atividadeAtual={atividadeAtual}
            setEmAtividade={setEmAtividade}
            setEmResultado={setEmResultado}
            acertos={acertos}
            setAcertos={setAcertos}
            idAluno={infAluno.infs.id}
          />
        )}
      </Content>

      <button className="sair" onClick={() => logout()}>
        Sair
      </button>
    </MainContainer>
  );
};

export default Estudante;
