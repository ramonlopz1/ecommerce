import { serviceProdutos } from "../services/service-produtos.js";

// Função principal que executará todos os procedimentos
export const listarEcriarProdutos = (destino, id) => {
  serviceProdutos.getProdutos().then((produtos) => {
    if (!id) {
      produtos.forEach((produto) => {
        const produtoDadosFormatados = formatarDadosRecebidos(produto);

        const templateFormatado = templateString(
          produtoDadosFormatados,
          destino
        );

        criarTemplateString(
          templateFormatado,
          destino,
          produtoDadosFormatados.categoria
        );
      });
    } else {
      produtos.forEach(produto => {
        if(produto.id == id) {
          console.log (produto)
          const produtoDadosFormatados = formatarDadosRecebidos(produto);
    
          const templateFormatado = templateString(produtoDadosFormatados, destino);
    
          criarTemplateString(
            templateFormatado,
            destino,
            produtoDadosFormatados.categoria
          );
        }
      })
      
    }
  });
};

const formatarDadosRecebidos = (produto) => {
  let formatPreco = parseFloat(produto.preco);
  formatPreco = formatPreco.toFixed(2).replace(".", ",");
  produto.formatPreco = formatPreco;

  let formatImgPath = produto.img.toString();
  formatImgPath = formatImgPath
    .replaceAll("\\", "")
    .replace("C:", "")
    .replace("fakepath", "");

  produto.formatImgPath = formatImgPath;

  return produto;
};

const templateString = (produtoDadosFormatados, destino) => {
  if (destino === ".categorias__containers") {
    return `<img src="assets/upload/${produtoDadosFormatados.id}_${produtoDadosFormatados.formatImgPath}" alt="produto" class="container__produto__img">
      <div class="container__produto__info" data-produto-id="${produtoDadosFormatados.id}">
          <span class="produto__nome">${produtoDadosFormatados.nome}</span>
          <div class="produto__rating">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
          </div>
          <span class="produto__preco">R$ ${produtoDadosFormatados.formatPreco}</span>
          <span class="produto__parcelas">5x de R$ 37,94</span>
          <a href="./assets/html/produto.html" class="produto__botao">Ver produto</a>
      </div>`;
  } else if (destino === ".categorias__containerspainel") {
    return `<div class="lista__cards__img">
                <img src="../upload/${produtoDadosFormatados.id}_${produtoDadosFormatados.formatImgPath}" alt="imagem do produto" height="70px">
            </div>
            <div class="lista__cards__infos" data-produto-id="${produtoDadosFormatados.id}">
                <span class="cards__infos__nome">${produtoDadosFormatados.nome}</span>
                <span class="cards__infos__preco">${produtoDadosFormatados.formatPreco}</span>
                <span class="cards__infos__parcelas">6 x 1,99</span>
                
            </div>
            <div class="lista__cards__qtd">
            <span class="cards__qtd__titulo">Quantidade:</span>
            <span class="cards__infos__quantidade">39</span>
            </div>
            <div class="lista__cards__btns">
                <button class="cards__btns__ver">
                <i class="fa-regular fa-eye"></i>
                </button>
                <button class="cards__btns__editar">
                <i class="fa-regular fa-pen-to-square"></i>
                </button>
                <button class="cards__btns__deletar">
                <i class="fa-regular fa-trash-can"></i>
                </button>
            </div>`;
  } else if (destino === ".painel__excluir__produto") {
    return `<div class="lista__cards__img">
                <img src="../upload/${produtoDadosFormatados.id}_${produtoDadosFormatados.formatImgPath}" alt="imagem do produto" height="70px">
            </div>
            <div class="lista__cards__infos" data-produto-id="${produtoDadosFormatados.id}">
                <span class="cards__infos__nome">${produtoDadosFormatados.nome}</span>
                <span class="cards__infos__preco">${produtoDadosFormatados.formatPreco}</span>
                <span class="cards__infos__parcelas">6 x 1,99</span>
                
            </div>
            <div class="lista__cards__qtd">
            <span class="cards__qtd__titulo">Quantidade:</span>
            <span class="cards__infos__quantidade">39</span>
            </div>
           `;
  }
};

const criarTemplateString = (templateString, destino, categoria) => {
  const container = document.createElement("div");
  container.classList.add("container");
  container.classList.add("section__lista__cards");
  container.innerHTML = templateString;

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
