import { httpMethods } from "../services/service-httpmethods.js"
const listarEcriarProdutos = () => {
    httpMethods.listaProdutos()
        .then(data => {
            data.produtos.forEach(produto => {
                let preco = parseFloat(produto.preco)
                preco = preco.toFixed(2).replace(".", ",")
        
                const container = document.createElement("div")
                container.classList.add("container")
                const cardProduto = `
                                <img src="assets/img/main_produtos/produtos_section1/1.png" alt="produto" class="container__produto__img">
                                 <div class="container__produto__info">
                                    <span class="produto__nome">${produto.nome}</span>
                                    <div class="produto__rating">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                     </div>
                                     <span class="produto__preco">R$ ${preco}</span>
                                     <span class="produto__parcelas">5x de R$ 37,94</span>
                                     <a href="" class="produto__botao">Ver produto</a>
                                 </div>`
        
                container.innerHTML = cardProduto
                categoriasContainers.appendChild(container)
            })
    })
        
    const categoriasContainers = document.querySelector(".categorias__containers")
}

listarEcriarProdutos()