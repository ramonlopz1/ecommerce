import { serviceProdutos } from "../services/service-produtos.js"

const sequence = {
    _id: 0,
    get id() { return this._id++ }
}

const listarEcriarProdutos = () => {
    serviceProdutos.getProdutos()
        .then(produtos => {
            produtos.forEach(produto => {
                
                // Formata o preço
                let preco = parseFloat(produto.preco)
                preco = preco.toFixed(2).replace(".", ",")

                // Retorna apenas o nome da imagem, sem o caminho.
                let imgName = (produto.img).toString()
                imgName = imgName.replaceAll("\\", "")
                    .replace("C:", "")
                    .replace("fakepath", "")
           
                // Cria div com informações do produto via Template String
                const container = document.createElement("div")
                container.classList.add("container")
                const cardProduto = `
                                <img src="assets/upload/${sequence.id}_${imgName}" alt="produto" class="container__produto__img">
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