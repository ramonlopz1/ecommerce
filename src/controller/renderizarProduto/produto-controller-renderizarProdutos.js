import { serviceProdutos } from "../../services/service-produtos.js";

import { formatarDados } from "./produto-controller-formatarDados.js";

export const renderizarProdutos = async (destino, id) => {
  const produtos = await serviceProdutos.getProdutos();

  if (!id) {
    produtos.forEach((produto) => {
      const dadosFormatados = formatarDados(produto);

      const criarTemplateString = construirElementoHTML(
        dadosFormatados,
        destino
      );

      classificaEInsereElementoNaDOM(
        criarTemplateString,
        destino,
        dadosFormatados.categoria
      );
    });
  } else {

    const produto = produtos[id-1]
    

    if (produto) {
      const dadosFormatados = formatarDados(produto);

      const criarTemplateString = construirElementoHTML(
        dadosFormatados,
        destino
      );

      classificaEInsereElementoNaDOM(
        criarTemplateString,
        destino,
        dadosFormatados.categoria
      );
    }
  }
};


const construirElementoHTML = (dados, destino) => {
  if (destino === ".categorias__containers") {
    return `<img src="assets/upload/${dados.id}_${dados.nomeDaImagem}" alt="produto" class="container__produto__img">
      <div class="container__produto__info" data-produto-id="${dados.id}">
          <span class="produto__nome">${dados.nome}</span>
          <div class="produto__rating">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
          </div>
          <span class="produto__preco">R$ ${dados.precoFormatado}</span>
          <span class="produto__parcelas">${dados.precoParcela}</span>
          <a href="./assets/html/visualizar-produto/visualizar-produto.html?id=${dados.id}" class="produto__botao">Ver produto</a>
      </div>`;
  } else if (destino === ".categorias__containerspainel") {
    return `<div class="lista__cards__img">
                <img src="../../upload/${dados.id}_${dados.nomeDaImagem}" alt="imagem do produto" height="70px">
            </div>
            <div class="lista__cards__infos" data-produto-id="${dados.id}">
                <span class="cards__infos__nome">${dados.nome}</span>
                <span class="cards__infos__preco">${dados.precoFormatado}</span>
                <span class="cards__infos__parcelas">${dados.precoParcela}</span>
                
            </div>
            <div class="lista__cards__qtd">
            <span class="cards__qtd__titulo">Quantidade:</span>
            <span class="cards__infos__quantidade">39</span>
            </div>
            <div class="lista__cards__btns">
                <button class="cards__btns__ver">
                <i class="fa-regular fa-eye"></i>
                </button>
                <a href="../html/editar_produtos.html?id=${dados.id}" class="cards__btns__editar">
                  <i class="fa-regular fa-pen-to-square"></i>
                </a>
                <button class="cards__btns__deletar">
                <i class="fa-regular fa-trash-can"></i>
                </button>
            </div>`;
  } else if (destino === ".painel__excluir__produto") {
    return `<div class="lista__cards__img">
                <img src="../../upload/${dados.id}_${dados.nomeDaImagem}" alt="imagem do produto" height="70px">
            </div>
            <div class="lista__cards__infos" data-produto-id="${dados.id}">
                <span class="cards__infos__nome">${dados.nome}</span>
                <span class="cards__infos__preco">${dados.precoFormatado}</span>
                <span class="cards__infos__parcelas">${dados.precoParcela}</span>
                
            </div>
            <div class="lista__cards__qtd">
            <span class="cards__qtd__titulo">Quantidade:</span>
            <span class="cards__infos__quantidade">39</span>
            </div>
           `;
  }
};

const classificaEInsereElementoNaDOM = (elementoHTML, destino, categoria) => {
  const container = document.createElement("div");
  container.classList.add("container");
  container.classList.add("section__lista__cards");
  container.innerHTML = elementoHTML;

  const section = document.querySelector(destino + "." + categoria);

  if (section) {
    section.appendChild(container);
  } else {
    const section = document.querySelector(destino);
    container.classList.remove("section__lista__cards");
    container.classList.add("painel__excluir__produto");
    section.innerHTML = "";
    section.appendChild(container);
  }
};
