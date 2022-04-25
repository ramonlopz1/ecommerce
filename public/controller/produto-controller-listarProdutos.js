import{serviceProdutos}from"../services/service-produtos.js";const sequence={_id:0,get id(){return this._id++}};export const listarEcriarProdutos=a=>{serviceProdutos.getProdutos().then((s=>{s.forEach((s=>{const t=formatarDadosRecebidos(s),n=templateString(t,a);criarTemplateString(n,a)}))}))};const formatarDadosRecebidos=a=>{let s=parseFloat(a.preco);s=s.toFixed(2).replace(".",","),a.formatPreco=s;let t=a.img.toString();return t=t.replaceAll("\\","").replace("C:","").replace("fakepath",""),a.formatImgPath=t,a},templateString=(a,s)=>".categorias__containers"===s?`<img src="assets/upload/${sequence.id}_${a.formatImgPath}" alt="produto" class="container__produto__img">\n      <div class="container__produto__info">\n          <span class="produto__nome">${a.nome}</span>\n          <div class="produto__rating">\n              <i class="fa-solid fa-star"></i>\n              <i class="fa-solid fa-star"></i>\n              <i class="fa-solid fa-star"></i>\n              <i class="fa-solid fa-star"></i>\n              <i class="fa-solid fa-star"></i>\n          </div>\n          <span class="produto__preco">R$ ${a.formatPreco}</span>\n          <span class="produto__parcelas">5x de R$ 37,94</span>\n          <a href="" class="produto__botao">Ver produto</a>\n      </div>`:`<div class="lista__cards__img">\n                <img src="../upload/${sequence.id}_${a.formatImgPath}" alt="imagem do produto" height="70px">\n            </div>\n            <div class="lista__cards__infos" data-produto-id="${a.id}">\n                <span class="cards__infos__nome">${a.nome}</span>\n                <span class="cards__infos__preco">${a.formatPreco}</span>\n                <span class="cards__infos__parcelas">6 x 1,99</span>\n                \n            </div>\n            <div class="lista__cards__qtd">\n            <span class="cards__qtd__titulo">Quantidade:</span>\n            <span class="cards__infos__quantidade">39</span>\n            </div>\n            <div class="lista__cards__btns">\n                <button class="cards__btns__ver">\n                <i class="fa-regular fa-eye"></i>\n                </button>\n                <button class="cards__btns__editar">\n                <i class="fa-regular fa-pen-to-square"></i>\n                </button>\n                <button class="cards__btns__deletar">\n                <i class="fa-regular fa-trash-can"></i>\n                </button>\n            </div>`,criarTemplateString=(a,s)=>{const t=document.createElement("div");t.classList.add("container"),t.classList.add("section__lista__cards"),t.innerHTML=a;document.querySelector(s).appendChild(t)};