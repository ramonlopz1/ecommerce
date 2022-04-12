const novoProduto = () => {
    const produtoImg = document.querySelector("#produtoimginput")
    const produtoNome = document.querySelector("#produtonome")
    const produtoPreco = document.querySelector("#produtopreco")
    const produtoDescricao = document.querySelector("#produtodescricao")
    
    const produtos = JSON.parse(localStorage.getItem("produtos")) || []

    const novoProduto = {
        img: produtoImg.value,
        nome: produtoNome.value,
        preco: produtoPreco.value,
        descricao: produtoDescricao.value
    }

    const atualizaProdutos = [...produtos, novoProduto]

    if(novoProduto.img && novoProduto.nome && 
        novoProduto.preco && novoProduto.descricao) {
        localStorage.setItem('produtos', JSON.stringify(atualizaProdutos))
    } else {
        console.log("preencha todos os campos")
    }

    document.forms[0].reset()
}

const btnAdd = document.querySelector("#btns__cadastrar")

btnAdd.addEventListener("click", (event) => {
    event.preventDefault()
    novoProduto()
})