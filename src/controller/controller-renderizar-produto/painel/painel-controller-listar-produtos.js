import { serviceProdutos } from "../../../services/service-produtos.js";
import { formatarDados } from "../produto-controller-formatarDados.js";

/**
 * Essa função requisita o "objeto produtos", formata seus dados e renderiza todos os produtos na div de destino.
 * Ela também tem um EventListener no botão Deletar, para excluir produtos da lista.
 */

export const renderizarProdutos = async () => {
  const produtos = await serviceProdutos.getProdutos();

  produtos.forEach((produto) => {

    const dadosFormatados = formatarDados(produto)

    const template = document.createElement("div")
    template.classList.add("container")

    template.innerHTML = `
              <div class="lista__cards__img">
                <img src="../../upload/${dadosFormatados.id}_${dadosFormatados.nomeDaImagem}" alt="imagem do produto" height="70px">
              </div>
              <div class="lista__cards__infos" id="${dadosFormatados.id}">
                <span class="cards__infos__nome">${dadosFormatados.nome}</span>
                <span class="cards__infos__preco">${dadosFormatados.precoFormatado}</span>
                <span class="cards__infos__parcelas">${dadosFormatados.precoParcela}</span>
              </div>
              <div class="lista__cards__btns">
                  <a href="../visualizar-produto/visualizar-produto.html?categoria=${dadosFormatados.categoria}&id=${dadosFormatados.id}" class="cards__btns__ver">
                    <i class="fa-regular fa-eye"></i>
                  </a>
                  <a href="./painel-editar-produtos.html?categoria=${dadosFormatados.categoria}&id=${dadosFormatados.id}" class="cards__btns__editar">
                    <i class="fa-regular fa-pen-to-square"></i>
                  </a>
                  <a href="" class="cards__btns__deletar">
                    <i class="fa-regular fa-trash-can"></i>
                  </a>
              </div>`

    const divDestino = document.querySelector(".categorias__containers" + "." + dadosFormatados.categoria)

    divDestino.appendChild(template)
  })

  // Excluir produtos da lista
    document.querySelectorAll(".container").forEach((container) => {
      const containerID = container.querySelector(".lista__cards__infos")
     const btnDeletar = container.querySelector(".cards__btns__deletar")
      
    btnDeletar.addEventListener("click", async (event) => {
      event.preventDefault()
      await serviceProdutos.deleteProduto(containerID.id)
      container.remove()
    })

    })
};

renderizarProdutos()

