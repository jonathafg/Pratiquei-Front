import {
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

const Home = () => {
  const [currentTab, setCurrentTab] = useState("");
  const [infProfessor, seInfProfessor] = useState();
  const [showModalTurma, setShowModalTurma] = useState(false);
  const [showModalAluno, setShowModalAluno] = useState(false);
  const router = useRouter();

  function logout() {
    localStorage.removeItem("userInf");
    router.push("/");
  }

  useEffect(() => {
    const jsonInfs = localStorage.getItem("userInf");
    const infs = JSON.parse(jsonInfs);
    // console.log(infs);
    if (infs !== null) {
      seInfProfessor(infs.infs);
      // console.log(infs.infs.nickname);
    }
  }, []);

  return (
    <MainContainer>
      {showModalTurma === true ? (
        <ModalAddTurma
          infProfessor={infProfessor}
          setShowModalTurma={setShowModalTurma}
        />
      ) : null}
      {showModalAluno === true ? (
        <ModalAddAluno
          infProfessor={infProfessor}
          setShowModalAluno={setShowModalAluno}
        />
      ) : null}
      <MenuNavegacao>
        <div>
          <div className="logo" onClick={() => setCurrentTab("")}>
            <Image className="logo1" src={logo} />
          </div>
          <div className="aleta" onClick={() => setCurrentTab("turmas")}>
            <Image className="imagemPqna" src={turmas} />
            <div className="text">
              <p>Turmas</p>
              <p className="seta">&#10148;</p>
            </div>
          </div>
          <div className="aleta" onClick={() => setCurrentTab("alunos")}>
            <Image className="imagemPqna" src={alunos} />
            <div className="text">
              <p>Alunos</p>
              <p className="seta">&#10148;</p>
            </div>
          </div>
          <div className="aleta" onClick={() => setCurrentTab("exercicios")}>
            <Image src={exercicios} />
            <div className="text">
              <p>Exercicios</p>
              <p className="seta">&#10148;</p>
            </div>
          </div>
          <div className="aleta" onClick={() => setCurrentTab("relatorios")}>
            <Image src={relatorios} />
            <div className="text">
              <p>Relatórios</p>
              <p className="seta">&#10148;</p>
            </div>
          </div>
          <Logout onClick={() => logout()}>Sair</Logout>
        </div>
      </MenuNavegacao>

      {infProfessor && infProfessor.nickname !== undefined ? (
        <Content>
          {currentTab === "" ? (
            <h1>Bem vindo professor {infProfessor.nickname}</h1>
          ) : currentTab === "turmas" ? (
            <Turmas
              infProfessor={infProfessor}
              showModalTurma={showModalTurma}
              setShowModalTurma={setShowModalTurma}
            />
          ) : currentTab === "alunos" ? (
            <Alunos
              infProfessor={infProfessor}
              showModalAluno={showModalAluno}
              setShowModalAluno={setShowModalAluno}
            />
          ) : currentTab === "exercicios" ? (
            <Exercicios infProfessor={infProfessor} />
          ) : (
            // <></>
            <Relatorios infProfessor={infProfessor} />
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
