const checkSessionAndEnableButtons=()=>{if("true"===sessionStorage.getItem("usuarioLogado")){document.querySelectorAll(".top__lista__link").forEach((e=>{e.style.display="none"}));document.querySelector("[data-header-painel]").style.display="flex"}};checkSessionAndEnableButtons();