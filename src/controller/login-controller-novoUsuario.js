import { serviceLogin } from "../services/service-login.js";
import { dadosNovoUsuarioInputs } from "./login-cadastro-controller-dadosNovoUsuarioInputs.js";

const novoUsuario = async () => {
  const dadosUsuario = dadosNovoUsuarioInputs();

  try {
    await serviceLogin.postUsuario(dadosUsuario);
  } catch (e) {
    console.log("Algo de errado aconteceu na aplicação: " + e);
  }

  document.forms[1].reset();
};

document
  .querySelector("#cadastro__form__cadastrar")
  .addEventListener("click", (event) => {
    event.preventDefault();
    novoUsuario();
  });
