const btnMobile = document.querySelector("#button__mobile__menu");

const mudarParaMenuMobile = (menuAberto) => {
  const navBottom = document.querySelector("#header_navigation__bottom");

  const menu = document.querySelector("#navigation__bottom__menu");

  const redesSociais = document.querySelector(
    "#navigation__bottom__redesocial"
  );

    const icon = document.querySelector("#icone__hambur")

  if (!menuAberto) {
    navBottom.style.height = "440px";
    icon.classList.remove("fa-solid", "fa-bars")
    icon.classList.add("fa-solid", "fa-xmark")

    setTimeout(() => {
      menu.style.display = "flex";
      redesSociais.style.display = "flex";
    }, 200);
  } else {
    navBottom.style.height = "70px";
    menu.style.display = "none";
    redesSociais.style.display = "none";
    
    icon.classList.remove("fa-solid", "fa-xmark")
    icon.classList.add("fa-solid", "fa-bars")
  }
};

let aberto = false;
btnMobile.addEventListener("click", () => {
  if (!aberto) {
    mudarParaMenuMobile(false);
    aberto = true;
  } else if (aberto) {
    mudarParaMenuMobile(true);
    aberto = false;
  }
});
