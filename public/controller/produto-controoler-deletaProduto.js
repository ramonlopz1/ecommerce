import{serviceProdutos}from"../services/service-produtos.js";const deletarProduto=()=>{document.querySelector(".cards__btns__deletar");serviceProdutos.deleteProduto()},listarEcriarProdutosEmLista=()=>{serviceProdutos.getProdutos().then((s=>{s.forEach((s=>{formatarPrecoECaminhoDaImagem(s);const a=document.querySelector("#section__lista"),n=document.createElement("div");n.classList.add("section__lista__cards");const t=`\n                                <div class="lista__cards__img">\n                                    <img src="../img/main_produtos/produtos_section1/1.png" alt="imagem do produto" height="70px">\n                                </div>\n                                <div class="lista__cards__infos" data-produto-id="${s.id}">\n                                    <span class="cards__infos__nome">${s.nome}</span>\n                                    <span class="cards__infos__preco">${preco}</span>\n                                    <span class="cards__infos__parcelas">6 x 1,99</span>\n                                    \n                                </div>\n                                <div class="lista__cards__qtd">\n                                <span class="cards__qtd__titulo">Quantidade:</span>\n                                <span class="cards__infos__quantidade">39</span>\n                                </div>\n                                <div class="lista__cards__btns">\n                                    <button class="cards__btns__ver">\n                                    <i class="fa-regular fa-eye"></i>\n                                    </button>\n                                    <button class="cards__btns__editar">\n                                    <i class="fa-regular fa-pen-to-square"></i>\n                                    </button>\n                                    <button class="cards__btns__deletar">\n                                    <i class="fa-regular fa-trash-can"></i>\n                                    </button>\n                                </div>`;n.innerHTML=t,a.append(n)}))}))},formatarPrecoECaminhoDaImagem=s=>{let a=parseFloat(s.preco);a=a.toFixed(2).replace(".",",");let n=s.img.toString();n=n.replaceAll("\\","").replace("C:","").replace("fakepath","")};serviceProdutos.getProdutos().then((s=>{s.forEach((s=>{formatarPrecoECaminhoDaImagem(s);const a=document.querySelector("#section__lista"),n=document.createElement("div");n.classList.add("section__lista__cards");const t=`\n                                <div class="lista__cards__img">\n                                    <img src="../img/main_produtos/produtos_section1/1.png" alt="imagem do produto" height="70px">\n                                </div>\n                                <div class="lista__cards__infos" data-produto-id="${s.id}">\n                                    <span class="cards__infos__nome">${s.nome}</span>\n                                    <span class="cards__infos__preco">${preco}</span>\n                                    <span class="cards__infos__parcelas">6 x 1,99</span>\n                                    \n                                </div>\n                                <div class="lista__cards__qtd">\n                                <span class="cards__qtd__titulo">Quantidade:</span>\n                                <span class="cards__infos__quantidade">39</span>\n                                </div>\n                                <div class="lista__cards__btns">\n                                    <button class="cards__btns__ver">\n                                    <i class="fa-regular fa-eye"></i>\n                                    </button>\n                                    <button class="cards__btns__editar">\n                                    <i class="fa-regular fa-pen-to-square"></i>\n                                    </button>\n                                    <button class="cards__btns__deletar">\n                                    <i class="fa-regular fa-trash-can"></i>\n                                    </button>\n                                </div>`;n.innerHTML=t,a.append(n)}))}));