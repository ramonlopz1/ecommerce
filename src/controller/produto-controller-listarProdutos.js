import { serviceProdutos } from "../services/service-produtos.js";

/**
 * Função principal que executará todos os procedimentos.
 * Ela lista todos o produtos e retorna um html template string de acordo com o destino escolhido,
 * como ela será utilizada em 3 páginas, retornará uma template string para cada página,
 * caso o ID seja passado, ela lista apenas o produto que contém o ID recebido
 */

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

const formatarDados = (produto) => {
  let precoFormatado = parseInt(produto.preco).toFixed(2).replace(".", ",");

  let precoParcela = (produto.preco / produto.parcelas)
    .toFixed(2)
    .replace(".", ",");

  let nomeDaImagem = produto.img
    .replaceAll("\\", "")
    .replace("C:", "")
    .replace("fakepath", "");

  produto.precoFormatado = precoFormatado;
  produto.precoParcela = `${produto.parcelas} x R$ ${precoParcela}`;
  produto.nomeDaImagem = nomeDaImagem;

  return produto;
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
          <span class="produto__preco">R$ ${dados.preco}</span>
          <span class="produto__parcelas">${dados.precoParcela}</span>
          <a href="./assets/html/produto.html" class="produto__botao">Ver produto</a>
      </div>`;
  } else if (destino === ".categorias__containerspainel") {
    return `<div class="lista__cards__img">
                <img src="../upload/${dados.id}_${dados.nomeDaImagem}" alt="imagem do produto" height="70px">
            </div>
            <div class="lista__cards__infos" data-produto-id="${dados.id}">
                <span class="cards__infos__nome">${dados.nome}</span>
                <span class="cards__infos__preco">${dados.preco}</span>
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
                <img src="../upload/${dados.id}_${dados.nomeDaImagem}" alt="imagem do produto" height="70px">
            </div>
            <div class="lista__cards__infos" data-produto-id="${dados.id}">
                <span class="cards__infos__nome">${dados.nome}</span>
                <span class="cards__infos__preco">${dados.preco}</span>
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
