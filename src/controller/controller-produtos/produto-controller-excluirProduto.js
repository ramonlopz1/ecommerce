import { serviceProdutos } from "../../services/service-produtos.js";

import { renderizarProduto } from "../renderizarProduto/painel/painel-controller-excluir-produtos.js";


// FILTRA O PRODUTO PELO ID
const divProduto = document.querySelector("#form__div__produto");

document
  .querySelector("#btns__pesquisar_excluir")
  .addEventListener("click", (e) => {
    e.preventDefault();

    filtrarProduto();
  });

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







// Após filtrar o produto pelo ID, exclui o mesmo ao clicar no botão "Excluir".
const btnExcluir = document.querySelector("#btns__excluir");

btnExcluir.addEventListener('click', (event) => {
  event.preventDefault();
  excluirProduto();
  divProduto.innerHTML = "<h1>PRODUTO EXCLUÍDO!</h1>";
})

const excluirProduto = () => {
  const ID = document.querySelector("#produtopesquisainput").value;
  return serviceProdutos.deleteProduto(ID);
};
