import { serviceProdutos } from "../../services/service-produtos.js";

import { renderizarProduto } from "../controller-renderizar-produto/painel/painel-controller-excluir-produtos.js";


// Atribui a função filtrarProduto ao botão pesquisar

document.querySelector("#btns__pesquisar").addEventListener("click", (e) => {
    e.preventDefault();
    filtrarProduto();
});

const divProduto = document.querySelector("#form__div__produto");

// Filtra produto pelo ID

const filtrarProduto = async () => {
  const ID = document.querySelector("#produtopesquisainput").value;

  // Se o ID estiver inserido no input:
  if (ID) {
    const produto = await serviceProdutos.getProduto(ID);

    // Se o ID existir no db.json o produto será renderizado, senão, aparecerá mensagem de erro.
    if (produto.id == ID) {
      renderizarProduto(ID);
    } else {
      divProduto.innerHTML = "<h1>ID INCORRETO</h1>";
    }
  }
};


// Atribui a função excluirProduto ao botão Excluir

document.querySelector("#btns__excluir").addEventListener('click', (event) => {
  event.preventDefault();
  excluirProduto();
  divProduto.innerHTML = "<h1>PRODUTO EXCLUÍDO!</h1>";
})

const excluirProduto = () => {
  const ID = document.querySelector("#produtopesquisainput").value;
  return serviceProdutos.deleteProduto(ID);
};
