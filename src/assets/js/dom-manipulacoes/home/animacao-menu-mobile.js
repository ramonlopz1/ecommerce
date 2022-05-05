const btnMobile = document.querySelector("#button__mobile__menu");

const mudarParaMenuMobile = (menuAberto) => {
  // Seleciona os elementos que serão manipulados.
  
  const navBottom = document.querySelector("#header_navigation__bottom");

  const menu = document.querySelector("#navigation__bottom__menu");

  const redesSociais = document.querySelector("#navigation__bottom__redesocial");

  const icon = document.querySelector("#icone__hambur");

  // Se o menu estiver fechado, ao clicar, abra-o e mude seu ícone.
  if (!menuAberto) {
    navBottom.style.height = "440px";
    icon.classList.remove("fa-solid", "fa-bars");
    icon.classList.add("fa-solid", "fa-xmark");

    // Delay para que o surgimento do menu mobile não seja abrupto.
    setTimeout(() => {
      menu.style.display = "flex";
      redesSociais.style.display = "flex";
    }, 200);
  } 
  // Se o menu estiver aberto, ao clicar, feche-o e mude seu ícone.
  else {
    navBottom.style.height = "70px";
    menu.style.display = "none";
    redesSociais.style.display = "none";

    icon.classList.remove("fa-solid", "fa-xmark");
    icon.classList.add("fa-solid", "fa-bars");
  }
};

// Informa a função mudarParaMenuMobile se é para abrir ou fechar o menu.
let aberto = false;

btnMobile.addEventListener("click", () => {
  if (!aberto) {
    mudarParaMenuMobile(false);
    aberto = true;
  } else  {
    mudarParaMenuMobile(true);
    aberto = false;
  }
});
