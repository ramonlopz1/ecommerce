import{httpMethods}from"../services/service-httpmethods.js";const listarEcriarProdutos=()=>{httpMethods.listaProdutos().then((a=>{a.forEach((a=>{let o=parseFloat(a.preco);o=o.toFixed(2).replace(".",",");let t=a.img.toString();t=t.replaceAll("\\","/").replace("C:/","").replace("fakepath","assets/img/main_produtos/produtos_section1");const r=document.createElement("div");r.classList.add("container");const e=`\n                                <img src="${t}" alt="produto" class="container__produto__img">\n                                 <div class="container__produto__info">\n                                    <span class="produto__nome">${a.nome}</span>\n                                    <div class="produto__rating">\n                                        <i class="fa-solid fa-star"></i>\n                                        <i class="fa-solid fa-star"></i>\n                                        <i class="fa-solid fa-star"></i>\n                                        <i class="fa-solid fa-star"></i>\n                                        <i class="fa-solid fa-star"></i>\n                                     </div>\n                                     <span class="produto__preco">R$ ${o}</span>\n                                     <span class="produto__parcelas">5x de R$ 37,94</span>\n                                     <a href="" class="produto__botao">Ver produto</a>\n                                 </div>`;r.innerHTML=e,s.appendChild(r)}))}));const s=document.querySelector(".categorias__containers")};listarEcriarProdutos();