import { serviceProdutos } from "../../services/service-produtos.js";
import { valoresInputs } from "./produto-controller-inputs.js";

const ID = document.querySelector("#produtopesquisainput");

document
  .querySelector("#btns__pesquisar")
  .addEventListener("click", async (event) => {
    event.preventDefault();

    const produto = await serviceProdutos.getProduto(ID.value);

    // Inicializa função que manipula os valores dos inputs
    const dadosInputs = valoresInputs();

    // Preenche valores dos inputs com os dados do produto
    dadosInputs.preencherInputsComDadosDoProduto(produto);
  });

document
  .querySelector("#btns__concluir")
  .addEventListener("click", async (event) => {
    event.preventDefault();

    // Inicializa função que manipula os valores dos inputs
    const dadosInputs = valoresInputs();

    // Recebe os dados modificados nos inputs
    const produtoEditado = dadosInputs.receberDadosDosInputs;

    // Envia o produto editado referenciando seu ID, para que seja substituído
    await serviceProdutos.putProdutos(produtoEditado, ID.value);

    document.forms[0].reset();
  });

// Cancela a edição do produto
document.querySelector("#btns__cancelar").addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "../html/painel.html";
});
