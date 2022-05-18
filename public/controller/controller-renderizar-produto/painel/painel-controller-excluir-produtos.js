import{serviceProdutos}from"../../../services/service-produtos.js";import{formatarDados}from"../produto-controller-formatarDados.js";export const renderizarProduto=async a=>{const s=await serviceProdutos.getProduto(a);if(s){const a=formatarDados(s),o=document.createElement("div");o.classList.add("container"),o.innerHTML=`\n            <div class="lista__cards__img">\n                <img src="../../upload/${a.id}_${a.nomeDaImagem}" alt="imagem do produto" height="70px">\n            </div>\n            <div class="lista__cards__infos" data-produto-id="${a.id}">\n                <span class="cards__infos__nome">${a.nome}</span>\n                <span class="cards__infos__preco">${a.precoFormatado}</span>\n                <span class="cards__infos__parcelas">${a.precoParcela}</span>\n                \n            </div>\n            <div class="lista__cards__qtd">\n                <span class="cards__qtd__titulo">Quantidade:</span>\n                <span class="cards__infos__quantidade">39</span>\n            </div>\n            `;document.querySelector(".painel__excluir__produto").replaceChildren(o)}};