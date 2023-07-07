import useForm from "@/hooks/useForm";
import { LoginForm, MainContainer, SignupButton } from "@/styles/indexStyle";
import ModalSignup from "@/components/ModalSignup";
import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import baseUrl from "@/constants/BaseURL";
import Image from "next/image";
import logoCentro from "../images/logoCentro.png";

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const { formulario, onChange, limpaInputs } = useForm({
    username: "",
    password: "",
  });
  const router = useRouter();

  function login(event) {
    event.preventDefault(),
      axios
        .post(`${baseUrl}login`, formulario)
        .then((resposta) => {
          const jsonInf = JSON.stringify(resposta.data);
          localStorage.setItem("userInf", jsonInf), limpaInputs();
          if (resposta.data.user === "Aluno") {
            router.push("/Estudante");
          } else if (resposta.data.user === "Professor") {
            router.push("/Home");
          }
        })
        .catch((erro) => {
          limpaInputs(), alert(erro.response.data.message);
        });
  }

  return (
    <MainContainer>
      <SignupButton onClick={() => setShowModal(true)}>
        CRIAR CONTA
      </SignupButton>
      <Image src={logoCentro}/>
      {showModal === true ? <ModalSignup setShowModal={setShowModal} /> : null}
      <h1>Login</h1>
      <LoginForm onSubmit={login}>
        <input
          id="username"
          type="text"
          name="username"
          placeholder="Usuário"
          value={formulario.username}
          onChange={onChange}
          required
        />
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Senha"
          value={formulario.password}
          onChange={onChange}
          required
        />

        <button>Entrar</button>
      </LoginForm>
    </MainContainer>
  );
};

export default Index;
