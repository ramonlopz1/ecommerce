import{serviceProdutos}from"../services/service-produtos.js";import{listarEcriarProdutos}from"./produto-controller-listarProdutos.js";const divProduto=document.querySelector("#form__div__produto");document.querySelector("#btns__pesquisar_excluir").addEventListener("click",(r=>{r.preventDefault(),filtrarProduto()}));const filtrarProduto=async()=>{const r=document.querySelector("#produtopesquisainput").value;if(r){(await serviceProdutos.getProduto(r)).id==r?listarEcriarProdutos(".painel__excluir__produto",r):divProduto.innerHTML="<h1>ID INCORRETO</h1>"}},btnExcluir=document.querySelector("#btns__excluir");btnExcluir.onclick=r=>{r.preventDefault(),excluirProduto(),divProduto.innerHTML="<h1>PRODUTO EXCLUÍDO!</h1>"};const excluirProduto=()=>{const r=document.querySelector("#produtopesquisainput").value;return serviceProdutos.deleteProduto(r)};