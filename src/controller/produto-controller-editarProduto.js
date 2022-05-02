import { serviceProdutos } from "../services/service-produtos.js";
import {
  getValuesFromInput,
  getValuesFromDB,
} from "./produto-controller-getInputValues.js";

const spanErro = document.querySelector("#produtopesquisa__erro");
const ID = document.querySelector("#produtopesquisainput");

document
  .querySelector("#btns__pesquisar")
  .addEventListener("click", async (event) => {
    event.preventDefault();

    const produto = await serviceProdutos.getProduto(ID.value);

    getValuesFromDB(produto);
  });

document
  .querySelector("#btns__concluir")
  .addEventListener("click", async (event) => {
    event.preventDefault();

    const produtoEditado = getValuesFromInput();

    await serviceProdutos.putProdutos(produtoEditado, ID.value);

    document.forms[0].reset();
  });

document.querySelector("#btns__cancelar").addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "../html/painel.html";
});
