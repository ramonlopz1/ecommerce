import{serviceProdutos}from"../../../services/service-produtos.js";import{formatarDados}from"../produto-controller-formatarDados.js";export const renderizarProdutos=async()=>{(await serviceProdutos.getProdutos()).forEach((a=>{const r=formatarDados(a),s=document.createElement("div");s.classList.add("container"),s.innerHTML=`\n              <div class="lista__cards__img">\n                <img src="../../upload/${r.id}_${r.nomeDaImagem}" alt="imagem do produto" height="70px">\n              </div>\n              <div class="lista__cards__infos" id="${r.id}">\n                <span class="cards__infos__nome">${r.nome}</span>\n                <span class="cards__infos__preco">${r.precoFormatado}</span>\n                <span class="cards__infos__parcelas">${r.precoParcela}</span>\n              </div>\n              <div class="lista__cards__btns">\n                  <a href="../visualizar-produto/visualizar-produto.html?categoria=${r.categoria}&id=${r.id}" class="cards__btns__ver">\n                    <i class="fa-regular fa-eye"></i>\n                  </a>\n                  <a href="./painel-editar-produtos.html?categoria=${r.categoria}&id=${r.id}" class="cards__btns__editar">\n                    <i class="fa-regular fa-pen-to-square"></i>\n                  </a>\n                  <a href="" class="cards__btns__deletar">\n                    <i class="fa-regular fa-trash-can"></i>\n                  </a>\n              </div>`;document.querySelector(".categorias__containers."+r.categoria).appendChild(s)})),document.querySelectorAll(".container").forEach((a=>{const r=a.querySelector(".lista__cards__infos");a.querySelector(".cards__btns__deletar").addEventListener("click",(async s=>{s.preventDefault(),await serviceProdutos.deleteProduto(r.id),a.remove()}))}))};renderizarProdutos();