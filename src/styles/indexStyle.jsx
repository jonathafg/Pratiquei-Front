import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(
    156deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(220, 220, 220, 1) 35%,
    rgba(188, 188, 188, 1) 100%
  );
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  input {
    width: 100%;
    margin: 0.4rem;
    border: none;
    border-radius: 15px;
    padding: 8px 20px;
    box-shadow: inset -1px 1px 5px #808080, inset 2px 3px 5px #d1d1d1;
    outline: none;
  }
  ::placeholder {
    width: 100%;
    text-align: center;
    color: #808080;
  }
  button {
    margin: 1.5rem;
    width: 100%;
    border: none;
    border-radius: 15px;
    padding: 8px;
    /* background: linear-gradient(156deg, rgba(56,68,70,1) 0%, rgba(48,57,59,1) 35%, rgba(38,47,49,1) 100%); */
    background-color: #364143;
    box-shadow: 1px 3px 5px #808080;
    color: #0c9abe;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
      transition: 0.5s;
      background-color: #1e2425;
      color: white;
    }
  }
`;

export const SignupButton = styled.button`
  position: absolute;
  top: 20px;
  right: 15px;
  border: none;
  border-radius: 15px;
  padding: 8px 30px;
  box-shadow: 1px 3px 5px #808080;
  font-weight: bold;
  background-color: #364143;
  color: #0c9abe;
  transition: 0.5s;
  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
    background-color: #1e2425;
    color: white;
  }
`;
