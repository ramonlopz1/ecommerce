import{serviceProdutos}from"../services/service-produtos.js";import{getInputValues}from"./getInputValues.js";const novoProduto=()=>{const o=getInputValues(),e=[...JSON.parse(localStorage.getItem("produtos"))||[],o];o.img&&o.nome&&o.preco&&o.descricao?(localStorage.setItem("produtos",JSON.stringify(e)),serviceProdutos.postProdutos(o)):console.log("preencha todos os campos"),document.forms[0].reset()},btnAdd=document.querySelector("#btns__cadastrar");btnAdd.addEventListener("click",(o=>{o.preventDefault(),novoProduto()}));