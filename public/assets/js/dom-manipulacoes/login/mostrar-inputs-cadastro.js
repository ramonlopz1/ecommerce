const mostrarInputsCadastro=()=>{const e=document.querySelector("#form__login"),t=document.querySelector("#form__cadastro");e.style.display="none",t.style.display="flex"};document.querySelector("#login__form__cadastrar").addEventListener("click",(e=>{e.preventDefault(),mostrarInputsCadastro()})),document.querySelector("#cadastro__form__cancelar").addEventListener("click",(e=>{e.preventDefault(),window.location.href="../html/login.html"}));