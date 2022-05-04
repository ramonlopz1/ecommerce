import { serviceLogin } from "../../services/service-login.js";

/**
 * Compara informações inseridas no login, com os dados contidos no db.json, 
 * se as informações baterem, o login será concluído.
 */

const checarCredenciais = async () => {
  try {
    const usuarios = await serviceLogin.getAllUsuarios();

    usuarios.forEach((usuario) => {
      const inputEmail = document.querySelector("#input__user");
      const inputPass = document.querySelector("#login__form__pass");

      const checkEmail = usuario.email === inputEmail.value;
      const checkPass = usuario.pass === inputPass.value;

      // redireciona para o painel e registrar no sessionStorage que o usuário está logado.
      if (checkEmail && checkPass) {
        window.location.href = "../painel/painel.html";
        sessionStorage.setItem("usuarioLogado", JSON.parse("true"));
      }
    });
  } catch (e) {
    console.log("Algo de errado aconteceu na aplicação: " + e)
  }
};

document.querySelector("#login__form__submit")
  .addEventListener("click", (event) => {
    event.preventDefault();
    checarCredenciais();
  });
