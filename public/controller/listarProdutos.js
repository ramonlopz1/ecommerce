import{httpMethods}from"../services/service-httpmethods.js";const sequence={_id:0,get id(){return this._id++}},listarEcriarProdutos=()=>{httpMethods.listaProdutos().then((a=>{a.forEach((a=>{let t=parseFloat(a.preco);t=t.toFixed(2).replace(".",",");let o=a.img.toString();o=o.replaceAll("\\","").replace("C:","").replace("fakepath","");const e=document.createElement("div");e.classList.add("container");const r=`\n                                <img src="assets/upload/${sequence.id}_${o}" alt="produto" class="container__produto__img">\n                                 <div class="container__produto__info">\n                                    <span class="produto__nome">${a.nome}</span>\n                                    <div class="produto__rating">\n                                        <i class="fa-solid fa-star"></i>\n                                        <i class="fa-solid fa-star"></i>\n                                        <i class="fa-solid fa-star"></i>\n                                        <i class="fa-solid fa-star"></i>\n                                        <i class="fa-solid fa-star"></i>\n                                     </div>\n                                     <span class="produto__preco">R$ ${t}</span>\n                                     <span class="produto__parcelas">5x de R$ 37,94</span>\n                                     <a href="" class="produto__botao">Ver produto</a>\n                                 </div>`;e.innerHTML=r,s.appendChild(e)}))}));const s=document.querySelector(".categorias__containers")};listarEcriarProdutos();