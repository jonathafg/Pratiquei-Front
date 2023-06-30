import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    156deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(220, 220, 220, 1) 35%,
    rgba(188, 188, 188, 1) 100%
  );
  .sair {
    position: absolute;
    bottom: 0;
    left: 0;
    border: none;
    padding: 16px;
    background-color: #364143;
    box-shadow: 1px 3px 5px #808080;
    color: #0c9abe;
    transition: 0.5s;
    font-size: 18px;
    cursor: pointer;
    &:hover {
      transition: 0.5s;
      background-color: #1e2425;
      color: white;
    }
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 80%;
  justify-content: space-between;
  align-items: start;

  /* border: 1px solid black; */
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 75%;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid black; */
  border-radius: 5px;
  margin-bottom: 30px;
  background-color: rgba(188, 188, 188, 1);
  box-shadow: 1px 3px 5px #808080;
`;
