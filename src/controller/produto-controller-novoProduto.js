import { serviceProdutos } from "../services/service-produtos.js";
import { valoresInputs } from "./produto-cadastro-controller-dadosNovoProdutoInputs.js";

document.querySelector("#btns__cancelar").addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "../html/painel.html";
});

document
  .querySelector("#btns__cadastrar")
  .addEventListener("click", (event) => {
    event.preventDefault();
    novoProduto();
  });

const novoProduto = async () => {
  const dadosInput = valoresInputs();

  const novoProduto = dadosInput.receberDadosModificados

  if (novoProduto) {
    // Faz um post via fetch api, enviando json para db.json
    await serviceProdutos.postProdutos(novoProduto);
  } else {
    console.log("preencha todos os campos");
  }

  document.forms[0].reset();
};
