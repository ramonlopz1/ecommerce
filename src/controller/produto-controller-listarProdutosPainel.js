import { serviceProdutos } from "../services/service-produtos.js"
import { listarEcriarProdutos } from "./produto-controller-listarProdutos.js"

const criarTemplateString = (produtoDadosFormatados) => {
    const container = document.createElement("div")
    container.classList.add("container")

    const templateString = `
                                <img src="assets/upload/${sequence.id}_${produtoDadosFormatados.formatImgPath}" alt="produto" class="container__produto__img">
                                 <div class="container__produto__info">
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
                                     <a href="" class="produto__botao">Ver produto</a>
                                 </div>`

    const section = document.querySelector(".categorias__containers")


    container.innerHTML = templateString
    section.appendChild(container)
}

listarEcriarProdutos()