import { serviceProdutos } from "../../services/service-produtos.js";
import { valoresInputs } from "./produto-controller-inputs.js";

// Atribui a função novoProduto ao botão cadastrar
document.querySelector("#btns__cadastrar").addEventListener("click", (event) => {
    event.preventDefault();
    novoProduto();
  });

// Recebe dados dos inputs e envia para db.json
const novoProduto = async () => {
  // Inicializa função que seleciona os dados inseridos nos inputs
  const dadosInput = valoresInputs();

  const novoProduto = dadosInput.receberDadosDosInputs

  if (novoProduto) {
    await serviceProdutos.postProdutos(novoProduto);
  } else {
    console.log("preencha todos os campos");
  }

  document.forms[0].reset();
};
