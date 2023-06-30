import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90%;
  justify-content: space-between;
  align-items: start;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 75%;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 30px;
  background-color: rgba(188, 188, 188, 1);
  box-shadow: 1px 3px 5px #808080;
`;

export const NavButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  bottom: 3%;
  width: 95%;
  button {
    border: none;
    border-radius: 5px;
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