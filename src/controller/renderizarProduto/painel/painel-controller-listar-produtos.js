import { serviceProdutos } from "../../../services/service-produtos.js";

import { formatarDados } from "../produto-controller-formatarDados.js";

export const renderizarProdutos = async () => {
  const produtos = await serviceProdutos.getProdutos();

  produtos.forEach((produto) => {

    const dadosFormatados = formatarDados(produto)

    const template = document.createElement("div")
    template.classList.add("container")

    template.innerHTML = `<div class="lista__cards__img">
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
<div class="lista__cards__btns">

    <a href="../visualizar-produto/visualizar-produto.html?id=${dadosFormatados.id}" class="cards__btns__ver">
      <i class="fa-regular fa-eye"></i>
    </a>

    <a href="../visualizar-produto/visualizar-produto.html?id=${dadosFormatados.id}" class="cards__btns__editar">
      <i class="fa-regular fa-pen-to-square"></i>
    </a>

    <a href="" class="cards__btns__deletar">
      <i class="fa-regular fa-trash-can"></i>
    </a>
</div>`

    const divDestino = document.querySelector(".categorias__containers" + "." + dadosFormatados.categoria)

    divDestino.appendChild(template)

  })

};

renderizarProdutos()