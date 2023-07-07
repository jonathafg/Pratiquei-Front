import styled from "styled-components";
import logoCentro from "../images/logoCentro.png";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: end;
  min-height: 100vh;
  background: linear-gradient(
    156deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(220, 220, 220, 1) 35%,
    rgba(188, 188, 188, 1) 100%
  );
`;

export const MenuNavegacao = styled.nav`
  display: flex;
  flex-direction: column;
  width: 15%;
  height: 100%;
  font-size: 15px;
  position: fixed;
  left: 0;
  background: linear-gradient(
    156deg,
    rgba(56, 68, 70, 1) 0%,
    rgba(48, 57, 59, 1) 35%,
    rgba(38, 47, 49, 1) 100%
  );

  img {
    width: 25px;
    height: 25px;
    margin-left: 10px;
  }

  .logo1 {
    height: 40px;
    width: 40px;
    color: #2c3739;
    margin-top: 15px;
    margin-left: 13px;
    cursor: pointer;
  }
`;

export const Logout = styled.button`
  position: absolute;
  bottom: 15px;
  left: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #0c9abe;
  font-size: 18px;
  padding: 12px 18px;
  background: linear-gradient(
    156deg,
    rgba(56, 68, 70, 1) 0%,
    rgba(48, 57, 59, 1) 35%,
    rgba(38, 47, 49, 1) 100%
  );
  transition: 1s;
  &:hover {
    background: #1e2425;
    transition: 1s;
    color: white;
  }
`;

export const Content = styled.section`
  width: 85%;
  background-image: url(${logoCentro.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  h1 {
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }
`;

export const AbaTurma = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  cursor: pointer;
  justify-content: space-between;
  border-top: #5f5f5f solid 0.9px;
  background-color: ${(props) =>
    props.currentTab === "turmas" ? "#1e2425" : "inherit"};
  &:hover {
    background-color: #1e2425;
    transition: 1s;
  }
  p {
    color: #0c9abe;
  }
  img {
    height: 31px;
    width: 31px;
  }
  div {
    display: flex;
    justify-content: space-between;
    width: 70%;
  }
  .seta {
    color: black;
    margin-right: 10px;
  }
  .logo {
    padding: 7px;
    margin-bottom: 10px;
    display: flex;
  }
`;
export const AbaAluno = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  cursor: pointer;
  justify-content: space-between;
  border-top: #5f5f5f solid 0.9px;
  background-color: ${(props) =>
    props.currentTab === "alunos" ? "#1e2425" : "inherit"};
  &:hover {
    background-color: #1e2425;
    transition: 1s;
  }
  p {
    color: #0c9abe;
  }
  img {
    height: 31px;
    width: 31px;
  }
  div {
    display: flex;
    justify-content: space-between;
    width: 70%;
  }
  .seta {
    color: black;
    margin-right: 10px;
  }
  .logo {
    padding: 7px;
    margin-bottom: 10px;
    display: flex;
  }
`;
export const AbaExercicio = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  cursor: pointer;
  justify-content: space-between;
  border-top: #5f5f5f solid 0.9px;
  background-color: ${(props) =>
    props.currentTab === "exercicios" ? "#1e2425" : "inherit"};
  &:hover {
    background-color: #1e2425;
    transition: 1s;
  }
  p {
    color: #0c9abe;
  }
  img {
    height: 31px;
    width: 31px;
  }
  div {
    display: flex;
    justify-content: space-between;
    width: 70%;
  }
  .seta {
    color: black;
    margin-right: 10px;
  }
  .logo {
    padding: 7px;
    margin-bottom: 10px;
    display: flex;
  }
`;
export const AbaRelatorio = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  cursor: pointer;
  justify-content: space-between;
  border-top: #5f5f5f solid 0.9px;
  background-color: ${(props) =>
    props.currentTab === "relatorios" ? "#1e2425" : "inherit"};
  &:hover {
    background-color: #1e2425;
    transition: 1s;
  }
  p {
    color: #0c9abe;
  }
  img {
    height: 31px;
    width: 31px;
  }
  div {
    display: flex;
    justify-content: space-between;
    width: 70%;
  }
  .seta {
    color: black;
    margin-right: 10px;
  }
  .logo {
    padding: 7px;
    margin-bottom: 10px;
    display: flex;
  }
`;
