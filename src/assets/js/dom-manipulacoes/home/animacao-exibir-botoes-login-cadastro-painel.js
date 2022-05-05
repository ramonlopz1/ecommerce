
/**
 * Verifica no sessionStorage se o usuário está logado,
 * caso esteja, substitui os botões de "Login/Cadastro" pelo botão "Painel".
 */
const checarSessaoEHabilitarBotoes = () => {
  const logado = sessionStorage.getItem("usuarioLogado");

  if (logado === "true") {
    const btnsAcesso = document.querySelectorAll(".top__lista__link");
    btnsAcesso.forEach((btn) => {
      btn.style.display = "none";
    });

    const btnPainel = document.querySelector("[data-header-painel]");
    btnPainel.style.display = "flex";

    // Botão painel para dispositivos móveis
    const btnAcessar = document.querySelector("[data-btnMobile]");
    btnAcessar.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = "assets/html/painel/painel.html";
    });
  }
};

checarSessaoEHabilitarBotoes();
