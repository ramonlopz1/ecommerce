import { serviceProdutos } from "../../../services/service-produtos.js";

import { formatarDados } from "../produto-controller-formatarDados.js";

/**
 * Essa função testa se a categoria do objeto produto é igual
 * a categoria vinda por parâmetro no URL, se coincidirem, então os produtos
 * da mesma categoria são renderizados.
 */

export const renderizarProdutos = async () => {
    // Seleciona param.categoria
    const objetoURL = new URL(window.location)
    const categoriaURL = objetoURL.searchParams.get('categoria')

    // Requisição dos produtos
    const produtos = await serviceProdutos.getProdutos();
    produtos.forEach((produto) => {

        // Renderiza produtos da mesma categoria
        if (produto.categoria === categoriaURL) {
            const dadosFormatados = formatarDados(produto)

            const template = document.createElement("div")
            template.classList.add("container")

            template.innerHTML = `<div class="produto__similares__img">
        <img src="../../upload/${dadosFormatados.id}_${dadosFormatados.nomeDaImagem}" alt="imagem do produto" height="110px" width="110px">
        </div>
        <div class="produto__similares__informacoes" data-produto-class="${dadosFormatados.id}">
        <span class="produto__similares__informacoes__nome">${dadosFormatados.nome}</span>
        <span class="produto__similares__informacoes__preco">R$ ${dadosFormatados.precoFormatado}</span>
        <span class="produto__similares__informacoes__parcelas">${dadosFormatados.precoParcela}</span>
        
        <div class="produto__similares__informacoes__rating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>
        <a href="./visualizar-produto.html?categoria=${dadosFormatados.categoria}&id=${dadosFormatados.id}" class="produto__botao">Ver produto</a>
        </div>`

            const divDestino = document.querySelector("#produto__similares__lista")

            divDestino.appendChild(template)
        }

    })

};

renderizarProdutos()