import { serviceProdutos } from "../services/service-produtos.js"

const sequence = {
    _id: 0,
    get id() { return this._id++ }
}

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

export const listarEcriarProdutos = () => {
    serviceProdutos.getProdutos()
        .then(produtos => {
            produtos.forEach(produto => {
                
                const produtoDadosFormatados = formatarDadosRecebidos(produto)
                criarTemplateString(produtoDadosFormatados)
                
            })
    })
        
}

export const formatarDadosRecebidos = (produto) => {
    
    let formatPreco = parseFloat(produto.preco)
    formatPreco = formatPreco.toFixed(2).replace(".", ",")
    produto.formatPreco = formatPreco
    
    let formatImgPath = (produto.img).toString()
    formatImgPath = formatImgPath.replaceAll("\\", "")
        .replace("C:", "")
        .replace("fakepath", "")

    produto.formatImgPath = formatImgPath
        

    return produto
}

listarEcriarProdutos()

