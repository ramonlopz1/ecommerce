import { serviceProdutos } from "../../services/service-produtos.js";
import { valoresInputs } from "./produto-controller-inputs.js";

// Atribui a função de requisitarProdutoViaID ao botão pesquisar.
document.querySelector("#btns__pesquisar").addEventListener("click", (event) => {
  event.preventDefault();

  requisitarProdutoViaID()
});

// Faz requisição, através do ID do produto, que pode ser passado pelo URL ou pelo INPUT.
const requisitarProdutoViaID = async () => {
  const objetoURL = new URL(window.location)

  const idURL = objetoURL.searchParams.get("id")
  const idInput = document.querySelector("#produtopesquisainput").value;

  const id = idURL || idInput

  let produto = await serviceProdutos.getProduto(id);

  // Inicializa função que manipula os valores dos inputs.
  const dadosInputs = valoresInputs();

  // Preenche valores dos inputs com os dados do produto encontrado via ID.
  dadosInputs.preencherInputsComDadosDoProduto(produto);
}

requisitarProdutoViaID()


// Atribui função de enviarDadosModificados ao botão concluir.
document.querySelector("#btns__concluir").addEventListener("click", (event) => {
    event.preventDefault();

    enviarDadosModificados()

    document.forms[0].reset();
  });

const enviarDadosModificados = async () => {
  // Inicializa função que manipula os valores dos inputs
  const dadosInputs = valoresInputs();

  // Recebe os dados modificados nos inputs
  const produtoEditado = dadosInputs.receberDadosDosInputs;

  // Seleciona o ID inserido no input
  const idInput = document.querySelector("#produtopesquisainput").value;
  // Envia o produto editado referenciando seu ID, para que seja substituído
  await serviceProdutos.putProdutos(produtoEditado, idInput);
}


// Cancela a edição do produto e retorna ao painel.
document.querySelector("#btns__cancelar").addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "../painel/painel.html";
});
