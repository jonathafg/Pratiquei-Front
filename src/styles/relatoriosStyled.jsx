import styled from "styled-components";

export const MainContainer = styled.main`
  width: 95%;
  min-height: 70%;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  margin: 40px 0;

  form {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    width: 100%;
    input {
      margin-left: 5px;
      border-radius: 15px;
      box-shadow: inset -1px 1px 5px #808080, inset 2px 3px 5px #d1d1d1;
      outline: none;
      border: none;
      padding: 4px 8px;
      width: 50%;
    }
    button {
      background-color: #364143;
      margin-left: 15px;
      border: none;
      border-radius: 25px;
      box-shadow: 1px 3px 5px #808080;
      font-weight: bold;
      color: #0c9abe;
      padding: 10px 14px;
      &:hover {
        transform: scale(1.1);
        background-color: #1e2425;
        color: white;
        transition: 0.5s;
      }
    }
  }
`;

export const ListRelatorios = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 25px 0px;
  background-color: rgba(188, 188, 188, 1);
  align-items: center;
  border-radius: 5px;
  #header {
    display: flex;
    flex-direction: row;
    width: 95%;
    p {
      width: 50%;
    }
  }
`;
