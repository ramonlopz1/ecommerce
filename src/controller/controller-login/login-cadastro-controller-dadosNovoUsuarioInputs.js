export const dadosNovoUsuarioInputs = () => {
  // Seleciona inputs
  const inputEmail = document.querySelector("#cadastro__form__email");
  const inputUser = document.querySelector("#cadastro__input__user");
  const inputPass = document.querySelector("#cadastro__form__pass");
  const inputRepeatPass = document.querySelector("#cadastro__form__repeatpass");

  // Cria objeto com os dados dos inputs
  const dadosUsuario = {
    email: inputEmail.value,
    user: inputUser.value,
    pass: inputPass.value,
    repeatPass: inputRepeatPass.value,
  };

  // Checa se todos inputs estão preenchidos
  const checarPreenchimentoInputs =
    dadosUsuario.email &&
    dadosUsuario.pass &&
    dadosUsuario.repeatPass &&
    dadosUsuario.user;

  // Checa se as senhas são idênticas
  const senhasIdenticas = dadosUsuario.pass === dadosUsuario.repeatPass;

  // Se estiver tudo ok, retorna um objeto com os dados inseridos nos inputs
  if (checarPreenchimentoInputs && senhasIdenticas) {
    return dadosUsuario;
  } else {
    console.log("Por favor, preencha todos os campos.");
  }
};
