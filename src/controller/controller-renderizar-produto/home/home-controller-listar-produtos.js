import { serviceProdutos } from "../../../services/service-produtos.js";
import { formatarDados } from "../produto-controller-formatarDados.js";

/**
 * Essa função requisita o "objeto produtos", formata seus dados e renderiza todos os produtos na div de destino.
 */

export const renderizarProdutos = async () => {
  const produtos = await serviceProdutos.getProdutos();
  
  produtos.forEach((produto) => {

    const dadosFormatados = formatarDados(produto)    

    const template = document.createElement("div")
    template.classList.add("container")

    template.innerHTML = `<img src="assets/upload/${dadosFormatados.id}_${dadosFormatados.nomeDaImagem}" alt="produto" class="container__produto__img">
    <div class="container__produto__info" data-produto-id="${dadosFormatados.id}">
        <span class="produto__nome">${dadosFormatados.nome}</span>
        <div class="produto__rating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>
        <span class="produto__preco">R$ ${dadosFormatados.precoFormatado}</span>
        <span class="produto__parcelas">${dadosFormatados.precoParcela}</span>
        <a href="./assets/html/visualizar-produto/visualizar-produto.html?categoria=${dadosFormatados.categoria}&id=${dadosFormatados.id}" class="produto__botao">Ver produto</a>
    </div>`

    const divDestino = document.querySelector(".categorias__containers" + "." + dadosFormatados.categoria)
    
    divDestino.appendChild(template)
  })
};

renderizarProdutos()