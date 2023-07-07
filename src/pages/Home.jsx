import {
  AbaAluno,
  AbaExercicio,
  AbaRelatorio,
  AbaTurma,
  Content,
  Logout,
  MainContainer,
  MenuNavegacao,
} from "@/styles/homeStyled";
import React, { useEffect, useState } from "react";
import turmas from "../images/turmas.png";
import alunos from "../images/aluno.png";
import exercicios from "../images/exercicios.png";
import relatorios from "../images/relatorios.png";
import logo from "../images/logo.png";
import Image from "next/image";
import Turmas from "@/components/Turmas";
import Alunos from "@/components/Alunos";
import Exercicios from "@/components/Exercicios";
import Relatorios from "@/components/Relatorios";
import { useRouter } from "next/router";
import ModalAddTurma from "@/components/ModalAddTurma";
import ModalAddAluno from "@/components/ModalAddAluno";
import ModalAddAtividade from "@/components/ModalAddAtividade";
import ModalAddVinculo from "@/components/ModalAddVinculo";
import ModalAddQuestao from "@/components/ModalAddQuestao";

const Home = () => {
  const [currentTab, setCurrentTab] = useState("");
  const [infProfessor, seInfProfessor] = useState();
  const [showModalTurma, setShowModalTurma] = useState(false);
  const [showModalAluno, setShowModalAluno] = useState(false);
  const [showModalAtividade, setShowModalAtividade] = useState(false);
  const [showModalVinculo, setShowModalVinculo] = useState(false);
  const [showModalQuestao, setShowModalQuestao] = useState(false);
  const [atividadeAtual, setAtividadeAtual] = useState("");
  const router = useRouter();

  function logout() {
    localStorage.removeItem("userInf");
    router.push("/");
  }

  useEffect(() => {
    const jsonInfs = localStorage.getItem("userInf");
    const infs = JSON.parse(jsonInfs);

    if (infs !== null) {
      seInfProfessor(infs);
    }
  }, []);

  return (
    <MainContainer>
      {showModalTurma === true ? (
        <ModalAddTurma
          infProfessor={infProfessor.infs}
          setShowModalTurma={setShowModalTurma}
        />
      ) : null}
      {showModalAluno === true ? (
        <ModalAddAluno
          infProfessor={infProfessor.infs}
          setShowModalAluno={setShowModalAluno}
        />
      ) : null}
      {showModalAtividade === true ? (
        <ModalAddAtividade
          infProfessor={infProfessor.infs}
          setShowModalAtividade={setShowModalAtividade}
        />
      ) : null}
      {showModalVinculo === true ? (
        <ModalAddVinculo
          infProfessor={infProfessor.infs}
          setShowModalVinculo={setShowModalVinculo}
        />
      ) : null}
      {showModalQuestao === true ? (
        <ModalAddQuestao
          infProfessor={infProfessor.infs}
          setShowModalQuestao={setShowModalQuestao}
          atividadeAtual={atividadeAtual}
        />
      ) : null}
      <MenuNavegacao>
        <div>
          <div className="logo" onClick={() => setCurrentTab("")}>
            <Image alt="home" className="logo1" src={logo} />
          </div>
          <AbaTurma
            onClick={() => setCurrentTab("turmas")}
            currentTab={currentTab}
          >
            <Image alt="turmas" src={turmas} />
            <div>
              <p>Turmas</p>
              <p className="seta">&#10148;</p>
            </div>
          </AbaTurma>
          <AbaAluno
            onClick={() => setCurrentTab("alunos")}
            currentTab={currentTab}
          >
            <Image alt="alunos" src={alunos} />
            <div>
              <p>Alunos</p>
              <p className="seta">&#10148;</p>
            </div>
          </AbaAluno>
          <AbaExercicio
            onClick={() => setCurrentTab("exercicios")}
            currentTab={currentTab}
          >
            <Image alt="exercicios" src={exercicios} />
            <div>
              <p>Exercicios</p>
              <p className="seta">&#10148;</p>
            </div>
          </AbaExercicio>
          <AbaRelatorio
            onClick={() => setCurrentTab("relatorios")}
            currentTab={currentTab}
            // user={infProfessor.user}
          >
            <Image alt="relatorios" src={relatorios} />
            <div>
              <p>Relatórios</p>
              <p className="seta">&#10148;</p>
            </div>
          </AbaRelatorio>
          <Logout onClick={() => logout()}>Sair</Logout>
        </div>
      </MenuNavegacao>

      {infProfessor && infProfessor.infs.nickname !== undefined ? (
        <Content>
          {currentTab === "" ? (
            <h1>Bem vindo professor {infProfessor.infs.nickname}</h1>
          ) : currentTab === "turmas" ? (
            <Turmas
              infProfessor={infProfessor.infs}
              showModalTurma={showModalTurma}
              setShowModalTurma={setShowModalTurma}
            />
          ) : currentTab === "alunos" ? (
            <Alunos
              infProfessor={infProfessor.infs}
              showModalAluno={showModalAluno}
              setShowModalAluno={setShowModalAluno}
            />
          ) : currentTab === "exercicios" ? (
            <Exercicios
              infProfessor={infProfessor.infs}
              showModalAtividade={showModalAtividade}
              showModalVinculo={showModalVinculo}
              setShowModalAtividade={setShowModalAtividade}
              setShowModalVinculo={setShowModalVinculo}
              setShowModalQuestao={setShowModalQuestao}
              setAtividadeAtual={setAtividadeAtual}
            />
          ) : (
            <Relatorios infProfessor={infProfessor.infs} />
          )}
        </Content>
      ) : (
        <Content>
          <h1>Carregando informações</h1>
        </Content>
      )}
    </MainContainer>
  );
};

export default Home;
