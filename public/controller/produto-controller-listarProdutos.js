import{serviceProdutos}from"../services/service-produtos.js";export const renderizarProdutos=async(a,s)=>{const n=await serviceProdutos.getProdutos();if(s){const o=n[s-1];if(o){const s=formatarDados(o),n=construirElementoHTML(s,a);classificaEInsereElementoNaDOM(n,a,s.categoria)}}else n.forEach((s=>{const n=formatarDados(s),o=construirElementoHTML(n,a);classificaEInsereElementoNaDOM(o,a,n.categoria)}))};const formatarDados=a=>{let s=parseInt(a.preco).toFixed(2).replace(".",","),n=(a.preco/a.parcelas).toFixed(2).replace(".",","),o=a.img.replaceAll("\\","").replace("C:","").replace("fakepath","");return a.precoFormatado=s,a.precoParcela=`${a.parcelas} x R$ ${n}`,a.nomeDaImagem=o,a},construirElementoHTML=(a,s)=>".categorias__containers"===s?`<img src="assets/upload/${a.id}_${a.nomeDaImagem}" alt="produto" class="container__produto__img">\n      <div class="container__produto__info" data-produto-id="${a.id}">\n          <span class="produto__nome">${a.nome}</span>\n          <div class="produto__rating">\n              <i class="fa-solid fa-star"></i>\n              <i class="fa-solid fa-star"></i>\n              <i class="fa-solid fa-star"></i>\n              <i class="fa-solid fa-star"></i>\n              <i class="fa-solid fa-star"></i>\n          </div>\n          <span class="produto__preco">R$ ${a.preco}</span>\n          <span class="produto__parcelas">${a.precoParcela}</span>\n          <a href="./assets/html/produto.html" class="produto__botao">Ver produto</a>\n      </div>`:".categorias__containerspainel"===s?`<div class="lista__cards__img">\n                <img src="../upload/${a.id}_${a.nomeDaImagem}" alt="imagem do produto" height="70px">\n            </div>\n            <div class="lista__cards__infos" data-produto-id="${a.id}">\n                <span class="cards__infos__nome">${a.nome}</span>\n                <span class="cards__infos__preco">${a.preco}</span>\n                <span class="cards__infos__parcelas">${a.precoParcela}</span>\n                \n            </div>\n            <div class="lista__cards__qtd">\n            <span class="cards__qtd__titulo">Quantidade:</span>\n            <span class="cards__infos__quantidade">39</span>\n            </div>\n            <div class="lista__cards__btns">\n                <button class="cards__btns__ver">\n                <i class="fa-regular fa-eye"></i>\n                </button>\n                <a href="../html/editar_produtos.html?id=${a.id}" class="cards__btns__editar">\n                  <i class="fa-regular fa-pen-to-square"></i>\n                </a>\n                <button class="cards__btns__deletar">\n                <i class="fa-regular fa-trash-can"></i>\n                </button>\n            </div>`:".painel__excluir__produto"===s?`<div class="lista__cards__img">\n                <img src="../upload/${a.id}_${a.nomeDaImagem}" alt="imagem do produto" height="70px">\n            </div>\n            <div class="lista__cards__infos" data-produto-id="${a.id}">\n                <span class="cards__infos__nome">${a.nome}</span>\n                <span class="cards__infos__preco">${a.preco}</span>\n                <span class="cards__infos__parcelas">${a.precoParcela}</span>\n                \n            </div>\n            <div class="lista__cards__qtd">\n            <span class="cards__qtd__titulo">Quantidade:</span>\n            <span class="cards__infos__quantidade">39</span>\n            </div>\n           `:void 0,classificaEInsereElementoNaDOM=(a,s,n)=>{const o=document.createElement("div");o.classList.add("container"),o.classList.add("section__lista__cards"),o.innerHTML=a;const e=document.querySelector(s+"."+n);if(e)e.appendChild(o);else{const a=document.querySelector(s);o.classList.remove("section__lista__cards"),o.classList.add("painel__excluir__produto"),a.innerHTML="",a.appendChild(o)}};