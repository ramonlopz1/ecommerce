import { serviceProdutos } from "../../services/service-produtos.js";
import { valoresInputs } from "./produto-controller-inputs.js";

// Cancela a operação
document.querySelector("#btns__cancelar").addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "../html/painel.html";
});

// Cadastra o novo produto
document
  .querySelector("#btns__cadastrar")
  .addEventListener("click", (event) => {
    event.preventDefault();
    novoProduto();
  });

// Recebe dados dos inputs e envia para db.json
const novoProduto = async () => {
  const dadosInput = valoresInputs();

  const novoProduto = dadosInput.receberDadosDosInputs

  if (novoProduto) {
    await serviceProdutos.postProdutos(novoProduto);
  } else {
    console.log("preencha todos os campos");
  }

  document.forms[0].reset();
};
