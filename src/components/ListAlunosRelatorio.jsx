import baseUrl from "@/constants/BaseURL";
import {
  Dados,
  Header,
  Linha,
  MainContainer,
} from "@/styles/listAlunoRelatorioStyles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import LinhaTentativa from "./LinhaTentativa";

const ListAlunosRelatorio = (props) => {
  const [show, setShow] = useState(false);
  const [escolhido, setEscolhido] = useState("");
  const [atividades, setAtividades] = useState([]);

  const escolha = (name) => {
    setShow(!show);
    setEscolhido(name);
  };

  const buscaAtividades = () => {
    axios
      .get(`${baseUrl}atividades/turma/${props.turma.id}`)
      .then((resposta) => {
        setAtividades(resposta.data);
      })
      .catch((erro) => {
        alert(erro.response.data.message);
      });
  };

  const linhaAtividade = props.turma.Alunos.map((aluno) => {
    return (
      <>
        {props.alunoBusca !== "" ? (
          props.alunoBusca === aluno.nickname ? (
            <>
              <Linha key={aluno.id} onClick={() => escolha(aluno.nickname)}>
                <p>{aluno.nickname}</p>
                <p>{props.turma.name}</p>
                <p>{aluno.username}</p>
              </Linha>
              {escolhido === aluno.nickname && show === true ? (
                <Dados>
                  <div>
                    <p>Atividade:</p>
                    <p>Tentativas:</p>
                    <p>Maior acerto:</p>
                    <p>Menor acerto:</p>
                  </div>
                  {atividades.map((atividade) => {
                    return (
                      <div className="linha" key={atividade.atividadesId}>
                        <p>{atividade.atividade.name}</p>
                        <LinhaTentativa
                          user={props.user}
                          idAluno={aluno.id}
                          idAtividade={atividade.atividadesId}
                          questoes={atividade.atividade.Questoes}
                        />
                      </div>
                    );
                  })}
                </Dados>
              ) : null}
            </>
          ) : null
        ) : (
          <>
            <Linha key={aluno.id} onClick={() => escolha(aluno.nickname)}>
              <p>{aluno.nickname}</p>
              <p>{props.turma.name}</p>
              <p>{aluno.username}</p>
            </Linha>
            {escolhido === aluno.nickname && show === true ? (
              <Dados>
                <div>
                  <p>Atividade:</p>
                  <p>Tentativas:</p>
                  <p>Maior acerto:</p>
                  <p>Menor acerto:</p>
                </div>
                {atividades.map((atividade) => {
                  return (
                    <div className="linha" key={atividade.atividadesId}>
                      <p>
                        {atividade.atividade.name} -{" "}
                        {atividade.atividade.enunciado}
                      </p>
                      <LinhaTentativa
                        idAluno={aluno.id}
                        idAtividade={atividade.atividadesId}
                        questoes={atividade.atividade.Questoes}
                      />
                    </div>
                  );
                })}
              </Dados>
            ) : null}
          </>
        )}
      </>
    );
  });

  useEffect(() => {
    buscaAtividades();
  }, [show]);

  return <MainContainer>{linhaAtividade}</MainContainer>;
};

export default ListAlunosRelatorio;
