import{app}from"../../firebase.js";import{serviceProdutos}from"../services/service-produtos.js";const uploadProduto=()=>{document.querySelector("#produtoimginput").onchange=e=>{const t=e.target.files[0];app.storage().ref().child(t.name).put(t).then((()=>{console.log("upload file",t.name)}))}},btnCadastrar=document.querySelector("#btns__cadastrar");btnCadastrar.addEventListener("click",(e=>{e.preventDefault(),document.querySelector("#produtoimginput").onchange=e=>{const t=e.target.files[0];app.storage().ref().child(t.name).put(t).then((()=>{console.log("upload file",t.name)}))}}));