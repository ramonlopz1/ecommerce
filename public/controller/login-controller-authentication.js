import{serviceLogin}from"../services/service-login.js";const checkCredenciaisInputEBancoDeDados=()=>serviceLogin.getAllUsuarios().then((e=>{e.forEach((e=>{const o=document.querySelector("#input__user"),t=document.querySelector("#login__form__pass"),r=e.email===o.value,s=e.pass===t.value;r&&s&&(window.location.href="../html/painel.html",sessionStorage.setItem("usuarioLogado",JSON.parse("true")))}))})),autenticarCredenciais=()=>{},btnLogin=document.querySelector("#login__form__submit");btnLogin.addEventListener("click",(e=>{e.preventDefault(),serviceLogin.getAllUsuarios().then((e=>{e.forEach((e=>{const o=document.querySelector("#input__user"),t=document.querySelector("#login__form__pass"),r=e.email===o.value,s=e.pass===t.value;r&&s&&(window.location.href="../html/painel.html",sessionStorage.setItem("usuarioLogado",JSON.parse("true")))}))}))}));