import{serviceLogin}from"../services/service-login.js";import{dadosNovoUsuarioInputs}from"./login-cadastro-controller-dadosNovoUsuarioInputs.js";const novoUsuario=async()=>{const o=dadosNovoUsuarioInputs();try{await serviceLogin.postUsuario(o)}catch(o){console.log("Algo de errado aconteceu na aplicação: "+o)}document.forms[1].reset()};document.querySelector("#cadastro__form__cadastrar").addEventListener("click",(o=>{o.preventDefault(),novoUsuario()}));