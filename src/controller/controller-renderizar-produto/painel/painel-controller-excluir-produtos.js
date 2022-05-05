import { serviceProdutos } from "../../../services/service-produtos.js";
import { formatarDados } from "../produto-controller-formatarDados.js";

/**
 * 
 * Essa função renderiza o produto através do id recebido no input.
 *  */
export const renderizarProduto = async (id) => {
    const produto = await serviceProdutos.getProduto(id);

    if (produto) {
        const dadosFormatados = formatarDados(produto)

        const template = document.createElement("div")
        template.classList.add("container")

        template.innerHTML = `
            <div class="lista__cards__img">
                <img src="../../upload/${dadosFormatados.id}_${dadosFormatados.nomeDaImagem}" alt="imagem do produto" height="70px">
            </div>
            <div class="lista__cards__infos" data-produto-id="${dadosFormatados.id}">
                <span class="cards__infos__nome">${dadosFormatados.nome}</span>
                <span class="cards__infos__preco">${dadosFormatados.precoFormatado}</span>
                <span class="cards__infos__parcelas">${dadosFormatados.precoParcela}</span>
                
            </div>
            <div class="lista__cards__qtd">
                <span class="cards__qtd__titulo">Quantidade:</span>
                <span class="cards__infos__quantidade">39</span>
            </div>
            `
        const divDestino = document.querySelector(".painel__excluir__produto")

        divDestino.replaceChildren(template)
    }
};

