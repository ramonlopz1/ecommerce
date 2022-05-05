import { serviceProdutos } from "../../../services/service-produtos.js";

import { formatarDados } from "../produto-controller-formatarDados.js";

/**
 * Essa função seleciona o ID passado pela URL do produto, requisita o produto por esse ID, 
 * formata e o renderiza.
 */

const visualizarProduto = async () => {
    const objetoURL = new URL(window.location)
    const id = objetoURL.searchParams.get('id')

    const produto = await serviceProdutos.getProduto(id)

    const divDestino = document.querySelector("#section__visualizar__produto")

    const dadosFormatados = formatarDados(produto)

    const templateHTML = `  <div id="produto__img">
                    <img src="../../upload/${dadosFormatados.id}_${dadosFormatados.nomeDaImagem}" alt="imagem do produto" height="250px" width="250px">
                </div>
                <div id="produto__informacoes" data-produto-id="${dadosFormatados.id}">
                    <span id="produto__informacoes__nome">${dadosFormatados.nome}</span>
                    <span id="produto__informacoes__preco">R$ ${dadosFormatados.precoFormatado}</span>
                    <span id="produto__informacoes__parcelas">${dadosFormatados.precoParcela}</span>
                    
                    <div id="produto__informacoes__rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <span id="produto__informacoes__descricao">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum culpa, ducimus adipisci quibusdam iure reprehenderit aliquam obcaecati officiis veritatis delectus nulla distinctio ea exercitationem officia ut, enim, deleniti dolorum fugiat.</span>
                </div>`
    divDestino.innerHTML = templateHTML
}

visualizarProduto()