const novoCard = () => {
    const produtos = JSON.parse(localStorage.getItem("produtos")) || []

    const categoriasContainers = document.querySelector(".categorias__containers")

    produtos.forEach(produto => {
        const divContainer = document.createElement("div")
        divContainer.classList.add("container")

        const img = document.createElement("img")
        img.classList.add("container__produto__img")

        const containerProdutoInfo = document.createElement("div")
        containerProdutoInfo.classList.add("container__produto__info")

        const produtoNome = document.createElement("span")
        produtoNome.classList.add("produto__nome")
        produtoNome.innerHTML = produto.nome

        const estrelas = document.querySelector(".produto__rating")
        const rating = estrelas.cloneNode(true)

        const produtoPreco = document.createElement("span")
        produtoPreco.classList.add("produto__preco")
        produtoPreco.innerHTML = produto.preco

        const produtoParcelas = document.createElement("span")
        produtoParcelas.classList.add("produto__parcelas")
        
        const btnProduto = document.createElement("a")
        btnProduto.classList.add("produto__botao")


        containerProdutoInfo.appendChild(produtoNome)
        containerProdutoInfo.appendChild(rating)
        containerProdutoInfo.appendChild(produtoPreco)
        containerProdutoInfo.appendChild(produtoParcelas)
        containerProdutoInfo.appendChild(btnProduto)

        divContainer.appendChild(img)
        divContainer.appendChild(containerProdutoInfo)

        categoriasContainers.appendChild(divContainer)
    })
}

novoCard()