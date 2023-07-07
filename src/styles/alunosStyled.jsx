import styled from "styled-components";

export const MainContainer = styled.main`
  width: 95%;
  height: 95%;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .header {
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: relative;
    h1{
      margin: 0;
    }
    button{
      position: absolute;
      right: 10px;
    }
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

  input {
    border-radius: 15px;
    box-shadow: inset -1px 1px 5px #808080, inset 2px 3px 5px #d1d1d1;
    outline: none;
    border: none;
    padding: 4px;
    width: 35%;
  }

`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 80%;
  margin-bottom: 30px;

  .nome {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    margin-bottom: 0;
    width: 100%;

    select {
      border-radius: 15px;
      box-shadow: inset -1px 1px 5px #808080, inset 2px 3px 5px #d1d1d1;
      outline: none;
      border: none;
      padding: 4px;
      width: 35%;
      margin: 0 10px;
    }
  }

  form {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    width: 100%;

    input {
      margin: 0 10px;
    }
  }

  .box {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90%;
    background-color: rgba(188, 188, 188, 1);
    align-items: center;
    border-radius: 5px;
  }

  .cabecalho {
    display: flex;
    flex-direction: row;
    width: 95%;
    p {
      width: 50%;
    }
  }

  .linha {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid black;
    width: 95%;

    p {
      width: 50%;
    }
  }
`;
