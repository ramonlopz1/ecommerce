import { serviceProdutos } from "../services/service-produtos.js";

const deletarProduto = () => {
    const btnDelete = document.querySelector(".cards__btns__deletar")

    serviceProdutos.deleteProduto()
}



const listarEcriarProdutosEmLista = () => {
    serviceProdutos.getProdutos().then(produtos => {
        produtos.forEach(produto => {

            formatarPrecoECaminhoDaImagem(produto)

            const sectionLista = document.querySelector("#section__lista")
            const cardContainer = document.createElement("div")
            cardContainer.classList.add("section__lista__cards")
            const cardProduto = `
                                <div class="lista__cards__img">
                                    <img src="../img/main_produtos/produtos_section1/1.png" alt="imagem do produto" height="70px">
                                </div>
                                <div class="lista__cards__infos" data-produto-id="${produto.id}">
                                    <span class="cards__infos__nome">${produto.nome}</span>
                                    <span class="cards__infos__preco">${preco}</span>
                                    <span class="cards__infos__parcelas">6 x 1,99</span>
                                    
                                </div>
                                <div class="lista__cards__qtd">
                                <span class="cards__qtd__titulo">Quantidade:</span>
                                <span class="cards__infos__quantidade">39</span>
                                </div>
                                <div class="lista__cards__btns">
                                    <button class="cards__btns__ver">
                                    <i class="fa-regular fa-eye"></i>
                                    </button>
                                    <button class="cards__btns__editar">
                                    <i class="fa-regular fa-pen-to-square"></i>
                                    </button>
                                    <button class="cards__btns__deletar">
                                    <i class="fa-regular fa-trash-can"></i>
                                    </button>
                                </div>`

                            cardContainer.innerHTML = cardProduto
                            sectionLista.append(cardContainer)
        })
    })
}



const formatarPrecoECaminhoDaImagem = (produto) => {
    // Formata o preço
    let preco = parseFloat(produto.preco)
    preco = preco.toFixed(2).replace(".", ",")

    // Retorna apenas o nome da imagem, sem o caminho.
    let imgName = (produto.img).toString()
    imgName = imgName.replaceAll("\\", "")
        .replace("C:", "")
        .replace("fakepath", "")
}

listarEcriarProdutosEmLista()
