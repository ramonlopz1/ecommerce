import { serviceProdutos } from "../services/service-produtos.js";

import { listarEcriarProdutos } from "./produto-controller-listarProdutos.js";

const divProduto = document.querySelector("#form__div__produto");

document
  .querySelector("#btns__pesquisar_excluir")
  .addEventListener("click", (e) => {
    e.preventDefault();
    filtrarProduto();
  });

const filtrarProduto = async () => {
  const ID = document.querySelector("#produtopesquisainput").value;

  if (ID) {
    const produto = await serviceProdutos.getProduto(ID);

    if (produto.id == ID) {
      listarEcriarProdutos(".painel__excluir__produto", ID);
    } else {
      divProduto.innerHTML = "<h1>ID INCORRETO</h1>";
    }
  }
};

const btnExcluir = document.querySelector("#btns__excluir");

btnExcluir.onclick = (e) => {
  e.preventDefault();
  excluirProduto();
  divProduto.innerHTML = "<h1>PRODUTO EXCLUÍDO!</h1>";
};

const excluirProduto = () => {
  const ID = document.querySelector("#produtopesquisainput").value;
  return serviceProdutos.deleteProduto(ID);
};
