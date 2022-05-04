import { serviceProdutos } from "../services/service-produtos.js";
import { valoresInputs } from "./produto-cadastro-controller-dadosNovoProdutoInputs.js";

const ID = document.querySelector("#produtopesquisainput");

document
  .querySelector("#btns__pesquisar")
  .addEventListener("click", async (event) => {
    event.preventDefault();

    const produto = await serviceProdutos.getProduto(ID.value);

    const dadosInputs = valoresInputs();

    dadosInputs.preencherInputsComDadosDoProduto(produto);
  });

document
  .querySelector("#btns__concluir")
  .addEventListener("click", async (event) => {
    event.preventDefault();

    const dadosInputs = valoresInputs();

    const produtoEditado = dadosInputs.receberDadosModificados;

    await serviceProdutos.putProdutos(produtoEditado, ID.value);

    document.forms[0].reset();
  });

document.querySelector("#btns__cancelar").addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "../html/painel.html";
});
