import{serviceProdutos}from"../services/service-produtos.js";export const listarEcriarProdutos=async(a,s)=>{const t=await serviceProdutos.getProdutos();s?t.forEach((t=>{if(t.id==s){console.log(t);const s=formatarDadosRecebidos(t),r=templateString(s,a);criarTemplateString(r,a,s.categoria)}})):t.forEach((s=>{const t=formatarDadosRecebidos(s),r=templateString(t,a);criarTemplateString(r,a,t.categoria)}))};const formatarDadosRecebidos=a=>{let s=parseFloat(a.preco);s=s.toFixed(2).replace(".",","),a.formatPreco=s;let t=parseFloat(a.preco/a.parcelas).toFixed(2).replace(".",",");a.formatParcelas=`${a.parcelas} x R$ ${t}`;let r=a.img.toString();return r=r.replaceAll("\\","").replace("C:","").replace("fakepath",""),a.formatImgPath=r,a},templateString=(a,s)=>".categorias__containers"===s?`<img src="assets/upload/${a.id}_${a.formatImgPath}" alt="produto" class="container__produto__img">\n      <div class="container__produto__info" data-produto-id="${a.id}">\n          <span class="produto__nome">${a.nome}</span>\n          <div class="produto__rating">\n              <i class="fa-solid fa-star"></i>\n              <i class="fa-solid fa-star"></i>\n              <i class="fa-solid fa-star"></i>\n              <i class="fa-solid fa-star"></i>\n              <i class="fa-solid fa-star"></i>\n          </div>\n          <span class="produto__preco">R$ ${a.formatPreco}</span>\n          <span class="produto__parcelas">${a.formatParcelas}</span>\n          <a href="./assets/html/produto.html" class="produto__botao">Ver produto</a>\n      </div>`:".categorias__containerspainel"===s?`<div class="lista__cards__img">\n                <img src="../upload/${a.id}_${a.formatImgPath}" alt="imagem do produto" height="70px">\n            </div>\n            <div class="lista__cards__infos" data-produto-id="${a.id}">\n                <span class="cards__infos__nome">${a.nome}</span>\n                <span class="cards__infos__preco">${a.formatPreco}</span>\n                <span class="cards__infos__parcelas">${a.formatParcelas}</span>\n                \n            </div>\n            <div class="lista__cards__qtd">\n            <span class="cards__qtd__titulo">Quantidade:</span>\n            <span class="cards__infos__quantidade">39</span>\n            </div>\n            <div class="lista__cards__btns">\n                <button class="cards__btns__ver">\n                <i class="fa-regular fa-eye"></i>\n                </button>\n                <button class="cards__btns__editar">\n                <i class="fa-regular fa-pen-to-square"></i>\n                </button>\n                <button class="cards__btns__deletar">\n                <i class="fa-regular fa-trash-can"></i>\n                </button>\n            </div>`:".painel__excluir__produto"===s?`<div class="lista__cards__img">\n                <img src="../upload/${a.id}_${a.formatImgPath}" alt="imagem do produto" height="70px">\n            </div>\n            <div class="lista__cards__infos" data-produto-id="${a.id}">\n                <span class="cards__infos__nome">${a.nome}</span>\n                <span class="cards__infos__preco">${a.formatPreco}</span>\n                <span class="cards__infos__parcelas">${a.formatParcelas}</span>\n                \n            </div>\n            <div class="lista__cards__qtd">\n            <span class="cards__qtd__titulo">Quantidade:</span>\n            <span class="cards__infos__quantidade">39</span>\n            </div>\n           `:void 0,criarTemplateString=(a,s,t)=>{const r=document.createElement("div");r.classList.add("container"),r.classList.add("section__lista__cards"),r.innerHTML=a;const n=document.querySelector(s+"."+t);if(n)n.appendChild(r);else{const a=document.querySelector(s);r.classList.remove("section__lista__cards"),r.classList.add("painel__excluir__produto"),a.innerHTML="",a.appendChild(r)}};