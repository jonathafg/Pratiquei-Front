import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  position: fixed;
  z-index: 2;
  overflow: auto;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 510px;
  min-height: 430px;
  border: 2px solid white;
  border-radius: 10px;
  background: linear-gradient(
    156deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(220, 220, 220, 1) 35%,
    rgba(188, 188, 188, 1) 100%
  );
  color: #303030;
  margin: auto;
  position: relative;
  animation: scale-in 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  @keyframes scale-in {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  h1 {
    font-size: 46px;
    margin-top: 48px;
    margin-bottom: 28px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 75%;
    input {
      width: 90%;
      padding: 10px 20px;
      margin: 8px;
      border: none;
      border-radius: 25px;
      background-color: white;
      color: black;
      box-shadow: inset -1px 1px 5px #808080, inset 2px 3px 5px #d1d1d1;
      outline: none;
      font-size: 24px;
    }
    select{
      width: 90%;
      padding: 10px 20px;
      margin: 8px;
      border: none;
      border-radius: 25px;
      background-color: white;
      color: black;
      box-shadow: inset -1px 1px 5px #808080, inset 2px 3px 5px #d1d1d1;
      outline: none;
      font-size: 24px;
    }
    button {
      margin: 1.5rem;
      width: 80%;
      border: none;
      border-radius: 15px;
      padding: 8px;
      background-color: #364143;
      box-shadow: 1px 3px 5px #808080;
      color: #0c9abe;
      transition: 0.5s;
      cursor: pointer;
      font-size: 18px;
      &:hover {
        transform: scale(1.1);
        transition: 0.5s;
        background-color: #1e2425;
        color: white;
      }
    }
  }
  .close {
    cursor: pointer;
    position: absolute;
    top: 1%;
    right: 1%;
    padding: 0px 7px;
    padding-bottom: 2px;
    margin: 5px;
    width: auto;
    border-radius: 15px;
    font-size: 24px;
    background-color: inherit;
    color: black;
  }
  span {
    width: 75%;
    text-align: center;
    font-size: 24px;
    margin-top: 18px;
    margin-bottom: 20px;
    a {
      cursor: pointer;
      font-weight: bolder;
      text-decoration: underline;
    }
  }
`;
