import{serviceProdutos}from"../../services/service-produtos.js";import{valoresInputs}from"./produto-controller-inputs.js";document.querySelector("#btns__pesquisar").addEventListener("click",(e=>{e.preventDefault(),requisitarProdutoViaID()}));const requisitarProdutoViaID=async()=>{const e=new URL(window.location).searchParams.get("id"),o=document.querySelector("#produtopesquisainput").value,t=e||o;let r=await serviceProdutos.getProduto(t);valoresInputs().preencherInputsComDadosDoProduto(r)};requisitarProdutoViaID(),document.querySelector("#btns__concluir").addEventListener("click",(e=>{e.preventDefault(),enviarDadosModificados(),document.forms[0].reset()}));const enviarDadosModificados=async()=>{const e=valoresInputs().receberDadosDosInputs,o=document.querySelector("#produtopesquisainput").value;await serviceProdutos.putProdutos(e,o)};document.querySelector("#btns__cancelar").addEventListener("click",(e=>{e.preventDefault(),window.location.href="../painel/painel.html"}));