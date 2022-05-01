import { serviceProdutos } from "../services/service-produtos.js";

import { listarEcriarProdutos } from "./produto-controller-listarProdutos.js";

document.querySelector("#btns__pesquisar_excluir").addEventListener("click", (e) => {
  e.preventDefault();
  filtrarProduto();
});

const filtrarProduto = () => {
  const ID = document.querySelector("#produtopesquisainput").value;

  if (ID) {
    serviceProdutos.getProduto(ID).then((produto) => {
      if (produto.id == ID) {
        listarEcriarProdutos(".painel__excluir__produto", ID);
      } else {
        const divProduto = document.querySelector("#form__div__produto");
        divProduto.innerHTML = "<h1>ID INCORRETO</h1>";
      }
    });
  }
};

const btnExcluir = document.querySelector("#btns__excluir");

btnExcluir.onclick = (e) => {
  e.preventDefault();
  excluirProduto();
};

const excluirProduto = () => {
  const ID = document.querySelector("#produtopesquisainput").value;
  return serviceProdutos.deleteProduto(ID);
};
