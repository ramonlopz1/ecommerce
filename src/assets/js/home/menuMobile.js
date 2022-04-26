const btnMobile = document.querySelector("#bottom__mobile__menu");

const mudarParaMenuMobile = (menuAberto) => {
  const navBottom = document.querySelector("#header_navigation__bottom");

  const menu = document.querySelector("#navigation__bottom__menu");

  const redesSociais = document.querySelector(
    "#navigation__bottom__redesocial"
  );

  if (!menuAberto) {
    navBottom.style.height = "440px";

    setTimeout(() => {
      menu.style.display = "flex";
      redesSociais.style.display = "flex";
    }, 200);
  } else {
    navBottom.style.height = "70px";
    menu.style.display = "none";
    redesSociais.style.display = "none";
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
